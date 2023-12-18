import './css/Navbar.css'; 
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={logo} alt='logo' />
                Quema María
                </a>
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
                    <a class="nav-link" href="">
                        Blunts
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="">
                        Sabanas
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="">
                        Accesorios
                    </a>
                    </li>
                </ul>

                <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
