import Compte from "../assets/icons/compte.png";
import Geo from "../assets/icons/geo-light.png";
import Book from "../assets/icons/textformat.png";
import Box from "../assets/icons/box-light.png";
import Followers from "../assets/icons/followers.png";
import Following from "../assets/icons/following.png";

const Johnmodal =() =>{
    {/*blocage du lien localisation*/}
    const handleClick = (e) =>{
        e.preventDefault();
    }
   
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-dark border-secondary">
                <div className="modal-header border-secondary">
                    <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Mon profil GitHub</h1>
                    <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img src="https://avatars.githubusercontent.com/u/19842736?v=4" alt="avatar"></img>
                    <div>
                        <p>
                            <img src={Compte} alt="icône"></img>
                            <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" className="mx-3">John Doe</a>
                        </p>
                        <hr></hr>
                        <p>
                            <a href="https://maps.app.goo.gl/FLxFkM4aetUdpMDz9"
                            onClick={handleClick}
                            target="_blank" rel="noopener noreferrer"><img src={Geo} alt="icône"></img></a>
                        </p>
                        <hr></hr>
                
                        <img src={Book} alt="icône"></img>
                        <span className="text-light mx-3">
                            As we all know, John Doe's identity is unknow. I just wanted to contribute
                            without being known.
                        </span>
                        <hr></hr>

                        <img src={Box} alt="icône"></img>
                        <span className="text-light mx-3">
                            Repositories : 1
                        </span>
                        <hr></hr>
                
                        <img src={Followers} alt="icône"></img>
                        <span className="text-light mx-3">
                            Followers : 19
                        </span>
                        <hr></hr>
                
                        <img src={Following} alt="icône"></img>
                        <span className="text-light mx-3">
                            Following : 0
                        </span>
                    </div>
                </div>
                <div className="modal-footer border-secondary">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Johnmodal;