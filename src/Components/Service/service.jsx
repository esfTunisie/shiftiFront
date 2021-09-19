
import { connect } from 'react-redux'
import image1 from '../../assets/img/Artboard1.png'
import image2 from '../../assets/img/Artboard1copy.png'
import image3 from '../../assets/img/Artboard2.png'
import image4 from '../../assets/img/Artboard3.png'
import image5 from '../../assets/img/Artboard3copy.png'
import { Row, Col } from 'antd';
import Footer from '../Footer/Footer';
// just use (useEffect). every change will be logged with current value
import React, { useEffect } from "react";
import {
    CheckCircleTwoTone
  } from '@ant-design/icons';



const Service = (props) => {
    const myWidth  = window.innerWidth;
    useEffect(() => {
        window.addEventListener('resize', () => {
          const myWidth  = window.innerWidth; 
       })
      },[window])
    return(
        <div className="style-page-service">
            <Row className='title-service-first'>
            Nos services
            </Row>
            <Row className='row-service'>
                <Col className='image-service' span={12} xs={20} sm={12}>
                <img src={image1} width={'70%'} height={"80%"} />
                </Col>
                <Col span={12} xs={20} sm={12}>
                <p className='title-service'>
                Mise à disposition de boutiques en ligne
                </p>
                <span className='content-service'>
                à partir d’un simple formulaire, nous vous fournissons votre e-commerce prêt à la vente de vos produits et de vos services. Votre boutique en ligne n'est qu'à quelques clics.
                </span>
                <div>

                <ol>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Web Design & UX/UI</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Adaptation régionale multilingue et multidevises</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Hébergement</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Maintenance et mises à jour</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Sécurité des données</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Payements en ligne</li>
                </ol>
                    
                </div>
                </Col>
            </Row>
            <Row className='row-service'>
                
                <Col span={12} xs={20} sm={12}>
                <p className='title-service'>
                Marketing et communication ciblée
                </p>
                <span className='content-service'>
                Nous optimisons vos campagnes en ligne en temps réel pour atteindre les résultats
                 commerciaux souhaités. Ayez une longueur d'avance sur vos concurrents grâce à l'accès
                  aux toutes dernières technologies de Marketing Digital et maximisez votre activité
                   en ligne avec des publicités personnalisées. Le marketing de performance
                 se concentre sur trois activités claires : l'acquisition, l'activation et la rétention.</span>
                <div>

                <ol>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Gestion des réseaux sociaux</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Montage vidéo et animation 2D</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Compagnes de promotions</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />SEO</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Animation blog</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Automated journey builder</li>
                </ol>
                    
                </div>
                </Col>
                <Col className='image-service' span={12} xs={20} sm={12}>
                <img src={image2} width={'70%'} height={"80%"} />
                </Col>
            </Row>
            <Row className='row-service'>
            <Col className='image-service' span={12} xs={20} sm={12}>
                <img src={image5} width={'70%'} height={"80%"} />
                </Col>
                <Col span={12} sm={12}>
                <p className='title-service'>
                Gestion des opération quotidiennes
                </p>
                <span className='content-service'>
                De la consultation de votre site jusqu’à la livraison de vos produits,
                 nous optimisons chaque point de contact
                 entre votre marque et vos clients pour assurer une expérience omnicanale fluide.</span>
                <div>

                <ol>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Gestion des commandes</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Gestion des paiements</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Gestion des livraisons et tracking</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Maintenance et mises à jour</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Intégration CRM et solutions d’entreprise</li>
                <li className="list-detail-service"><CheckCircleTwoTone twoToneColor="#52c41a" />Gestion des retours</li>
                </ol>
                    
                </div>
                </Col>
            </Row>
            <Row className='row-service'>
               
                <Col span={12} xs={20} sm={12}>
                <p className='title-service'>
                Gestion des livraisons et des paiements
                </p>
                <span className='content-service'>
                La Tunisie présente de nombreux défis propres concernant l’infrastructure de livraison 
                et de paiement. Les entreprises
                 font confiance à shifti pour ses solutions adaptées au contexte régional et international.</span>
                <div>  
                </div>
                </Col>
                <Col className='image-service' span={12} xs={20} sm={12}>
                <img src={image3} width={'70%'} height={"80%"} />
                </Col>
            </Row>
            <Row className='row-service'>
            <Col className='image-service' span={12} xs={20} sm={12}>
                <img src={image4} width={'70%'} height={"80%"} />
                </Col>
                <Col span={12} xs={20} sm={12}>
                <p className='title-service'>
                Solutions de service client 
                </p>
                <span className='content-service'>
                Shifti dispose d'une équipe de service client dédiée et expérimentée prête à aider
                 les acheteurs à tout moment. Des solutions d'appel aux chats en direct,
                 notre équipe vous fournira une assistance dans en Arabe, Français ou en Anglais.</span>
                <div>
                </div>
                </Col>
            </Row>
            <Footer />
        </div>
    )
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
      
export default connect(mapStateToProps, mapDispatchToProps)(Service);