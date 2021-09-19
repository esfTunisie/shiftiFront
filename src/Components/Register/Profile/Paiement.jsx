import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Radio  } from 'antd';
import eDinarsJeune from '../../../assets/img/eDinarsJeune.png'
import masterCardVisa from '../../../assets/img/masterCardVisa.png'
import paymee from '../../../assets/img/paymee.png'
import gpgCheckout from '../../../assets/img/gpgCheckout.png'
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const Paiement = (props) => {
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
            <Row><span className="member-space-update-text" style={{paddingBottom:"20px"}} onClick={modificate}>{modification ? 'modifiez le paiement' : 'Activer les modifications'} </span></Row>

                    <div className="row-user-information-paiement">
                    <Radio.Group disabled={modification} onChange={props.onChangePaiement} defaultValue={props.userPaiement && props.userPaiement.type}>
                        <Row className='row-user-infomation-paiement-style'>
                            <Col span={12}>
                            <Radio value={"e-dinars jeune"}><img src={eDinarsJeune} width='50%' /></Radio>
                            </Col>
                            <Col span={12}>
                            <Radio value={"master card / visa"}><img src={masterCardVisa} width='50%' /></Radio>
                            </Col>
                        </Row>
                        <Row className='row-user-infomation-paiement-style'>
                            <Col span={12}>
                            <Radio value={"paymee"}><img src={paymee} width='50%' /></Radio>
                            </Col>
                            <Col span={12}>
                            <Radio value={"GPG checkout"}><img src={gpgCheckout} width='50%' /></Radio>
                            </Col>
                        </Row> 
                    </Radio.Group>
                    </div>  
              
                <Row className='button-sauvgarder-user-information'><Button  disabled={modification} onClick={props.handleSavePaiement} className='button-sauvgarder-user-information-style'>Sauvgarder</Button></Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(Paiement);