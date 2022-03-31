import { useState } from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const { setMensaje, busquedaLetra } = useLetras()

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setMensaje('Se requiere llenar todos los campos')
            return
        }

        busquedaLetra(busqueda)
        
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por Artistas y Canción</legend>

        <div className="form-grid">
            <div>
                <label htmlFor="artista">Artista</label>

                <input 
                    id="artista"
                    type="text" 
                    name="artista"
                    placeholder="Nombre del Artista"
                    value={busqueda.artista}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>

            <div>
                <label htmlFor="cancion">Canción</label>

                <input 
                    id="cancion"
                    type="text" 
                    name="cancion"
                    placeholder="Nombre de la Canción"
                    value={busqueda.cancion}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>

            <input type="submit" value="Buscar"/>
        </div>
    </form>
  )
}

export default Formulario