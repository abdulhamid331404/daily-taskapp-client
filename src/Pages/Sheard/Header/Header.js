import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navlink'>
            <Link to={'/addtask'}>Add Task</Link>
            <Link to={'/mytask'}>My Task</Link>
            <Link to={'/compleattask'}>Compleat Task</Link>
            <Link to={'/login'}>Details</Link>

        </div>
    );
};

export default Header;