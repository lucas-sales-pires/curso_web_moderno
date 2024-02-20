import  React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/template/Footer';
import "font-awesome/css/font-awesome.min.css";
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Routes from './Route';
import './App.css';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    
