import { NavLink } from 'react-router-dom';

export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark nav-pills nav-fill">
            <div className="navbar-nav nav-item">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink exact to="/packages" className="nav-item nav-link">Packages</NavLink>
                <NavLink exact to="/hajj_n_umrah_guide" className="nav-item nav-link">Hajj & Umrah Guide</NavLink>
                <NavLink exact to="/virtual_tour" className="nav-item nav-link">Virtual Tour</NavLink>
                <NavLink exact to="/notices" className="nav-item nav-link">Notices</NavLink>
                <NavLink exact to="/support" className="nav-item nav-link">Support</NavLink>
            </div>
        </nav>
    );
}
