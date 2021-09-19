import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Select } from 'antd';


const Domaine = (props) => {
    const [modification, setmodification] = useState(true)


    const  modificate = () => {
        setmodification(!modification)
       
  }; 

    return(
        <div className="user-information-pages">
            <div className='user-information-domaine'>
            <Row><span className="member-space-update-text" onClick={modificate}>{modification ? 'modifiez le domaine' : 'Activer les modifications'} </span></Row>

                <Form
                name="basic"
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
                className='form-user-domaine'>
                    
                    <div className="row-user-information-domaine">
                        <Form.Item>
                            <Input disabled={modification} placeholder="nom de domaine" className='row-user-information-info-generale-input'  onChange={(e)=>props.onChangeDomaine(e.target.value,'nom',0)} value={props.userDomaine && props.userDomaine} />
                            {props.userDomaineError[0]&&<div style={{color:'red'}}>{props.userDomaineErrorMsg[0]}</div>}

                        </Form.Item>
                    </div>  
                </Form>
                <Row className='button-sauvgarder-user-information'><Button  disabled={modification} onClick={props.handleSaveDomaine} className='button-sauvgarder-user-information-style'>Sauvgarder</Button></Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(Domaine);