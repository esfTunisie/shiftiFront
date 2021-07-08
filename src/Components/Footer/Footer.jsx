import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined, EnvironmentFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import logofooter from '../../assets/img/logofooter.png';
import { Input } from 'antd';

class Footer extends Component {
    render() {
        const { TextArea } = Input;
        const size = this.state
        return (
            <div >

                <Row justify="center" className="footer-section">
                    <Col xs={24} sm={24} md={11} lg={11} xl={11} className="col-footer-1">
                        <img src={logofooter} className="logofooter" />
                        <p className="text-footer1">Shifti est le centre Digital de services dédié à la
                            démocratisation et à l'accélération des projets de
                            boutiques en ligne. Nous mettons à la disposition des PMEs tous les outils et toutes les ressources nécessaires au lancement, à la réussite, et la pérennisation de leurs
                            commerce en ligne. Shifti est votre "One Stop Shop" pour vos projet e-commerce.</p>
                        <a href="#" className="button-footer" > Lire la suite <RightOutlined className="button-footer-icon"/></a>
                    </Col>
                    <Col xs={24} sm={24} md={13} lg={13} xl={13} className="col-footer-2">
                        <Row className="row-row-footer">
                            <Col xs={24} sm={24} md={10} lg={10} xl={10} >
                                <p className="title-color-footer">Liens utiles</p>
                                <p className="link-footer">A Propos</p>
                                <p className="link-footer">Services</p>
                                <p className="link-footer">Offres</p>
                                <p className="newsletter">NewsLetter</p>
                            </Col>
                            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                                <p className="title-color-footer">Contact</p>
                                <span className="footer-inline">
                                <EnvironmentFilled className="icon-footer" /><p className="contact-footer"> Résidence El Badr, Avenue Hédi Nouira, Ariana 2037, Tunisie</p>
                                </span>
                                <span className="footer-inline">
                                <MailFilled className="icon-footer" /><p className="contact-footer">  hello@esftunisie.com</p>
                                </span>
                                <span className="footer-inline">
                                <PhoneFilled className="icon-footer" /><p className="contact-footer"> +216 20 28 69 66</p>
                                </span>
                                <TextArea className="input-footer" placeholder="Email address" autoSize />
                                <Button className="subscribe" shape="round" > Subscribe</Button>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>

        );
    }
}

export default Footer;