import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Radio  } from 'antd';
import Poste from '../../../assets/img/logo-laposte.png'
import Express from '../../../assets/img/tunisia-express.png'
import DHL from '../../../assets/img/84-dhl.jpg'
import  Droppex from '../../../assets/img/logo1.png'
import  Aramex from '../../../assets/img/aramex-logo.png'
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const Livraison = (props) => {
    const [value, setValue] = React.useState(1);
    const [modification, setmodification] = useState(true)


    const  modificate = () => {
        setmodification(!modification)
       
  }; 
    // const onChangePaiement = e => {
    //     console.log('radio checked', e.target.value);
    //     setValue(e.target.value);
    //   };

    return(
        <div className="user-information-pages">
            <div className='user-information-domaine'>
            <Row><span className="member-space-update-text" style={{paddingBottom:"20px"}} onClick={modificate}>{modification ? 'modifier le mode de livraison' : 'Activer les modifications'} </span></Row>

                    <div className="row-user-information-paiement">
                    <Radio.Group disabled={modification} onChange={props.onChangeLivraison} defaultValue={props.userLivraison && props.userLivraison.typelivraison}>
                        <Row className='row-user-infomation-paiement-style'>
                        <Col span={12}>
                            <Radio value={"DHL"}><img src={DHL} width='50%' /></Radio>
                            </Col>
                           
                            <Col span={12}>
                            <Radio value={"Tunisia express"}><img src={Express} width='50%' /></Radio>
                            </Col>
                        </Row>
                        <Row className='row-user-infomation-paiement-style'>
                        <Col span={12}>
                            <Radio value={"Aramex"}><img src={Aramex} width='50%' /></Radio>
                            </Col>
                      
                            <Col span={12}>
                            <Radio value={"Droppex"}><img src={Droppex} width='50%' /></Radio>
                            </Col>
                        </Row> 
                        <Row className='row-user-infomation-paiement-style'>
                        <Col span={12}>

                        <Radio value={"Poste"}><img src={Poste} width='50%' /></Radio>
                        </Col>
                           
                        </Row> 
                    </Radio.Group>
                    </div>  
              
                <Row className='button-sauvgarder-user-information'><Button  disabled={modification} onClick={props.handleSaveLivraison} className='button-sauvgarder-user-information-style'>Sauvgarder</Button></Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(Livraison);