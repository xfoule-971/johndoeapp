
const Formulaire = () =>{
     return(
        <div>
            <h2>Formulaire de contact</h2>
            
            <form action="#" method="post">
                <p><input type="text" name="name" id="name" placeholder="Votre nom" required classNamesName="p-1 w-100 rounded-1 form.control"></input></p>
                <p><input type="email" name="email" id="email" placeholder="Votre adresse email" required classNamesName="p-1 w-100 rounded-1 form.control"></input></p>
                <p><input type="tel" name="tel" id="tel" placeholder="Votre numéro de téléphone" required classNamesName="p-1 w-100 rounded-1 form.control"></input></p>
                <p><input type="text" name="sujet" id="sujet" placeholder="Sujet" required classNamesName="p-1 w-100 rounded-1 form.control"></input></p>
                <p><textarea name="message" id="message" rows="13" cols="20" placeholder="Votre message" required classNamesName="p-2 w-100 rounded-1 form.control"></textarea></p>
                <p><input type="submit" value="Envoyer" classNamesName="btn btn-primary d-block mx-auto"></input></p>
            </form>
        </div>
        
    );
}
export default Formulaire; 