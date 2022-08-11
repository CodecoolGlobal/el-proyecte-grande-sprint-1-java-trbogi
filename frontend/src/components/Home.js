import React from 'react';
import background from '../images/homebg.jpg'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-content">
                <div className="top">
                    <div className="popout">
                        <span>B</span>
                        <span>E</span>
                        <span>C</span>
                        <span>O</span>
                        <span>M</span>
                        <span>E</span><br/>
                        <span>O</span>
                        <span>U</span>
                        <span>R</span><br/>
                        <span>M</span>
                        <span>E</span>
                        <span>M</span>
                        <span>B</span>
                        <span>E</span>
                        <span>R</span>
                        <span>!</span>
                    </div>
                </div>
                <div className="bottom">
                    <p>
                        Our sport club has 4 professional beach volleyball courts right next to Lake Balaton.
                        Play volleyball with your friends.
                        Book your court now!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home