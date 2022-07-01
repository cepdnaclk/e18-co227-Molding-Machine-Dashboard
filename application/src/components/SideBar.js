<<<<<<< HEAD
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import { AiFillDatabase } from "react-icons/ai";
import { SiReactos } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";

function SideBar () {
    return (
        <div className='sidebar'>
            <header><SiReactos /> Company Name</header>
            <ul>
                <ActivePageLink to= "/"><MdSpaceDashboard /> Dashboard</ActivePageLink>
                <ActivePageLink to= "/Molds"><AiFillDatabase /> Production Data</ActivePageLink>
            </ul>
        </div>
    );
}

function ActivePageLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

=======
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import { AiFillDatabase } from "react-icons/ai";
import { SiReactos } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";

function SideBar () {
    return (
        <div className='sidebar'>
            <header><SiReactos /> Company Name</header>
            <ul>
                <ActivePageLink to= "/"><MdSpaceDashboard /> Dashboard</ActivePageLink>
                <ActivePageLink to= "/Molds"><AiFillDatabase /> Production Data</ActivePageLink>
            </ul>
        </div>
    );
}

function ActivePageLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

>>>>>>> 570d4cd678f228c189283ecac4f8e36a00f1a908
export default SideBar;