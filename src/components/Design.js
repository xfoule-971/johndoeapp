import Burste from "../assets/icons/burste.png";

const Design = () =>{
    return(
        <div class="card" style={{width: '18rem'}}>
            <img src={Burste} class="card-img-top" alt="icône"/>
            <div class="card-body">
                <h5 class="card-title">L'UX Design</h5>
                <p class="card-text">
                    L'UX design est une discipline qui consiste à concevoir des produits 
                    (sites web, applications mobiles, logiciels, objects connectés, etc.)
                    en plaçant l'utilisateur au centre des préoccupations. L'objectif est 
                    de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </p>
            </div>
        </div>
    )
}
export default Design; 