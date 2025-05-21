import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return (
        <div className='player'>

            <div className="player__controllers">

                <FontAwesomeIcon
                    className="palyer__icon"
                    icon={faBackwardStep}
                />
                
                <FontAwesomeIcon
                    className="palyer__icon"
                    icon={faCirclePlay}
                />

                <FontAwesomeIcon
                    className="palyer__icon"
                    icon={faForwardStep}
                />

            </div>

            <div className="player__bar">


            </div>


        </div>
    )
}

export default Player
