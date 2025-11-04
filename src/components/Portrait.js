import Johnabout from "../assets/images/john-doe-about.jpg";

const Portrait = () =>{
    return(
        <div className="col-12 col-md-6">
            <h3 className="p-2 mb-4 border-bottom border-primary border-4 fw-bold">A propos</h3>
            <img src={Johnabout} alt="portait de john" className="img-fluid"></img>
            <p className="text-fluid">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed tempus, ipsum non posuere convallis, lacus magna tempus enim, et varius ligula erat et erat. 
                Vestibulum id tristique libero. Vivamus in eleifend urna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed tempus, ipsum non posuere convallis, lacus magna tempus enim, et varius ligula erat et erat. 
                Vestibulum id tristique libero. Vivamus in eleifend urna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed tempus, ipsum non posuere convallis, lacus magna tempus enim, et varius ligula erat et erat. 
                Vestibulum id tristique libero. Vivamus in eleifend urna.
            </p>
        </div>
    );       
}

export default Portrait;