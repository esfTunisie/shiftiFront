import React from 'react';
import { Component } from 'react';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
      
        };
      }
    render(){
        return (
            <form onSubmit={this.props.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input className="form-control color-input" id="name" />
              </div>
              <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input className="form-control color-input" id="prenom" />
            </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control color-input"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
              <label htmlFor="password1">mot de passe</label>
              <input
                type="password"
                className="form-control color-input"
                id="password1"
                
              />
            </div>
            <div className="form-group">
            <label htmlFor="password2">confirmer mot de passe</label>
            <input
              type="password"
              className="form-control color-input"
              id="password2"
              
            />
          </div>
              <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          );
    }
  
};
export default RegisterForm;