import React from 'react'
import './Body.css'
import SearchIcon from '@material-ui/icons/Search';

function Body() {
    return (
        <div className='body'>
            <div className='top__section'>
                <div className='w_intro'>
                    <h1>Chatur Live Free video call For Everyone</h1>
                </div>
                <div className='body__bar'>
                    <div className='body__list'>
                        <h2>FEATURED</h2>
                        <h2>WOMEN</h2>
                        <h2>MEN</h2>
                        <h2>COUPLES</h2>
                        <h2>TRANS</h2>
                        <h2>SPYSHOWS</h2>
                        <h2>FOLLOWED</h2>
                    </div>
                    <div className='body__space'>

                    </div>
                    <div className='body__option'>
                        <SearchIcon />
                        <h3>OPTIONS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
