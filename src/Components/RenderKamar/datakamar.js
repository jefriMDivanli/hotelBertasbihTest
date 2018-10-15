import React, { Component } from 'react';
import './renderkamar.css';
import image1 from '../HomePage/images/superior.jpeg';
import image2 from '../HomePage/images/delux.jpeg';
import image3 from '../HomePage/images/penthouse.jpeg';

class DataKamar extends Component {
    
    render() {
        const { nomorkamar, categoryid, harga, image } = this.props.doctorData;
        return (
            <div className='data-card col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='data-img' style={{ 'background-image': `url(${image + categoryid})` }}></div>
                <h4 className='data-name'>Nomor Kamar: {nomorkamar}</h4>
                <h5 className='data-harga'>{harga}</h5>
            </div>
        );
    }
}

export default DataKamar;