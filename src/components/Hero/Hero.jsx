import "./Hero.css"
import Data from "../../assets/img/client-databiz.svg"
import Audio from "../../assets/img/client-audiophile.svg"
import Meet from "../../assets/img/client-meet.svg"
import Maker from "../../assets/img/client-maker.svg"
import Image from "../../assets/img/hero-img.png"
import HeroImage from "../../assets/img/heroR.png"

const Hero = () =>{
    return(
        <>
        <div className="heroContainer">
            <div className="heroText">
                <h1><span>Make</span> remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and   watch productivity soar.</p>
                
                <button>Learn more</button>
                <div className="heroLogo">
        <img src={Data} alt="" />
        <img src={Audio} alt="" />
        <img src={Meet} alt="" />
        <img src={Maker} alt="" />
                </div>
            </div>
            <div className="heroImage">
                <img src={Image} alt="" />
            </div>
            <div className="heroImage2">
                <img src={HeroImage} alt="" />
            </div>
        </div>
        </>
    )
}
export default Hero