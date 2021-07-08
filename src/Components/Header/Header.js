import React, { Component } from 'react';
import { Button } from 'antd';
import iconShifti from '../../assets/img/shifti-icon.png';
import DesktopShifti1 from '../../assets/img/DesktopShifti1.png';
import DesktopShifti2 from '../../assets/img/DesktopShifti2.png';
// import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  goLogin =()=>{
    window.location ='/registration'
  }
  render() {
    const size = this.state

    return (
      <div>

        <div className="page">
          <h1 className="title">Démarez votre commerce <br />
            en ligne avec <span className="color-title">Shifti</span></h1>
            <center>
              <Button onClick={this.goLogin} className="button-header" shape="round" > C'est parti</Button>
            </center>
          <img src={iconShifti} className="shifti-background-icon" />
          <img src={iconShifti} className="shifti-background-icon-hidden" />
          <img src={DesktopShifti1} className="DesktopShifti1" />
          <img src={DesktopShifti2} className="DesktopShifti2" />
        </div>
      </div>


    );
  }
}

export default Header;

