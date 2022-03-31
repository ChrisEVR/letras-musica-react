import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from './Letra'
import useLetras from "../hooks/useLetras"

const AppLetras = () => {

    const { mensaje, letra, cargando } = useLetras()

  return (

    <>
        <header>Búsqueda de Letras de Canciones</header>

        <Formulario/>

        <main>
            {
                cargando ?  "Cargando..." :
                mensaje ? <Alerta>{mensaje}</Alerta> :
                letra ? <Letra/> :
                <p className="text-center"> 
                    Busca las letras de las canciones de tus artistas favoritos
                </p>
            }
        </main>
    </>


  )
}

export default AppLetras