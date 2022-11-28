import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';

function Toggle() {
    const [isToggle, setToggle] = useState(false);
    const fade = useSpring({
        opacity: isToggle ? 1 : 0
    });
    return (
        <div>
            <h4 onClick={() => setToggle(!isToggle)}>Click</h4>
            <animated.div style={fade}>
                <div className='user__details'>
                    <div className='user__firstRow'>
                        <h4>Status:</h4>
                        <h4>Basic Member</h4>
                        <h5>(Upgrade)</h5>
                    </div>
                    <div className='user__secondRow'>
                        <h4>You have: </h4>
                        <h4>0 Tokens</h4>
                        <h5>(Get More)</h5>
                        <h4>0 Tokens</h4>
                        <h5>(Get More)</h5>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default Toggle
