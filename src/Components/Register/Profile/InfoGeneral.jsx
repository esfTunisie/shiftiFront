import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Select, Spin } from 'antd';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import piceJoint from '../../../assets/img/pieceJoint.svg'
import { apiURL } from "../../../Config/config";


const InfoGeneral = (props) => {
    const { Option } = Select;
    const [fileList, setFileList] = useState()
    const [userInformation, setuserInformation] = useState()
    const [loading, setloading] = useState(false)
    const [modification, setmodification] = useState(true)
    
    useEffect(() => {
        console.log("hereeee");
       
    }, []);
 
    const cv = {
        name: 'cv',
          // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
            setFileList(info.originFileOb)
          console.log("info",info);
        },
        
      };
      
      const defaultFile = [
        {
          uid: '0',
          name: props.fileRne && props.fileRne ? props.fileRne.name : props.userInformation && props.userInformation.rne.length>0?props.userInformation.rne.split('/').pop(): '',
          status: 'done',
          url: props.userInformation && props.userInformation.rne.length>0? apiURL+props.userInformation.rne.replace('/public/', ''): '',
          thumbUrl: props.userInformation && props.userInformation.rne.length>0? apiURL+props.userInformation.rne.replace('/public/', ''): '',
        },
      ];  
    const  modificate = () => {
        setmodification(!modification)
       
  }; 
  
      console.log('userInformation',props.fileRne);
    return(
            <div className="user-information-pages">
           <Form
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
            
             
            >
            <span className="member-space-update-text" onClick={modificate}>{modification ? 'modifiez le profile' : 'Activer les modifications'} </span>

            <Row>
            <Col className="row-user-inforamtion-style" span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder="username" className='row-user-information-info-generale-input' onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'username',0)} value={props.userInformation && props.userInformation.username}  />
                        {props.infoGenError[0]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[0]}</div>}
                </Form.Item>
            </Col>
            <Col span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder="Nom de l'entreprise" className='row-user-information-info-generale-input' onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'nomEntreprise',1)} value={props.userInformation &&props.userInformation.nomEntreprise}  />
                        {props.infoGenError[1]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[1]}</div>}
                </Form.Item>
            </Col>
            </Row>
            <Row>
            <Col className="row-user-inforamtion-style" span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder="Email"  className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.email} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'email',2)} />
                        {props.infoGenError[2]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[2]}</div>}
                </Form.Item>
            </Col>
            <Col span={10}>
                <Select disabled={modification} defaultValue="Secteur d'activité" className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.secteurActivite} onChange={(e)=>props.onChangeInfoGeneralUser(e,'secteurActivite',3)}>
                        <Option value="secteur 1">{'secteur 1'}</Option>
                        <Option value="secteur 2">{"secteur 2"}</Option>
                </Select>
                {props.infoGenError[3]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[3]}</div>}
            </Col>
            </Row>
            <Row>
            <Col className="row-user-inforamtion-style" span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder="Phone" className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.phone} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'phone',4)} />
                        {props.infoGenError[4]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[4]}</div>}
                </Form.Item>
            </Col>
            <Col span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder="Produit" className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.produit} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'produit',5)} />
                        {props.infoGenError[5]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[5]}</div>}
                </Form.Item>
            </Col>
            </Row>
            <Row>
            {/* <Col className="row-user-inforamtion-style" span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder="Mot de passe actuel" className='row-user-information-info-generale-input'  onchange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'password',6)} />
                </Form.Item>
            </Col> */}
            <Col span={10} className="row-user-inforamtion-style">
                <Select disabled={modification} defaultValue="Chiffre d'affaire annuel" className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.chiffreAffaire} onChange={(e)=>props.onChangeInfoGeneralUser(e,'chiffreAffaire',6)}>
                        <Option value="chiffre affaire 1">{'chiffre affaire 1'}</Option>
                        <Option value="chiffre affaire 2">{"chiffre affaire 2"}</Option>
                </Select>
                {props.infoGenError[6]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[6]}</div>}
            </Col>
            <Col span={10}>
            <Form.Item>
                <Upload  placeholder={'RNE'} maxCount={1} accept=".doc,.docx,application/msword"  onChange={(info)=>props.onChangeInfoGeneralUser(info.fileList[0].originFileObj,'rne',7)} fileList={[...defaultFile]} >
                    <Button disabled={modification} className='row-user-information-adresse' icon={<UploadOutlined />}><img width={'5%'} style={{float:"right"}} src={piceJoint} /></Button>
                </Upload>
                {props.infoGenError[7]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[7]}</div>}
            </Form.Item>
            </Col>
            </Row>
            <Row>
            {/* <Col className="row-user-inforamtion-style" span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder="Nouveau mot de passe" className='row-user-information-info-generale-input' onchange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'newpassword',14)}   />
                </Form.Item>
            </Col> */}
            
            </Row>
            <Row>
                <Col span={10} className="row-user-inforamtion-style">
                <div className='row-user-information'>
                        <div>
                        <Form.Item>
                            <Input disabled={modification} placeholder={'N'} className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.numberRue} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'numberRue',8)} />
                            {props.infoGenError[8]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[8]}</div>}
                        </Form.Item>
                        </div>
                        <div>
                        <Form.Item>
                            <Input disabled={modification} placeholder={'Rue'} className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.rue} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'rue',9)} />
                            {props.infoGenError[9]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[9]}</div>}
                        </Form.Item>
                        </div>
                </div>
                <Form.Item>
                        <Input disabled={modification} placeholder={'adresse'} className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.adresse} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'adresse',10)} />
                        {props.infoGenError[10]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[10]}</div>}
                </Form.Item>
                <div className='row-user-information'>
                        <div>
                        <Form.Item>
                            <Input disabled={modification} placeholder={'Ville'} className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.ville} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'ville',11)} />
                            {props.infoGenError[11]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[11]}</div>}
                        </Form.Item>
                        </div>
                       <div>
                        <Form.Item>
                                <Input disabled={modification} placeholder={'Code postal'} className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.codePostal} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'codePostal',12)} />
                                {props.infoGenError[12]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[12]}</div>}
                        </Form.Item>
                       </div>
                </div>                
                </Col>
                <Col span={10}>
                <Form.Item>
                        <Input disabled={modification} placeholder={'site web'} className='row-user-information-info-generale-input' value={props.userInformation &&props.userInformation.webSite} onChange={(e)=>props.onChangeInfoGeneralUser(e.target.value,'webSite',13)} />
                        {props.infoGenError[13]&&<div style={{color:'red'}}>{props.infoGenErrorMsg[13]}</div>}
                </Form.Item>
                </Col>
            </Row>
            </Form>
            <Row className='button-sauvgarder-user-information'><Button disabled={modification} className='button-sauvgarder-user-information-style' onClick={props.saveModificationInfoGen}>Sauvgarder</Button></Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneral);