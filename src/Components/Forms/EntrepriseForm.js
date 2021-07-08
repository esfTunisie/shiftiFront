import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { apiURL } from '../../Config/config';


class EntrepriseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name:"",
          activite:"",
          produit:"",
          affaire:"",
          rne:"",
          siteweb:''
        };
      }
      handleChangeName = (event)=>{
          this.setState({
            name:event.target.value,

          })
      }
      handleChangeActivitie = (event)=>{
        this.setState({
          activite:event.target.value,

        })
    }
    handleChangeProduit = (event)=>{
        this.setState({
          produit:event.target.value,

        })
    }
    handleChangeAffaire = (event)=>{
        this.setState({
          affaire:event.target.value,

        })
    }
    handleChangeRne = (event)=>{
        this.setState({
          rne:event.target.value,

        })
    }

    handleChangeSiteweb = (event)=>{
        this.setState({
          siteweb:event.target.value,

        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom de l'entreprise</label>
                <input className="form-control" id="name" onChange={this.handleChangeName.bind(this)} />
              </div>
              <div className="form-group">
              <label htmlFor="activite">Secteur d'activité</label>
              <select  className="form-control color-input" id="activite" onChange={this.handleChangeActivitie.bind(this)}  >
                <option>Industrielle</option>
                <option>Distribution</option>
                <option>Services</option>
              </select>
            </div>
            <div className="form-group">
                <label htmlFor="produit">Produits</label>
                <input
                  className="form-control color-input"
                  id="produit" 
                  onChange={this.handleChangeProduit.bind(this)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="affaire">Votre chiffre d’affaires annuel</label>
                <input
                  className="form-control color-input"
                  id="affaire" 
                  onChange={this.handleChangeAffaire.bind(this)} 
                />
              </div>
              <div className="form-group">
              <label htmlFor="rne">RNE</label>
              <input
                className="form-control color-input"
                id="rne"
                onChange={this.handleChangeRne.bind(this)} 
              />
            </div>
            <div className="form-group">
            <label htmlFor="siteweb">Site web</label>
            <input
            onChange={this.handleChangeSiteweb.bind(this)} 
              className="form-control color-input"
              id="siteweb"
            />
          </div>
              <div className="form-group">
                <button className="form-control btn btn-primary" type="submit" >
                  Submit
                </button>
              </div>
            </form>
          );

    }
  
};
const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => {
        dispatch(action);
      },
    };
  };
  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EntrepriseForm);