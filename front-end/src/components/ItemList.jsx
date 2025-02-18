//import React from 'react'
import SingleItem from "./SingleItem.jsx";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

    return (

        <div className="item-list">

            <div className="item-list__header">

                <h2>{title} Populares</h2>

                <a href={path} className="item-list__link" >Mostrar tudo</a>

            </div>



            <div className="item-list__container">

                {itemsArray
                    .filter((currentValue, index) => index < items)
                    .map((currObj, index) => (

                        < SingleItem
                            idPath={idPath}
                            {...currObj}
                            key={`${title}-$index}`} />

                    ))
                }

            </div>

        </div>

    )
}

export default ItemList