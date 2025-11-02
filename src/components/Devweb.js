import Code from "../assets/icons/code.png"

const Devweb = () =>{
    return(
        <div class="card" style={{width: '18rem'}}>
            <img src={Code} class="card-img-top" alt="icône"/>
            <div class="card-body">
                <h5 class="card-title">Développement web</h5>
                <p class="card-text">
                    Le Développement de sites web consiste à créer des sites
                    internet en utilisant des langages de programmation
                    (HTML, CSS, Javascript, PHP, etc.) et des frameworks
                    (Bootsrap, React, Angular, etc.).
                </p>
            </div>
        </div>
    )
}
export default Devweb; 