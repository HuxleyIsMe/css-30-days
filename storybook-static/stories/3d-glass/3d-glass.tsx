import React from 'react'
import './3d-glass.css'

export const Glass = () => (
    <div className='wrapper'>


        <div className='phone-container'>
            <div className="phone screen"></div>

            <div className="oled screen"></div>

            <div className='touch-panel screen'></div>

            <div className='polarizer screen'></div>

            <div className='glass screen'></div>

        </div>
        <div className='tags'>
            <div className='pointers'>

                <div></div>

                <div></div>

                <div></div>

                <div></div>
            </div>
            <div className='labels'>
                <p>glass</p>

                <p>polarizer</p>

                <p>touch panel</p>

                <p>OLED display</p>

            </div>





        </div>

    </div>

)