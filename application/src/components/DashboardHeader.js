import React from 'react';
import logo from '../logo.svg';
import { useLocation } from 'react-router-dom';

function DashboardHeader() {
    return (
        <header className='page-header'>
            <div className='header-logo'>
                <img src= {logo} className='logo' alt='Company logo'></img>
                <p>Company Name</p>
            </div>

            <div className='header-items'>
                <ChangePageName />
            </div>

        </header>
    );
}

function ChangePageName() {
    const currentPath = useLocation().pathname
    console.log(currentPath)
    let pageText

    if (currentPath === "/") {
        pageText = "Machines Overview"
    }
    else if(currentPath === "/Molds") {
        pageText = "Molds Overview"
    }
    else {
        pageText = "Machine"
    }

    return(
        <div>{pageText}</div>
    );
}

export default DashboardHeader;