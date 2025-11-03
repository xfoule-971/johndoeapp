import Plan from "../assets/icons/plan-dark.png";
import Geo from "../assets/icons/geoloc-dark.png";
import Phone from "../assets/icons/iphone.png";
import Fenetre from "../assets/icons/adresse-dark.png";

const Scrolling = () =>{
    return(
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h3>John Doe</h3>
                        <p className="mb-0">
                            <img src={Plan} alt="icône"></img>
                            <span className="mx-2">40 rue Laure Diebold</span>
                        </p>
                        <p className="mb-0">
                            <img src={Geo} alt="icône"></img>
                            <span className="mx-2">69009 Lyon, France</span>
                        </p>
                        <p className="mb-0">
                            <img src={Phone} alt="icône"></img>
                            <span className="mx-2">10 20 30 40 50</span>
                        </p>
                        <p>
                            <img src={Fenetre} alt="icône"></img>
                            <span className="mx-2">john.doe@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong>
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Scrolling;