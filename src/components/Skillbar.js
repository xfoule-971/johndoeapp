const Skillbar = () =>{
    return(
      <div className="col-12 col-md-6">
            <h3 className="p-2 mb-4 border-bottom border-primary border-4 fw-semibold">Mes compétences</h3>
            <div>
                <p className="mb-0 mt-3"><strong>HTML5 90%</strong></p>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{width:'90%'}}></div>
                </div> 
            </div>

            <div>
                <p className="mb-0 mt-3"><strong>CSS3 80%</strong></p>
                <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-info" style={{width:'80%'}}></div>
                </div>
            </div>

            <div>
                <p className="mb-0 mt-3"><strong>JAVASCRIPT 70%</strong></p>
                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-warning" style={{width:'70%'}}></div>
                </div>
            </div>
            
            <div>
                <p className="mb-0 mt-3"><strong>PHP 60%</strong></p>
                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success" style={{width:'60%'}}></div>
                </div>
            </div>

            <div>
                <p classNamesName="mb-0 mt-3"><strong>REACT 50%</strong></p>
                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-primary" style={{width:'50%'}}></div>
                </div>
            </div>
        </div>
    );
}
export default Skillbar;