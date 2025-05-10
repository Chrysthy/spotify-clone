import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function ItemList() {

    return (
        
        <div className='item-list'>

            <div className='item-list__header'>

                <h2>Artistas Populares</h2>

                <a className='item-list__link' href="/">Mostrar tudo</a>
            </div>

            <div className='item-list__container'>

                <div className='single-item'>

                    <div className='single-item__div-image-button'>

                        <div className='single-item__div-image'>

                            <img className='single-item__image' src="https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a" alt="Imagem do artista X" />

                        </div>

                        <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />

                    </div>

                    <div className='single-item__texts'>

                        <div className='single-item__2lines'>

                            <p className='single-item__title'>Matheus & Kauan</p>

                        </div>

                        <p className='single-item__type'>Artista</p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ItemList;