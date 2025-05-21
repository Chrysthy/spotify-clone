import React from 'react'
import Player from '../components/Player'

const Song = () => {
    return (
        <div className='song'>

            <div className="song__container">

                <div className="song__image-container">

                    <img
                        src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                        alt="Imagem da música x "
                    />

                </div>

            </div>

            <div className="song__bar">

                <div className='song__artist-image'>

                    <img s
                        rc="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
                        alt="Imagem do artista y"
                    />

                </div>

                <Player />

                <div></div>

            </div>

        </div>
    )
}

export default Song