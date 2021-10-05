import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Select } from 'antd';
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

const Domaine = (props) => {
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
                 rednderView();
                 break;
             case 1:
                 rednderView();
                 break;
             case 2:
                 rednderView();
                 break;
             case 3:
                 rednderView();
                 break;
            case 4:
                rednderView()
                break;
            case 5:
                rednderView();
                break;   
            case 6:
                rednderView();
                break;         
             }
                 
         };
    const selectTemplate =(id)=>{
        console.log("test",id);
    }     

    return(
        <div className="temp-shop-section-template">
                        <h2 className="template-section-title">
                            Selectionner une template 
                        </h2>  
                        <center>                     
                        <div className="carousel">
                            <Slider ref={slider => (slider = slider)} {...settings}>
                                {images.map((img, idx) => (
                                <div onClick={()=>selectTemplate(idx)} className={idx === slideIndex ? "slide activeSlide" : "slide"}>
                                    <img src={img} alt={img} />
                                        <Button className="btn-slider" onClick={() =>template(idx)}>
                                            Voir
                                        </Button>
                                </div>
                                ))}
                            </Slider>
                        </div>
                        <a href="#" className="temp-shop-show-all">Voir tout <RightOutlined className="temp-shop-show-all-icon"/> </a>
                        </center>
                        <Row className='button-sauvgarder-user-information'><Button  className='button-sauvgarder-user-information-style'>Sauvgarder</Button></Row>

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
      
export default connect(mapStateToProps, mapDispatchToProps)(Domaine);



