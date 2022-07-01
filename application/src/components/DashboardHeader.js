<<<<<<< HEAD
import React from 'react';
import { useLocation } from 'react-router-dom';

function DashboardHeader() {
    return (
        <nav  className="header">
            <div>
                <ChangePageName />
            </div>

        </nav>

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
    else if(currentPath === "/machines") {
        pageText = "Machine No"
    }
    else {
        pageText = "Machine"
    }

    return(
        <div>{pageText}</div>
    );
}

=======
import React from 'react';
import { useLocation } from 'react-router-dom';

function DashboardHeader() {
    return (
        <nav  className="header">
            <div>
                <ChangePageName />
            </div>

        </nav>

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
    else if(currentPath === "/machines") {
        pageText = "Machine No"
    }
    else {
        pageText = "Machine"
    }

    return(
        <div>{pageText}</div>
    );
}

>>>>>>> 570d4cd678f228c189283ecac4f8e36a00f1a908
export default DashboardHeader;