

const Formulaire = () =>{

     return(
        <div className="col-md-6 mb-4">
            <h2 className="border-bottom border-primary border-4 fw-bold mb-4 p-2">Formulaire de contact</h2>
            
            <form name="contact" method="post">
                <p>
                    <input type="text" name="username" id="username" placeholder="Votre nom" required className="p-1 w-100 rounded-1 form.control"
                    ></input>
                </p>
                <p>
                    <input type="email" name="email" id="email" placeholder="Votre adresse email" required className="p-1 w-100 rounded-1 form.control"
                    ></input>
                </p>
                <p>
                    <input type="tel" name="phone" id="phone" placeholder="Votre numéro de téléphone" required className="p-1 w-100 rounded-1 form.control"
                    ></input>
                </p>
                <p>
                    <input type="text" name="subject" id="subject" placeholder="Sujet" required className="p-1 w-100 rounded-1 form.control"
                    ></input>
                </p>
                <p>
                    <textarea name="message" id="message" rows="13" cols="20" placeholder="Votre message" required className="p-2 w-100 rounded-1 form.control"
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="Envoyer" className="btn btn-primary d-block mx-auto"
                    ></input>
                </p>
            </form>
        </div>
        
    );
}
export default Formulaire; 