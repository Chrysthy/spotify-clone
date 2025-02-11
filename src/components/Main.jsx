//import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => {

    return (

        <div className="main">

            <div className="item-list">

                <div className="item-list__header">

                    <h2>Artistas Populares</h2>

                    <a className="item-list__link" href="/">Mostrar tudo</a>

                </div>


                <div className="single-item" >

                    <img className="single-item__image"  src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X"/>

                    <FontAwesomeIcon icon="fa-solid fa-circle-play" />

                    <p>Luan Santana</p>

                    <p>Artista</p>

                </div>

            </div>

        </div>
    )
}

export default Main