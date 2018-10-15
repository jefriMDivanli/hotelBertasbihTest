import React, { Component } from 'react';
import { getAllKamar } from '../../ActionCreators/KamarAction';
import { connect } from 'react-redux';
import DataKamar from './datakamar';
import './renderkamar.css';
import { Redirect } from 'react-router-dom';

class RenderKamar extends Component {

    state = {};

    componentWillMount() {
        this.props.getAllKamar();
    }

    renderDataKamar = () => {
        return this.props.kamar.map(kamarMap =>
            <DataKamar
                key={kamarMap.id}
                kamarData={kamarMap}
            />
        );
    }

    render() {
        if (this.props.kamar.nomorkamar !== "") {
            return (
                <div className='kamar-grid' style={{ crusor: 'finger' }}>
                    <div className='kamar-text'>
                        <h1>Available kamar</h1>
                        <p>Pilihlah Kamar Yang Anda Mau</p>
                    </div>
                    <div className='render-kamar'>
                        {this.renderDataKamar()}
                    </div>
                </div>
            );
        }
        return <div>1</div>
    }
}

const mapStateToProps = (state) => {
    return { kamar: state.kamarList }; //state.kamarList dari index reducer
}

export default connect(mapStateToProps, { getAllKamar })(RenderKamar);