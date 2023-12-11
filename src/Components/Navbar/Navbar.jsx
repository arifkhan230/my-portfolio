import { NavLink } from "react-router-dom";
import Container from "../Container/Container";


const Navbar = () => {

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-800 text-xl font-bold mr-4" : "text-black text-xl font-bold mr-4"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-800 text-xl font-bold mr-4" : "text-black text-xl font-bold mr-4"
            }
        >
            Projects
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-800 text-xl font-bold mr-4" : "text-black text-xl font-bold mr-4"
            }
        >
            About
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-800 text-xl font-bold mr-4" : "text-black text-xl font-bold mr-4"
            }
        >
            Contact
        </NavLink>
    </>

    return (
        <div className="bg-orange-50">
            <Container>
                <div className="navbar py-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">ARIF</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Resume</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;