import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux'

import { Input, Row, Col, notification, Button, Alert, Form, Radio  } from 'antd';
import Slider from "react-slick";
import carouselImg1 from '../../../assets/img/carousel-img.png';
import carouselImg2 from '../../../assets/img/ahmed.png';
import carouselImg3 from '../../../assets/img/ahmed1.png';
import carouselImg4 from '../../../assets/img/ahmed2.png';
import carouselImg5 from '../../../assets/img/ahmed3.png';
import carouselImg6 from '../../../assets/img/ahmed4.png';
import carouselImg7 from '../../../assets/img/ahmed5.png';
import carouselLeft from '../../../assets/img/carousel-left.png';
import carouselRight from '../../../assets/img/carousel-right.png';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const Choixtemplate  = (props) => {

    const [value, setValue] = React.useState(1);
 
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })



    const [updateCount, setupdateCount] = useState(0)
    const [slideIndex, setslideIndex] = useState(0)
    const images = [carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5, carouselImg6, carouselImg7];

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
        setupdateCount(updateCount+1),
        beforeChange: (current, next) => setslideIndex(next)
    };
   const rednderView =()=>{
        if(props.auth && props.auth.token ){
            window.location ='/user'
        }
        else{
            window.location ='/loginPage'
        }
    }
    const template = (idx) => {
             switch(idx) {
             case 0:
                window.open('http://demo.posthemes.com/pos_ecolife_book/book3/en/', '_blank');
                
                 break;
             case 1:
                window.open('http://demo.posthemes.com/pos_ecolife_digital/digital2/en/', '_blank');
                
                 break;
             case 2:
                window.open('http://demo.posthemes.com/pos_ecolife_fashion/fashion2/en/', '_blank');
               
                 break;
             case 3:
                window.open('http://demo.posthemes.com/pos_ecolife_marketplace/marketplace4/en/', '_blank');
                
                 break;
            case 4:
                window.open('http://demo.posthemes.com/pos_ecolife_marketplace/marketplace3/en/', '_blank');
                
                break;
            case 5:
                window.open ('http://demo.posthemes.com/pos_ecolife_furniture/furniture4/en/', '_blank');
               
                break;   
            case 6:
                window.open('http://demo.posthemes.com/pos_ecolife_fastfood/en/', '_blank');
                
                break;         
             }
                 
         };
    const selectTemplate =(id)=>{
        console.log("test",id);
    }     





    return(

        <div className="user-template-pages">
        <div className='user-information-domaine'>
        <Row><span className="member-space-update-text" style={{paddingBottom:"20px"}} onClick={props.modificate}>{props.modification ? 'modifier le choix du template' : 'Activer les modifications'}</span></Row>

        <h2 className="template-section-title">
                            Selectionner une template 
                        </h2>  
                        {dimensions.width > 525 ? <center>                     
                        <div className="carousel">
                            <Slider ref={slider => (slider = slider)} {...settings}>
                                {images.map((img, idx) => (
                                    
                                <Radio.Group  disabled={props.modification} onChange={props.onChangeTemplate}  defaultValue={props.userTemplate && props.userTemplate.indextemplate}   className={idx === slideIndex ? "slide activeSlide" : "slide"} >
                                  <Radio value={idx}>  <img src={img} alt={img}  /> 
                                        <Button className="btn-slider" onClick={() =>template(idx)}>
                                            Voir
                                        </Button>
                                    </Radio>
                                </Radio.Group>
                                ))}
                            </Slider>
                        </div>
                        <a href="#" className="temp-shop-show-all">Voir tout <RightOutlined className="temp-shop-show-all-icon"/> </a>
                        </center>:
                        <div className="carousel-global">
                            <div className="carousel">
                            <Slider ref={slider => (slider = slider)} {...settings}>
                                {images.map((img, idx) => (
                                    
                                <Radio.Group  disabled={props.modification} onChange={props.onChangeTemplate}  defaultValue={props.userTemplate && props.userTemplate.indextemplate}   className={idx === slideIndex ? "slide activeSlide" : "slide"} >
                                  <Radio value={idx}>  <img src={img} alt={img}  /> 
                                        <Button className="btn-slider" onClick={() =>template(idx)}>
                                            Voir
                                        </Button>
                                    </Radio>
                                </Radio.Group>
                                ))}
                            </Slider>
                        </div>
                        <a href="#" className="temp-shop-show-all">Voir tout <RightOutlined className="temp-shop-show-all-icon"/> </a>
                        </div> 
                        }
                        <Row className='button-sauvgarder-user-template'><Button disabled={props.modification} onClick={props.handleSaveTemplate}  className='button-sauvgarder-user-information-style'>Sauvgarder</Button></Row>

        </div> 
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
      
export default connect(mapStateToProps, mapDispatchToProps)(Choixtemplate);



