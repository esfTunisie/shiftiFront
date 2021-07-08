import React, { Component } from 'react'
import { Modal, Button, Input, Select } from 'antd';
import 'antd/dist/antd.css'; 

class ModalKit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    

    };
  }

  




    render() {
      console.log(this.props);
        return (
        <div>
          <Modal
          title={this.props.title}
          visible={this.props.isModalVisible}
          closable={false}
          footer={null}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
              >
         {this.props.register === "register" ? (

          <div>
            <span >{this.props.labelname}</span>
            <Input  id="name"  onChange={(e)=>this.props.onChangeRegisterForm(e.target.value,"name",0)} value={this.props.registerFormData.name} />
            {this.props.registerFormError[0]&&<div style={{color:'red'}}>{this.props.registerFormErrorMsg[0]}</div>}
          </div>
          ):null
        
        }
          { this.props.register === "register" ?
          (
            <div >
            <span >{this.props.labelprenom}</span>
            <Input  id="prenom"  onChange={(e)=>this.props.onChangeRegisterForm(e.target.value,"prenom",1)} value={this.props.registerFormData.prenom}/>
            {this.props.registerFormError[1]&&<div style={{color:'red'}}>{this.props.registerFormErrorMsg[1]}</div>}
          </div>
          ):null
          }
          {this.props.register === "register" ? (
            <div >
            <span>{this.props.email}</span>
            <Input
              type="email"
              className="form-control color-input"
              id="email"
              placeholder="name@example.com"
              value={this.props.registerFormData.email}
              onChange={(e)=>this.props.onChangeRegisterForm(e.target.value,"email",2)}
              
            />
            {this.props.registerFormError[2]&&<div style={{color:'red'}}>{this.props.registerFormErrorMsg[2]}</div>}
          </div>
          ):null

          }
          
          {this.props.register === "register" ? (
            <div >
            <span>{this.props.password}</span>
            <Input
              type="password"
              className="form-control color-input"
              value={this.props.registerFormData.password1}
              onChange={(e)=>this.props.onChangeRegisterForm(e.target.value,'password1',3)}
  
            />
            {this.props.registerFormError[3]&&<span style={{color:'red'}}>{this.props.registerFormErrorMsg[3]}</span>}
          </div>
          ):null

          }

          {this.props.register === "register" ? (
            <div >
            <span>{this.props.confirmpassword}</span>
            <Input
              type="password"
              className="form-control color-input"
              id="password2"
              value={this.props.registerFormData.password2}
              onChange={(e)=>this.props.onChangeRegisterForm(e.target.value,'password2',4)}
            />
            {this.props.registerFormError[4]&&<span style={{color:'red'}}>{this.props.registerFormErrorMsg[4]}</span>}
            </div>
            
            
           
            
          ):null

          }


     

          {this.props.entreprise === "entreprise" ? (
            <div>
          <span >{this.props.nomEntreprise}</span>
          <Input 
           id="nomEntreprise"
           value={this.props.entrepriseFormData.raison_sociale}
          onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'raison_sociale',0)} />
          {this.props.entrepriseFormError[0]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[0]}</span>}
        </div>
          ):null

          }

          {this.props.entreprise === "entreprise" ? (
            <div >
        <span>{this.props.activite}</span>
        <select  className="form-control color-input" id="activite" value={this.props.entrepriseFormData.activite}
        onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'activite',1)}  >
          <option>Industrielle</option>
          <option>Distribution</option>
          <option>Services</option>
        </select>
      </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
            <span>{this.props.produit}</span>
            <input
              className="form-control color-input"
              id="produit" 
              value={this.props.entrepriseFormData.produit}
             onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'produit',2)} 
             
            />
            {this.props.entrepriseFormError[2]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[2]}</span>}
          </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
            <span>{this.props.affaire}</span>
            <input
              className="form-control color-input"
              id="affaire" 
              value={this.props.entrepriseFormData.affaire}
              onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'affaire',3)} 
            />
            {this.props.entrepriseFormError[3]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[3]}</span>}
          </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
        <span>{this.props.rne}</span>
        <input
          className="form-control color-input"
          id="rne"
          value={this.props.entrepriseFormData.rne}
              onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'rne',4)} 
        />
        {this.props.entrepriseFormError[4]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[4]}</span>}
      </div>
          ):null

          }
        
          {this.props.entreprise === "entreprise" ? (
            <div >
      <span>{this.props.siteweb}</span>
      <input
      
        className="form-control color-input"
        id="siteweb"
        value={this.props.entrepriseFormData.siteweb}
        onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'siteweb',5)} 
      />
      {this.props.entrepriseFormError[5]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[5]}</span>}
       </div>
          ):null

          }
      

        
        <div >
          <button className="form-control btn btn-primary" type="submit" onClick={this.props.onSubmit} >
            Submit
          </button>
        </div>
      
          </Modal>
            </div>
        )
    }
}

export default ModalKit