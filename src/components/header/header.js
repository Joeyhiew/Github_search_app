import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css'

const Header = (props={}) => {
    return (
        <div className='header_container'>
            <div className='iconDiv'>
                <FontAwesomeIcon icon={faGithub}/>
            </div>
            <h1>Github Search</h1>
        </div>
    )
}
export default Header;