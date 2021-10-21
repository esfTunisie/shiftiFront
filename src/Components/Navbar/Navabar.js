import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import { Menu, Drawer } from 'antd';
import { UserOutlined, MenuOutlined, TeamOutlined, MailOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import { Button } from 'antd';
import UserLogo from "../../assets/img/logoUser.png"
const { SubMenu } = Menu;

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible:false,
      size: 'large',
    };  
  }
  goLogin=()=>{
    window.location='/loginPage'
  }
  goUser=()=>{
    window.location='/user-profile'
  }
  logout=()=>{
    const action = {type:"LOGOUT",token:null, client:null, user:null,isLogIn:null, username:null}
    this.props.dispatch(action)
    setTimeout(() => {
      window.location='/'
    }, 1000);
    
  }
  showMenuConnected =()=>{
    if(this.props.auth && this.props.auth.client != null ){
      return(
        <Button shape="round" className="btn-user"  size={this.state.size} >
      <ul className='btn-user'>
      <li>
              <img className="image-logo-username" src={UserLogo} />
              <span className=""> {this.props.auth.client.username}</span>
            
            <ul class="dropdown">
                <li onClick={this.goUser}><a href="#">Profile</a></li>
                <li onClick={this.logout}><a href="#">Déconnection</a></li>
               
            </ul>
        </li>
      </ul>
      </Button>
        
      )
    }
    else{
      return(
        <Button onClick={this.goLogin} shape="round" className="btn-login"  size={this.state.size} >
              <img className="image-logo-user" src={UserLogo} />
              <span className="mobileHidden"> Login </span>
        </Button>
        
      )
    }

 
  }

  showDrawer = () => {
    this.setState({visible:true})
  };
  onClose = () => {
    this.setState({visible:false})
  };
  menuMobile = () => {

  return (
    <>
      <Button type="link" className="topbar-menu mobileVisible" onClick={this.showDrawer} icon={<MenuOutlined />} />
      
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <Menu mode="vertical">
        <Menu.Item>
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Qui Sommes Nous</a>
        </Menu.Item>
        <Menu.Item>
          <Link to="/service">Services</Link>
        </Menu.Item>
        <Menu.Item>
          <a href="/offre">Offres</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/devenir-partenaire">Devenir partenaire</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/Contact">Contact</a>
        </Menu.Item>
      </Menu>
      </Drawer>
    </>
  );
};

  render() {
    const { size } = this.state;
    return (
      <div>
      
      {/* <Menu mode="horizontal" className="position-items">
        <Menu.Item key="null">
          {this.menuMobile()}
        </Menu.Item>
        <Menu.Item key="mail">
          <span className="mobileHidden"> Devenir partenaire </span><span className="mobileVisible"><TeamOutlined /></span>
        </Menu.Item>
        <Menu.Item key="app" >
          <span className="mobileHidden">Contact</span><span className="mobileVisible"><TeamOutlined /></span>
        </Menu.Item>
        <Menu.Item>
          <Button shape="round" icon={<UserOutlined />} size={size} >
            Login
          </Button>
        </Menu.Item>
      </Menu> */}
      <div className="topbar">
            {this.menuMobile()}
            <div className="mobileHidden">
              <Link to='/devenir-partenaire' className="topbar-menu">Devenir partenaire <span className="mobileVisible"><TeamOutlined /></span></Link>
              <Link to='/Contact' className="topbar-menu">Contact <span className="mobileVisible"><TeamOutlined /></span></Link>
            </div>
              {/* {this.props.auth && this.props.auth.username?<span className="mobileHidden"> <Link to='/user'>{this.props.auth.username}</Link> </span>:<span className="mobileHidden"> Login </span> } */}
              {this.showMenuConnected()}
           
        </div>
      </div>
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
  
export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
