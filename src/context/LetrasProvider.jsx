import {useState, createContext} from 'react'
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

    const [mensaje, setMensaje] = useState("")
    const [letra, setLetra] = useState('')
    const [cargando, setCargando] = useState(false)

    const busquedaLetra = async busqueda => {
        setCargando(true)
        try {
            const {artista, cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const {data} = await axios(url)
            setLetra(data.lyrics)
            setMensaje('')
        } catch (error) {
            setMensaje('Canción No Encontrada')
        }
        setCargando(false)
    }

    return (
        <LetrasContext.Provider
            value={{
                mensaje,
                setMensaje,
                busquedaLetra,
                letra,
                cargando
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext