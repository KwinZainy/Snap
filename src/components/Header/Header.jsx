import "./Header.css"
import Logo from "../../assets/img/logo.svg"
import Menu from "../../assets/img/menu-removebg-preview.png"

const Header = () =>{
    return (
        <>
        <div className="headerContainer">
        <div className="headerLogo">
            <div className="headerImg">
                <img src={Logo} alt="" />
            </div>
            <div className="hLinks">
                <a href="##">Features</a>
                <a href="##">Company</a>
                <a href="##">Career</a>
                <a href="##">About</a>
            </div>
            
        </div>
        <div className="headerLink">
            <a href="##">Login</a>
            <button>Register</button>
        </div>
        <div className="menu">
            <img src={Menu} alt="" />
        </div>
        </div>
        </>
    )
}

export default Header