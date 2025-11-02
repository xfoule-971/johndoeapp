import Github from "../assets/icons/github-grey.png";
import Twitter from "../assets/icons/twitter-grey.png";
import Linkedin from "../assets/icons/linkedin-grey.png";

const Footer = () =>{
    return(
        <div>
         <div>
            <h4>John Doe</h4>
            <p>rue Laure Diebold</p>
            <p>69009 Lon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            <img src={Github} alt="icône github"></img>
            <img src={Twitter} alt="icône twitter"></img>
            <img src={Linkedin} alt="icône linkedin"></img>
         </div>
        </div>
    )
        
}

export default Footer;