import { NavLink } from 'react-router-dom';

export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark nav-pills nav-fill">
            <div className="navbar-nav nav-item">
                
                <NavLink exact to="/agency" className="nav-item nav-link">Agency</NavLink>
            </div>   
        </nav>
    );
}
