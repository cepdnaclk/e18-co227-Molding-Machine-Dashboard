import {Link, useMatch, useResolvedPath} from 'react-router-dom';

function SideBar () {
    return (
        <nav className='side-bar'>
            <ul>
                <ActivePageLink to= "/">Dashboard</ActivePageLink>
                <ActivePageLink to= "/Molds">Production Data</ActivePageLink>
            </ul>
        </nav>
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

export default SideBar;