import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <div className='main'>

            <div className='item-list'>

                <div className='item-list__header'>

                    <h2>Artistas Populares</h2>

                    <a className='item-list__link' href="/">Mostrar tudo</a>
                </div>

                <div className='single-item'>

                    <img className='single-item__image' src="https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a" alt="Imagem do artista X" />

                    <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />

                    <p>Matheus & Kauan</p>

                    <p>Artista</p>

                </div>

            </div>

        </div>
    )
}

export default Main