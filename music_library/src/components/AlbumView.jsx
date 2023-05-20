import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView
