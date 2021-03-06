import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';

class SliderI extends React.Component {
    render() {


        return (
            <div className="slider" >
                <Slider hasBullets bulletStyle={{ backgroundColor: "#fff" }}>
                    <div> <img
                        src='/Screenshot from 2021-02-18 21-17-08.png'
                        className="App-logo" alt="logo"
                    />
                    </div>
                    <div>
                        <img
                            src='/Screenshot from 2021-02-18 21-45-14.png'
                            className="App-logo" alt="logo"
                        />
                    </div>
                    <div>
                        <img
                            src='/logo192.png'
                            className="App-logo" alt="logo"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
export default SliderI;
