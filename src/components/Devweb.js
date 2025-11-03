import Code from "../assets/icons/code.png"

const Devweb = () =>{
    return(
        <div className="card p-2 mx-4 align-items-center col-md-4 card-survol" style={{width: '25rem'}}>
            <img src={Code} className="card-img-top w-25 m-3" alt="icône"/>
            <div class="card-body text-center">
                <h5 className="card-title fw-bold">Développement web</h5>
                <p className="card-text text-fluid">
                    Le Développement de sites web consiste à créer des sites
                    internet en utilisant des langages de programmation
                    (HTML, CSS, Javascript, PHP, etc.) et des frameworks
                    (Bootsrap, React, Angular, etc.).
                </p>
            </div>
        </div>
    );
}
export default Devweb; 