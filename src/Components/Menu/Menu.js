import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import logo from '../../assets/img/shifti-logo.png';
import { Row, Col } from 'antd';
import {
    Link
  } from "react-router-dom";

class MenuNav extends Component {

    goService=()=>{
        window.location ='/service';
    }
    goOffre=()=>{
        window.location ='/offre';
    }
    goHome=()=>{
        window.location ='/';
    }
    render() {
        return (
            <div>
            <div className="mobileHidden">
                <Row justify="flex-start" align="middle" className="menu-pad-row">
                    <Col md={6} lg={6} xl={6} className="">
                        <img className="logo-img" src={logo} />
                    </Col>

                    <Col>

                        <Menu mode="horizontal">

                            <Menu.Item key="mail" onClick={this.goHome}>
                                Home
                            </Menu.Item>
                            <Menu.Item key="app" >
                                Qui sommes Nous
                            </Menu.Item>
                            <Menu.Item onClick={this.goService}>
                               Services
                            </Menu.Item>
                            <Menu.Item onClick={this.goOffre}>
                                Offres
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                </div>
                <div className="mobileVisible">
                    <center>
                    <img className="logo-img" src={logo} style={{ width:100, paddingTop:50, paddingBottom:35 }}/>
                    </center>
                </div>
                </div>
        );
    }
}

export default MenuNav;