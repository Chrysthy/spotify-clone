import { useState } from 'react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useRef } from 'react';

const formatTime = (timeInSeconds) => {

    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
}

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {

    const audioPlayer = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const playPause = () => {

        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

        setIsPlaying(!isPlaying);

        console.log(formatTime(audioPlayer.current.currentTime));

    }

    return (
        <div className='player'>

            <div className="player__controllers">

                <Link to={`/song/${randomIdFromArtist}`}>

                    <FontAwesomeIcon
                        className="player__icon"
                        icon={faBackwardStep}
                    />

                </Link>

                <FontAwesomeIcon
                    className="player__icon player__icon--play"
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                    onClick={() => playPause()}
                />

                <Link to={`/song/${randomId2FromArtist}`}>

                    <FontAwesomeIcon
                        className="player__icon"
                        icon={faForwardStep}
                    />

                </Link>
            </div>

            <div className="player__progress">

                <p>00:00</p>

                <div className="player__bar">

                    <div className="player__bar-progress"></div>

                </div>

                <p>{duration}</p>

            </div>

            <audio ref={audioPlayer} src={audio}></audio>

        </div>
    )
}

export default Player
