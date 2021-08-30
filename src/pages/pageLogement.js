import React from 'react';
import Header from './Header/Header';
import Footer from '../components/Footer'
import Carousel from '../components/Carousel';

class fichePage extends React.Component{
    render(){
        return <React.Fragment>
        <Header/>
        <Carousel/>
        <Footer></Footer>
        </React.Fragment>
    }
}

export default fichePage