
import React from "react";
import classnames from "classnames";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Navbar from '../../Components/Navbar/Navabar';
import { connect } from "react-redux";
import { apiURL } from "../../Config/config";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    username:"",
    password:"" ,
    passwordFocus:false,
    emailFocus:false
    
     
  };
}
handleSubmit=async()=>{

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "username": this.state.username,
      "password": this.state.password
    }),
  };
  
  await fetch(apiURL+"/api/login_check", requestOptions)
    .then(response => {
      if(response.status == 200){
        response.text().then(result =>{
          const str = JSON.stringify(result).substring(14)
          const newStr = str.substring(0, str.length - 4)
          fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
            'Authorization': 'Bearer '+newStr}})
           .then(response => response.json()).then(data => {
             console.log("data",data);
              const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:this.state.username, client:data}
              this.props.dispatch(action)
             window.location= '/'
             
           
           })
        })

      }
      else{
        const action = {type:"GET_TOKEN", token:'', isLogIn:false }
          this.props.dispatch(action)
      }
    })
    .catch(error => console.log('error', error));
 
}


  render(){
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    // style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    // style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("../../assets/img/square-purple-1.png").default}
                      />
                      <CardTitle tag="h4">Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            onChange={(e)=>this.setState({username: e.target.value})}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            onChange={(e)=>this.setState({password:e.target.value})}
                          />
                        </InputGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button className="btn-round" color="primary" size="lg" onClick={this.handleSubmit}>
                          Login
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                // style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                // style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                // style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                // style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                // style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                // style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
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
export default connect (mapStateToProps, mapDispatchToProps)(Login)
