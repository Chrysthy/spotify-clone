//import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import SingleItem from "./SingleItem.jsx";

const ItemList = ({ title, items }) => {
    return (

        <div className="main">

            {/* Artistas Populares */}
            <div className="item-list">

                <div className="item-list__header">

                    <h2>{title} Populares</h2>

                    <a className="item-list__link" href="/">Mostrar tudo</a>

                </div>

                <SingleItem/>

                <div className="item-list__container">

                    {/* 1 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <div className=".single-item__2lines">

                                <p className="single-item__title">Luan Santana</p>

                            </div>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 2 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 3 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 4 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 5 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                </div>

            </div>


            {/* Músicas Populares */}
            <div className="item-list">

                <div className="item-list__header">

                    <h2>Músicas Populares</h2>

                    <a className="item-list__link" href="/">Mostrar tudo</a>

                </div>


                <div className="item-list__container">

                    {/* 1 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <div className=".single-item__2lines">

                                <p className="single-item__title">Luan Santana</p>

                            </div>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 2 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 3 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 4 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>

                    {/* 5 */}
                    <div className="single-item" >

                        <div className="single-item__div-image-button" >

                            <div className="single-item__div-image">

                                <img className="single-item__image" src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878" alt="Imagem do Artista X" />

                            </div>

                            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                        </div>

                        <div className="single-item__texts">

                            <p className="single-item__title">Luan Santana</p>

                            <p className="single-item__type">Artista</p>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    )
}

export default ItemList