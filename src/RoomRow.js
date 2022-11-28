import { Avatar } from '@material-ui/core'
import React from 'react'
import './RoomRow.css'
import StarIcon from '@material-ui/icons/Star';

function RoomRow({ image, name, age, description, time, viewer }) {
    return (
        <div className='roomrow'>
            <div className='videoCard__info'>
                <div className='videoCard__thumbnail'>
                    <img src={image} alt='vijay' />
                    <div className='thumbnail_label thumbnail_label_c'>
                        RECOMMENDED
                    </div>
                    <StarIcon className='videoCard__star'/>
                </div>
                <div className='videoCard__padding'>
                    <div className='videoCard__details'>
                        <h1>{name}</h1>
                        <div className='videoCard__ageImage'>
                            <h2>{age}</h2>
                            <img src='https://static-assets.highwebmedia.com/images/ico-female.png?e6e4ed66f74e' alt='vijay' />
                        </div>
                    </div>
                    <hr />
                    <div className='videoCard__descriptioon'>
                        <p>{description}</p>
                    </div>
                    <div className='videoCard__hrs'>
                        <img src='https://static-assets.highwebmedia.com/images/ico-cams.png?829027f88094'/>
                        <h3>{time} {'  '} {viewer}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomRow
