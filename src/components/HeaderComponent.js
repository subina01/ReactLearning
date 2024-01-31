import React, {Component} from "react";
import { Navbar, NavbarBrand} from 'reactstrap';
import { Jumbotron } from 'reactstrap';



class Header extends Component
{
    render()
    {
        return(
           <React.Fragment>
           <Navbar dark>
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <div className="jumbotron">
        <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Rostorante Con Fusion</h1>
                    <p>We take inspiraton from the World's best Cusines, and create a unique fusion experience, our lipsmacking creation will tickle your culinary senses!</p>
                </div>
            </div>
        </div>
        </div>
           </React.Fragment>
        );
    }
}
export default Header;