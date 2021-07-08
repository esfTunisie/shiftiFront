import React from "react";
import classnames from "classnames";
import Navbar from "./../../Components/Navbar/Navabar";
import "../../assets/css/nucleo-icons.css";


// reactstrap components
import {
 
  CardHeader,
  CardBody,
  Container,
  Col,
  Row,
  NavItem,
  NavLink,
  Nav,
  Label,
  FormGroup,
  Form,
  FormText,
  Input,
  TabContent,
  TabPane,
  Card,
   Button, 
   CardTitle, 
   CardText 
} from "reactstrap";
import EntrepriseModal from "../../Components/Modal/EntrepriseModal";
import { connect } from "react-redux";
import ModalKit from "../../Components/uiKit/ModalKit";
import { apiURL } from "../../Config/config";



class EspaceClient extends React.Component {
    state = {
        // loading: true,
        user: null,
      };

      constructor(props) {
        super(props);
        this.state = {
            id:props.id,
            password:"",
            password2:"",
            old_password:"",
            withIcons: 1,
            isModalVisible:true,
            first_name:"",
            last_name:"",
            entrepriseFormData:
            {raison_sociale:'',activite:"",produit:'',affaire:'',rne:'',siteweb:"",
            validation:
            {
              error:
              [true,false,true,true],
              errorMsg:
              ['merci de remplir votre raison sociale',
              'merci de remplir votre secteur activité',
              'merci de remplir votre catégorie du produit',
              'merci de remplir votre chiffre affaire',

      
            ]}},
            entrepriseFormError:[false,false,false,false],
            entrepriseFormErrorMsg:['','','',''],
            /*nomEntreprise:"",
            activite:"",
            produit:"",
            affaire:null,
            rne:null,
            siteweb:'',*/
        };
      }


      onChangeEntrepriseForm=(value,key,index)=>{
        let aux ={...this.state.entrepriseFormData}
        aux[key]=value
        if(key=="raison_sociale"){
          
          if(value.trim()===''){
            aux.validation.error[index]=true
            aux.validation.errorMsg[index]='merci de remplir votre raison sociale'
          }else{
            aux.validation.error[index]=false
            aux.validation.errorMsg[index]=''
          }
        }
        
        if(key=="produit"){
          
          if(value.trim()===''){
            aux.validation.error[index]=true
            aux.validation.errorMsg[index]='merci de remplir votre catégorie des produits'
          }else{
            aux.validation.error[index]=false
            aux.validation.errorMsg[index]=''
          }
        }
        if(key=="affaire"){
          
          if(value.trim()===''){
            aux.validation.error[index]=true
            aux.validation.errorMsg[index]='merci de remplir votre affaire'
          }else{
            aux.validation.error[index]=false
            aux.validation.errorMsg[index]=''
          }
        }
        
        

      
        this.setState({entrepriseFormData:aux})
        
      }

      handleOk = () => {
        this.setState({isModalVisible:false})
       };
     
        handleCancel = () => {
         this.setState({isModalVisible:false})
       };

      async componentDidMount() {

        this.handleProps()
      }
      updatePassword(event) {
        this.setState({
          password: event.target.value 
        });
      }
 
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  //onclick function 
  updateNewPassword() {
    var context = this;

  }
  SaveChanges=()=>{
    let formdata = new FormData()
    console.log("first",this.state.first_name);
    formdata.append("first_name",this.state.first_name)
    formdata.append("last_name",this.state.last_name)
    
   

    fetch(apiURL+'/api/user_update_profile',{headers:{
      'Authorization': "Bearer "+this.props.auth.token
    },
    method:'POST',
    body: formdata
  }) .then(response => {
    if (response.status==201){

      fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
        'Authorization': 'Bearer '+this.props.auth.token}})
       .then(response => response.json()).then(data => {
         console.log('user data',data.user);
         const action = {type:"GET_TOKEN",token:this.props.auth.token, client:data}
        this.props.dispatch(action)
         this.props.history.goBack()
       })
    }

  })
  }
  onSubmit = async ()=>{
    console.log("im here");
    const ERROR = [...this.state.entrepriseFormData.validation.error]
    const ERROR_MSG=[...this.state.entrepriseFormData.validation.errorMsg]
    this.setState({
      entrepriseFormError:ERROR,
      entrepriseFormErrorMsg:ERROR_MSG
    })
    if(!this.state.entrepriseFormData.validation.error.includes(true)){
    let formdata = new FormData()
    formdata.append("raison_sociale",this.state.entrepriseFormData.raison_sociale)
    formdata.append("cat_produits",this.state.entrepriseFormData.produit)
    formdata.append("rne",this.state.entrepriseFormData.rne)
    formdata.append("site_web",this.state.entrepriseFormData.siteweb)
    formdata.append("chiffre_affaire",this.state.entrepriseFormData.affaire)
    formdata.append("secteur_activite",this.state.entrepriseFormData.activite)
  
   await fetch(apiURL+'/api/Add_magasin_front',{headers:{
        'Authorization': "Bearer "+this.props.auth.token
      },
      method:'POST',
      body: formdata
    }).then(response => {
      if(response.status == 201){
         fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
          'Authorization': 'Bearer '+this.props.auth.token}})
         .then(response => response.json()).then(data => {
          
          const action = {type:"GET_TOKEN",token:this.props.auth.token, client:data}
          this.props.dispatch(action)
          this.props.history.goBack()  
          })
         
      }
    })   
    }       
}



handleProps=()=>{
  if(this.props.auth.user){
    this.setState({first_name:this.props.auth.user.firstName})
    this.setState({last_name:this.props.auth.user.lastName})
  }else if(this.props.auth.client.user){
    this.setState({first_name:this.props.auth.client.user.firstName})
    this.setState({last_name:this.props.auth.client.user.lastName})
  }else if (this.props.auth.client !== null){
    this.setState({first_name:this.props.auth.client.firstName})
    this.setState({last_name:this.props.auth.client.lastName})
  }
  }

  // componentDidMount(){
  //   this.getMagasinByIdToken()
    
  // }


  handleSubmit=async()=>{

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "username": this.props.auth.username,
        "password": this.state.old_password
      }),
    };
    
    await fetch(apiURL+"/api/login_check", requestOptions)
      .then(response => {
        if(response.status == 200){
          if(this.state.password2 === this.state.password)
          {

            let formdata = new FormData()
            formdata.append("password",this.state.password)
            fetch(apiURL+'/api/update_password',{headers:{
              'Authorization': "Bearer "+this.props.auth.token
            },
            method:'POST',
            body: formdata
          }).then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          }
            
          }
       
        
        

      })
   
  }


  render() {
    console.log();
    // if (this.state.loading) {
    //     return <div>loading...</div>;
    //   }
  
    //   if (!this.state.user) {
    //     return <div>didn't get a user</div>;
    //   }
    console.log("old",this.state.old_password);
    return (
      <>
      <Navbar />
        <Container className="align-items-center">

        <Row className="top-marg">
        <Col className="ml-auto mr-auto" lg="10" md="6">
            <Card className="card-coin card-plain">
                        <CardHeader>
                            {/* <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={this.state.user.picture.large}
                            /> */}
                            {this.props.auth.user && this.props.auth.user  ?(
                              <h4 className="title left-marg" >{this.props.auth.user.firstName} {this.props.auth.user.lastName}</h4>
                            
                           
                           ):null                 
                          }
                           
                        </CardHeader>
                        <CardBody>
        <Nav
          className="nav-pills-primary nav-pills-icons"
          pills
          role="tablist"
        >
          {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 1
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 1)}
              href="#pablo"
            >
              <i className="tim-icons icon-laptop" />
              User Informations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 2
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 2)}
              href="#pablo"
            >
              <i className="tim-icons icon-settings-gear-63" />
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 3
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 3)}
              href="#pablo"
            >
              <i className="tim-icons icon-calendar-60" />
              Magasin
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tab-space" activeTab={"withIcons" + this.state.withIcons}>
          <TabPane tabId="withIcons1">
          <Form>
                                <Row>
                                    <Col >
                                        <FormGroup>
                                            <Label >First name</Label>
                                            
                                              <Input type="text" placeholder="First name" value={this.state.first_name} onChange={(e)=>this.setState({first_name:e.target.value})} />
                                           
                                              
                                           
                                        </FormGroup>
                                    </Col>
                                    <Col >
                                        <FormGroup>
                                            <Label >Seconde Name</Label>
                                            
                                            <Input type="text" placeholder="Last name" value={this.state.last_name}  onChange={(e)=>this.setState({last_name:e.target.value})}/>
                                            
               
                                            
                                        
                                        </FormGroup>
                                    </Col>
                                </Row> 

                               
                            </Form>
                            <Button color="primary" onClick={this.SaveChanges.bind(this)}>Save Changes</Button>
          </TabPane>
          <TabPane tabId="withIcons2">
          <Row>
                            <Label sm="3">Old Password</Label>
                            <Col sm="9">
                                <FormGroup>
                                <Input
                                    placeholder="Old Password"
                                    type="Password"
                                    value={this.state.old_password}
                                    onChange={(e)=>this.setState({old_password:e.target.value})}
                                />
                                <FormText color="default" tag="span">
                                    Please enter a Same Password.
                                </FormText>
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="3">New Password</Label>
                            <Col sm="9">
                                <FormGroup>
                                <Input placeholder="New Password" type="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="3">Confirme Password</Label>
                            <Col sm="9">
                                <FormGroup>
                                <Input placeholder="Confirme Password" type="Password" value={this.state.password2} onChange={(e)=>this.setState({password2:e.target.value})}  />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Button color="primary" onClick={this.handleSubmit.bind(this)} >Save Changes</Button>
          </TabPane>
          <TabPane tabId="withIcons3">
          <Row>
          <Col sm="5">
          <div>
          Informations forfait :
          
          </div>
          </Col>
          <Col sm="7">
          <Card body>
          <Row>
          <Col sm="4">
          <CardTitle tag="h5">Membre depuis</CardTitle>

            
              <CardText>
                <span style={{marginLeft:"6%"}}>{this.props.auth.client &&this.props.auth.client.created_at}</span>  
            </CardText>
           
        
           
            </Col>
          <Col sm="4">
          <CardTitle tag="h5">forfait</CardTitle>

            {this.props.auth.client && this.props.auth.client.offre ?(
              <CardText>
            {this.props.auth.client.offre.nom}
            </CardText>
            ):
          <CardText></CardText>
          }
            <CardText>
            {this.props.client}
            </CardText>
            </Col>
           
            <Col sm="4">
            <CardTitle tag="h5">Actif</CardTitle>
  
              
                <CardText>
                  <span>_____</span>
              </CardText>
            
              </Col>
          </Row>
            
            
          </Card>
          </Col>
          </Row>
          
         
         </TabPane>
                <TabPane tabId="withIcons3">
                <Row>
                <Col sm="5">
                <div>
                Stores, programs, and resources
                Visit or manage the following stores, programs, and resources connected to your Shifti ID.
                
                </div>
                </Col>
                <Col sm="7">
                <Card body>
                {this.props.auth.client ?(
                  <CardTitle >{this.props.auth.client.raison_sociale}</CardTitle>
                  
                ):<CardTitle tag="h5"></CardTitle>}
                <CardText><a href={`http://localhost:3006/${this.props.auth.token}`}>
                <Button>Go to Store</Button>
                </a></CardText>
                  
                </Card>
                </Col>
                </Row>
                
               
               </TabPane>
        </TabContent>
        </CardBody>
        </Card>
        </Col>
        </Row>
      
        
         {!this.props.auth.client || !this.props.auth.client.raison_sociale ?(
        <ModalKit 
        entreprise={"entreprise"}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        isModalVisible= {this.state.isModalVisible}
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
        onSubmit={this.onSubmit}
        />
       ):null

       }
        
      
      
       

        

        </Container>
      </>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(EspaceClient);