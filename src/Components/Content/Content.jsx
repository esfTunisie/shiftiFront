import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import carouselImg1 from '../../assets/img/carousel-img.png';
import carouselImg2 from '../../assets/img/ahmed.png';
import carouselImg3 from '../../assets/img/ahmed1.png';
import carouselImg4 from '../../assets/img/ahmed2.png';
import carouselImg5 from '../../assets/img/ahmed3.png';
import carouselImg6 from '../../assets/img/ahmed4.png';
import carouselImg7 from '../../assets/img/ahmed5.png';
import carouselLeft from '../../assets/img/carousel-left.png';
import carouselRight from '../../assets/img/carousel-right.png';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import vente from '../../assets/img/vente.png';
import vente2 from '../../assets/img/vente2.png';
import visibilite from '../../assets/img/visibilite.png';
import visibilite2 from '../../assets/img/visibilite2.png';
import livraison from '../../assets/img/livraison.png';
import bondeP1 from '../../assets/img/bondeP1.png';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { connect } from "react-redux"


const images = [carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5, carouselImg6, carouselImg7];

class Content extends Component {

    constructor(props) {
    super(props);
    this.state = {
      size: 'large',
      slideIndex:0, 
      updateCount:0,
    };   
  }

   rednderView =()=>{
       if(this.props.auth && this.props.auth.token ){
           window.location ='/user'
       }
       else{
           window.location ='/loginPage'
       }
   }
    template = (idx) => {
            switch(idx) {
            case 0:
                this.rednderView();
                break;
            case 1:
                this.rednderView();
                break;
            case 2:
                this.rednderView();
                break;
            case 3:
                this.rednderView();
                break;
                case 4:
                    this.rednderView()
                    break;
                
                    case 5:
                        this.rednderView();
                        break;
                    
                        case 6:
                             this.rednderView();
                            break;
                      
            }
            
            
        };
        redirectTo=()=>{
            window.location ='loginPage'
        }
        
    render() {

        const NextArrow = ({ onClick }) => {
            return (
            <div className="arrow next" onClick={onClick}>
                <img className="arrow-size" src={carouselRight} />
            </div>
            );
        };

        const PrevArrow = ({ onClick }) => {
            return (
            <div className="arrow prev" onClick={onClick}>
                <img className="arrow-size" src={carouselLeft} />
            </div>
            );
        };

        const settings = {
            infinite: true,
            lazyLoad: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ],
            centerMode: true,
            centerPadding: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            afterChange: () =>
            this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };

        const size = this.state
        return (
                <div>
                <div className="service-section">
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-service">

                            <h1 className="title-row">Vivez votre aventure<br />e-commerce en toute tranquillité</h1>
                            <p className="text-row">Shifti vous donne le pouvoir d'avoir votre propre site de vente en ligne,
                             avec vos produits et vos services et votre propre identité.
                            Shifti est une solution de gestion en ligne centralisée
                            qui facilite la création de sites Web de commerce
                             électronique personnalisés et automatise les tâches de gestion.
                            En quelques clics, nous générons votre boutique en ligne,
                            construire votre plan marketing et gérez vos canaux de médias sociaux.</p>
                            <center>
                                <Button onClick={this.redirectTo} className="button-service" shape="round"> C'est parti</Button>
                            </center>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <img src={vente} className="img-width" />
                            <img src={vente2} className="vente2" />
                        </Col>
                    </Row>

                    <Row>

                        <Col xs={24} sm={24} md={{span: 12, push: 12}} lg={{span: 12, push: 12}} xl={{span: 12, push: 12}} className="col-service">
                            <h1 className="title-row">Augmentez La Visibilité<br />De Votre Entreprise</h1>
                            <p className="text-row">Éliminez les incertitudes liées au marketing, grâce à notre centre de
                                services mutualisés et à nos outils intégrés qui vous aident à créer, à
                                mettre en œuvre et à analyser vos campagnes de marketing digital.</p>
                            <center>
                                <Button onClick={this.redirectTo} className="button-service" shape="round"> C'est parti</Button>
                            </center>
                        </Col>

                        <Col xs={24} sm={24} md={{span: 12, pull: 12}} lg={{span: 12, pull: 12}} xg={{span: 12, pull: 12}}>
                            <img src={visibilite} className="img-width" />
                            <img src={visibilite2} className="visibilite2" />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-service">
                            <h1 className="title-row-colored">Livrez Là Où Sont<br />Vos Clients</h1>
                            <p className="text-row-colored">Nous assurons la proximité avec vos clients, <br />
                                Coordination de la préparation de commande.<br />
                                coordination les acteurs de la livraisons pour l’acheminement des
                                Coordination les acteurs de la livraisons pour l’acheminement des
                                produits à leurs acheteurs. 
                                Retour de commande : gestion des retours marchandises. 
                                Réclamation client : traitement des réclamation et costumer
                                success..</p>
                            <center>
                                <Button onClick={this.redirectTo} className="button-service" shape="round"> C'est parti</Button>
                            </center>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <img src={livraison} className="img-width" />
                        </Col>
                    </Row>
                    </div>

                    {/* Steps Section */}

                    <div className="steps-section">
                        <div className="steps-section-content">
                            <div className="steps-section-title">
                                Développez votre présence en ligne
                            </div>
                            <p className="steps-section-subtitle">Suivez ces étapes pour créer votre site web :</p>
                            <Row gutter={10}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="relative">
                                    <hr className="step-divider"/>
                                    <p className="step-title">Lancez votre site</p>
                                    <p className="step-content">Obtenez un site sur-mesure en 72h
                                        en répondant à quelques questions
                                        sur votre entreprise et votre activité.</p>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="relative">
                                    <hr className="step-divider"/>
                                    <p className="step-title">Ajoutez des fonctionnalités</p>
                                    <p className="step-content">Ajoutez les fonctionnalités et les options 
                                        qui vous conviennent en toute simplicité
                                        Lancez votre blog, configurez vous outils 
                                        de paiement en ligne. Ajoutez
                                        des fonctionnalités à votre guise.</p>
                                </Col>
                            </Row>
                            <Row gutter={10}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="relative">
                                    <hr className="step-divider"/>
                                    <p className="step-title">Mobile First</p>
                                    <p className="step-content">Vos site responsive adaptés à tout type 
                                        de support</p>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="relative">
                                    <hr className="step-divider"/>
                                    <p className="step-title">Optimisez votre référencement</p>
                                    <p className="step-content">Soyez visible sur Google grâce
                                        à notre plan SEO freindly.
                                        Il suffit de répondre à quelques
                                        questions au moment de créer
                                        votre site web.</p>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    {/* Templates & shops Section */}

                    <div className="temp-shop-section">
                        <h2 className="temp-shop-section-title">
                            Nos templates et shops
                        </h2>  
                        <center>                     
                        <div className="carousel">
                            <Slider ref={slider => (this.slider = slider)} {...settings}>
                                {images.map((img, idx) => (
                                <div className={idx === this.state.slideIndex ? "slide activeSlide" : "slide"}>
                                    <img src={img} alt={img} />
                                        <Button className="btn-slider" onClick={() =>{this.template(idx)}}>
                                            View
                                        </Button>
                                </div>
                                ))}
                            </Slider>
                        </div>
                        <a href="#" className="temp-shop-show-all">Voir tout <RightOutlined className="temp-shop-show-all-icon"/> </a>
                        </center>
                    </div>

                    {/* Pack Section */}

                    <div className="pack-section">                                 
                        <h2 className="pack-section-title">
                            Nos packs
                        </h2>                       
                    </div>

                    <Row justify="space-between" align="bottom" className="row-content-pack" gutter={[16, 24]}>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="col-content-pack1">
                            <h1 className="pack-title">Starter </h1>
                            <p className="text-pack">
                            - Branded e-commerce <br />
                            - Adapted graphics and content <br />
                            - Order Management <br />

                                
                            </p>
                            <p className="bas-pack">
                                500dt<span className="span-pack">/Mois</span>
                            </p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="col-content-pack2">
                            <h1 className="pack-title">Pioneer </h1>
                            <p className="text-pack">
                            - Branded e-commerce <br />
                            - Adapted graphics and content <br />
                            - Order Management <br />
                            - Delivery Management <br />
                            - Social Media Management <br />
                            </p>
                            <p className="bas-pack">
                                1500dt<span className="span-pack">/Mois</span>
                            </p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="col-content-pack3">
                            <img src={bondeP1} className="bondeP1" />
                            <h1 className="pack-title"> Gold</h1>
                            <p className="text-pack">
                            - Branded e-commerce <br />
                            - Adapted graphics and content <br />
                            - Order Management <br />
                            - Delivery Management <br />
                            - Online store updates <br />
                            - Social Media Management <br />
                            - SEO / SEA / SMO - Digital campaigns - Promotion <br />
                            </p>
                            <p className="bas-pack">
                                2000dt<span className="span-pack">/Mois</span>
                            </p>
                            </div>
                        </Col>
                    </Row>

                    <div className="description-section">
                        <Row>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <h2 className="description-question">Pourquoi Shifti<br /> est le meilleur choix<br /> pour vous</h2>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <p className="description-text">
                                Shifti est le centre Digital de services dédié à la
                                démocratisation et à l'accélération des projets de
                                boutiques en ligne. Nous mettons à votre disposition tous les outils et toutes les ressources nécessaires au lancement, à la réussite, et la pérennisation de votre commerce en ligne. 
                                Avec Shifti, Nos professionnels créerons pour vous votre site e-commerce avec les standards en vigueur en matière  de navigation et de sécurité. Vous pouvez choisir avec un modèle design le personnaliserons pour vous. 
                                Bénéficiez d'une solution tout-en-un : Branded e-commerce, Marketing digital, communication ciblée, gestions des opérations,
                                satisfaction client
                                </p>
                                <a href="#" className="description-start-link">Commencer <RightOutlined className="description-start-link-icon" /></a>
                            </Col>
                        </Row>
                    </div>

                    {/* <Row justify="center" className="row-pack">
                        <Col span={12} className="">
                            <h1 className="title-desc">Pourquoi Shifti
                                est le meilleur choix
                                pour vous</h1>
                        </Col>
                        <Col span={12}>
                            <p className="text-desc">
                                Avec Wix, vous pouvez créer vous-même un site web gratuit et professionnel. Vous pouvez commencer avec un modèle design et le personnaliser, ou obtenir un site créé pour vous sur-mesure. Bénéficiez d'une solution tout-en-un : hébergement web fiable et gratuit, sécurité maximale, référencement puissant et assistance 24h/24.
                                Plus de 160 millions de personnes dans le monde ont déjà choisi Wix pour créer un site web gratuit. Faites comme eux, lancez-vous.
                            </p>
                            <p className="desc-button" > Commencer <RightOutlined className="icon" /></p>
                        </Col>
                    </Row> */}
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

export default connect(mapStateToProps, mapDispatchToProps) (Content);

