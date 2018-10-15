import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './homepage.css';

class HomePage extends Component {
    
    render() {
        return(
            <div>
                <div className="homepage">
                    <Carousel infiniteLoop={true} showIndicators={false} id='carousel' showThumbs={false}>
                        <div className='image'>
                            <div className='image-one'>

                            <div className="deskripsi">
                                <h1>KAMAR SUPERIOR</h1>
                                <p>Kemewahan terjangkau di distrik Kucing Bertasbih</p>
                                <input className="button-homepage" type="button" value="More" />
                            </div>
                            </div> 
                        </div>

                        <div className='image'>
                            <div className='image-two'>
                                <div className="deskripsi">
                                    <h1>KAMAR DELUXE</h1>
                                    <p>Kemewahan untuk anda yang menghargai kenyamanan</p>
                                    <button className="button-homepage" type="button" value="More" />
                                </div>
                            </div>
                        </div>

                        <div className='image'>
                            <div className='image-three'>
                                <div className="deskripsi">
                                    <h1>PENTHOUSE</h1>
                                    <p>Kemewahan tertinggi di distrik Kucing Bertasbih</p>
                                    <input className="button-homepage" type="button" value="More" />
                                </div>
                            </div>
                        </div>
                    </Carousel> 
                </div>
            </div>
        );
    }
}

export default HomePage;