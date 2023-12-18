import './css/Navbar.css'; 
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'    
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to='/' class="navbar-brand" href="#">
                <img src={logo} alt='logo' />
                Quema María
                </Link>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                    <NavLink to={`/category/Blunts`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } class="nav-link" href="">
                        Blunts
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={`/category/Sabanas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } class="nav-link" href="">
                        Sabanas
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={`/category/Otros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } class="nav-link" href="">
                        Otros
                    </NavLink>
                    </li>

                </ul>

                <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
