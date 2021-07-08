import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Navabar"
// react plugin used to create charts
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";

// core components
import { apiURL } from "../../Config/config";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import ModalKit from "../../Components/uiKit/ModalKit";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      loading: false,
      registerFormData:
      {
        name: '', prenom: "", email: '', password1: '', password2: '',
        validation:
        {
          error:
            [true, true, true, true],
          errorMsg:
            ['merci de remplir votre nom',
              'merci de remplir votre prénom',
              'merci de remplir votre email',
              'merci de remplir votre mot de passe',
              'merci de confirmer votre mot de passe'

            ]
        }
      },
      registerFormError: [false, false, false, false, false],
      registerFormErrorMsg: ['', '', '', ''],
      passwordValue: "",
      /*name:"",
      prenom:"",
      email:"",
      password1:"",
      password2:"",
      username:"",*/

      entrepriseFormData:
      {
        raison_sociale: '', activite: "", produit: '', affaire: '', rne: '', siteweb: "",
        validation:
        {
          error:
            [true, false, true, true],
          errorMsg:
            ['merci de remplir votre raison sociale',
              'merci de remplir votre secteur activité',
              'merci de remplir votre catégorie du produit',
              'merci de remplir votre chiffre affaire',


            ]
        }
      },
      entrepriseFormError: [false, false, false, false],
      entrepriseFormErrorMsg: ['', '', '', ''],
      data: {},
      /*nomEntreprise:"",
      activite:"",
      produit:"",
      affaire:null,
      rne:null,
      siteweb:'',*/


    };
  }

  getTemplate = () => {

    fetch(apiURL + '/api/get_templates')
      .then(response => response.json()).then(data => this.setState({ dataTemplate: data }))
  }

  componentDidMount() {

    this.getTemplate()
  }


  onChangeEntrepriseForm = (value, key, index) => {
    let aux = { ...this.state.entrepriseFormData }
    aux[key] = value
    if (key == "raison_sociale") {

      if (value.trim() === '') {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre raison sociale'
      } else {
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''
      }
    }

    if (key == "produit") {

      if (value.trim() === '') {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre catégorie des produits'
      } else {
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''
      }
    }
    if (key == "affaire") {

      if (value.trim() === '') {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre affaire'
      } else {
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''
      }
    }




    this.setState({ entrepriseFormData: aux })

  }

  onChangeRegisterForm = (value, key, index) => {
    console.log("hello from register");
    let aux = { ...this.state.registerFormData }
    aux[key] = value
    if (key === 'name') {
      if (value.trim() === '') {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre nom'
      } else {
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''
      }
    }
    if (key === 'prenom') {
      if (value.trim() === '') {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre prenom'
      } else {
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''
      }
    }

    if (key == "email") {

      if (isEmpty(value)) {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre Email'
      } if (!isEmail(value)) {

        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre email correctement'
      }


      else {
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''
      }
    }
    if (key === 'password1') {
      if (value.trim() === '') {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de remplir votre password'
      }
      else if (value.length < 8) {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'le mot de passe doit contient 8 caractére'
      }
      else {
        this.setState({ passwordValue: value })
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''

      }
    }
    if (key == "password2") {


      if (isEmpty(value)) {

        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'merci de confirmer votre mot de passe'
      } else if (value.length < 8) {
        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'le mot de passe doit contient 8 caractére'
      } else if (value !== this.state.passwordValue) {

        aux.validation.error[index] = true
        aux.validation.errorMsg[index] = 'password not match'
      }

      else {
        aux.validation.error[index] = false
        aux.validation.errorMsg[index] = ''
      }
    }
    this.setState({ registerFormData: aux })
  }



  onSubmit = async () => {

    const action = { type: "GET_TOKEN", token: '', isLogIn: false, username: this.state.registerFormData.email, password: this.state.registerFormData.password1 }
    this.props.dispatch(action)
    const ERROR = [...this.state.registerFormData.validation.error]
    const ERROR_MSG = [...this.state.registerFormData.validation.errorMsg]
    this.setState({
      registerFormError: ERROR,
      registerFormErrorMsg: ERROR_MSG
    })
    if (!this.state.registerFormData.validation.error.includes(true)) {
      this.setState({ loading: true })
      let formdata = new FormData()
      formdata.append('first_name', this.state.registerFormData.name)
      formdata.append('last_name', this.state.registerFormData.prenom)
      formdata.append('email', this.state.registerFormData.email)
      formdata.append('password', this.state.registerFormData.password1)
      const requestOptions = {
        method: 'POST',
        // headers: myHeaders,
        body: formdata
      };

      fetch(apiURL + '/register', requestOptions)
        .then(response => {
          if (response.status == 201) {
            this.getTokenUser();

          }

        })
        .catch(error => console.log('error', error));



    }
  }
  getTokenUser = async () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "username": this.props.auth.username,
        "password": this.props.auth.password
      }),
    };

    const dataToken = await fetch(apiURL + "/api/login_check", requestOptions);
    if (dataToken.status == 200) {
      const result = await dataToken.json();
      //const result = dataTokenJson.text();
      console.log("token", JSON.stringify(result));
      const str = JSON.stringify(result).substring(10)
      const newStr = str.substring(0, str.length - 2)
      console.log("hello", newStr);
      const dataMagasin = await fetch(apiURL + "/api/getMagasinByIdToken", {
        headers: {
          'Authorization': 'Bearer ' + newStr
        }
      });
      console.log("essai3", dataMagasin);
      const dataMagasinJson = await dataMagasin.json();
      console.log("essai4", dataMagasinJson);
      const action = { type: "GET_TOKEN", token: newStr, isLogIn: true, username: this.state.username, user: dataMagasinJson }
      this.props.dispatch(action)
      this.setState({ loading: false })
      window.location = '/espace-client'

    }
    else {
      const action = { type: "GET_TOKEN", token: '', isLogIn: false }
      this.props.dispatch(action)
    }
    //  await fetch(apiURL+"/api/login_check", requestOptions)
    //     .then(response => {
    //       if(response.status == 200){
    //         response.text().then(result =>{
    //           const str = JSON.stringify(result).substring(14)
    //           const newStr = str.substring(0, str.length - 4) 

    //           fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
    //             'Authorization': 'Bearer '+newStr}})
    //            .then(response => response.json()).then(data => {
    //              console.log('data',data);
    //               const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:this.state.username, user:data}
    //               this.props.dispatch(action)
    //           window.location='/espace-client'
    //         })
    //       })
    //       }
    //       else{
    //         const action = {type:"GET_TOKEN", token:'', isLogIn:false }
    //           this.props.dispatch(action)
    //       }
    //     })
    //     .catch(error => console.log('error', error));

  }

  handleOk = () => {
    this.setState({ isModalVisible: false })
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false })
  };


  onSubmitEntreprise = async () => {
    console.log("im here");
    const ERROR = [...this.state.entrepriseFormData.validation.error]
    const ERROR_MSG = [...this.state.entrepriseFormData.validation.errorMsg]
    this.setState({
      entrepriseFormError: ERROR,
      entrepriseFormErrorMsg: ERROR_MSG
    })
    if (!this.state.entrepriseFormData.validation.error.includes(true)) {
      let formdata = new FormData()
      formdata.append("raison_sociale", this.state.entrepriseFormData.raison_sociale)
      formdata.append("cat_produits", this.state.entrepriseFormData.produit)
      formdata.append("rne", this.state.entrepriseFormData.rne)
      formdata.append("site_web", this.state.entrepriseFormData.siteweb)
      formdata.append("chiffre_affaire", this.state.entrepriseFormData.affaire)
      formdata.append("secteur_activite", this.state.entrepriseFormData.activite)

      await fetch(apiURL + '/api/Add_magasin_front', {
        headers: {
          'Authorization': "Bearer " + this.props.auth.token
        },
        method: 'POST',
        body: formdata
      }).then(response =>
        response.json()).then(data => console.log("data", data))
      // if(response.status == 201){
      //    fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
      //     'Authorization': 'Bearer '+this.props.auth.token}})
      //    .then(response => response.json()).then(data => {
      //     const action = {type:"GET_TOKEN",token:this.props.auth.token, client:data}
      //     this.props.dispatch(action)
      //     this.props.history.goBack()  
      //     })
      // }

    }
  }

  showModal = (template) => {

    this.setState({ isModalVisible: true })
    const action = { type: "TEMPLATE_DONE", templateDone: template }
    this.props.dispatch(action)
  }


  render() {

    return (
      <>
        <div>
          <Navbar />
          <section className="section section-lg section-coins">
            {/* <img
            alt="..."
            className="path"
            src={require("../../assets/img/path3.png")}
          /> */}
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose Your Shop{" "}
                    <span className="text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                {this.state.dataTemplate && this.state.dataTemplate.map((template) => (
                  <Col md="4">

                    <Card className="card-coin card-plain">
                      <CardHeader>
                        <img
                          alt=""
                          className="img-center img-fluid"
                          src={template.templateImage}
                        />
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col className="text-center" md="12">
                            <h4 className="text-uppercase">{template.name}</h4>

                            <hr className="line-primary" />
                          </Col>
                        </Row>
                        <Row>
                          <span>Plan {template.description}	</span>
                        </Row>
                      </CardBody>
                      <CardFooter className="text-center">
                        <a className="btn-simple" href={template.url} target="_blank" color="primary">
                          Live Preview
                        </a>
                        <Button className="btn-simple" onClick={() => this.showModal(template)} color="primary">
                          Choose Market
                        </Button>
                      </CardFooter>
                    </Card>

                  </Col>
                ))}
              </Row>
              {this.props.auth.token == null ? (
                <ModalKit
                  isModalVisible={this.state.isModalVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  register={"register"}
                  labelname={"Nom"}
                  labelprenom={"Prénom"}
                  email={"Adresse Email"}
                  password={"Mot de passe"}
                  confirmpassword={"Confirmer mot de passe"}
                  onChangeRegisterForm={this.onChangeRegisterForm}
                  registerFormError={this.state.registerFormError}
                  registerFormErrorMsg={this.state.registerFormErrorMsg}
                  registerFormData={this.state.registerFormData}
                  onSubmit={this.onSubmit}
                />
              ) :
                (
                  <ModalKit
                    entreprise={"entreprise"}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    isModalVisible={this.state.isModalVisible}
                    onChangeEntrepriseForm={this.onChangeEntrepriseForm}
                    entrepriseFormError={this.state.entrepriseFormError}
                    entrepriseFormErrorMsg={this.state.entrepriseFormErrorMsg}
                    entrepriseFormData={this.state.entrepriseFormData}
                    nomEntreprise={"Nom de l'entreprise :"}
                    activite={"Secteur d'activité :"}
                    affaire={"Chiffre d'affaire annuel :"}
                    rne={"Rne"}
                    siteweb={"site web"}
                    produit={"produits"}
                    onSubmit={this.onSubmitEntreprise}
                  />
                )
              }
            </Container>
          </section>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Template)