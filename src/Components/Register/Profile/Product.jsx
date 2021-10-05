import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux'
import { Input, Row, Col, notification, Button, Alert, Form, Select } from 'antd';

import piceJoint from '../../../assets/img/pieceJoint.svg'
import { apiURL } from "../../../Config/config";
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { TextArea } = Input;
const Product = (props) => {
    const { Option } = Select;
    const [fileList, setFileList] = useState()
    const [formValues, setFormValues] = useState([{ categorie: "",}])
    const [produit, setProduit] = useState([{ produit: "",}])
    const [values, setValues] = useState("")
    const [categorie, setCategorie] = useState("")
    const [produits, setProduits] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [prix, setPrix] = useState("")
    const [quantite,setQuantite] = useState("")
    const [photo,setPhoto] = useState("")
    console.log('props',props);


      const image = {
        name: 'image',
          // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          console.log("info",info);
        },
      };
      const onUploadPhoto =( info, index)=>{
        const updatedArray = [...photo];
        updatedArray[index] = info;
        setPhoto(updatedArray)
      }


      
      const addFormFields = () => {
          setFormValues([...formValues, { categorie: "",  }])
        }
      
        const addFormFieldsProduct = () => {
            setProduit([...produit, { produit: "",  }])
          }
      


    // const handleChangeCategorie =(index, newValue)=>{
    //     const updatedArray = [...categorie];
    //     updatedArray[index] = newValue;
    //     setCategorie(updatedArray)
    // }
    // const handleChangeProduits =(index, newValue)=>{
    //     const updatedArray = [...produits];
    //     updatedArray[index] = newValue;
    //     setProduits(updatedArray)
    // }
    // const handleChangeType =(index, newValue)=>{
    //     const updatedArray = [...type];
    //     updatedArray[index] = newValue;
    //     setType(updatedArray)
    // }
    // const handleChangeDescription =(index, newValue)=>{
    //     const updatedArray = [...description];
    //     updatedArray[index] = newValue;
    //     setDescription(updatedArray)
    // }
    // const handleChangePrix =(index, newValue)=>{
    //     const updatedArray = [...prix];
    //     updatedArray[index] = newValue;
    //     setPrix(updatedArray)
    // }
    // const handleChangeQuantite =(index, newValue)=>{
    //     const updatedArray = [...quantite];
    //     updatedArray[index] = newValue;
    //     setQuantite(updatedArray)
    // }
    // const handleSaveForm =async()=>{
    //     let formdata = new FormData()
        
    //     produits.forEach(pd => {
    //         formdata.append('name[]', pd)
    //     });
    //     quantite.forEach(qu => {
    //         formdata.append('quantite[]', qu)
    //     });
    //     prix.forEach(pr => {
    //         formdata.append('prix[]', pr)
    //     });
    //     type.forEach(typ => {
    //         formdata.append('type[]', typ)
    //     });
    //     description.forEach(des => {
    //         formdata.append('description[]', des)
    //     });
    //     photo.forEach(ph => {
    //         formdata.append('photo[]', ph)
    //     });
    //       const requestOptions = {
    //         method: 'POST',
    //         body: formdata
    //       };
        
    //     const data = await fetch(apiURL+'/addProduit/'+props.auth.username,requestOptions);
    //     const dataJson = await data.json();
    //     console.log("dataaaa",dataJson);
    //     if(data.status == 201){ 
    //         console.log("sucesss");
    //         setQuantite()
    //         setPrix()
    //         setProduits()
    //         setDescription()
    //         setType()
            
           
    //     }
    //     let formdataCategorie = new FormData()
    //     categorie.forEach(cat => {
    //         formdataCategorie.append('categorie[]', cat)
    //     });
    //     const requestOptionsCategorie = {
    //         method: 'POST',
    //         body: formdataCategorie
    //       };
    //     const dataCategorie = await fetch(apiURL+'/addCategorie/'+props.auth.username,requestOptionsCategorie);
    //     const dataJsonCategorie = await dataCategorie.json();
        
    //     if(dataCategorie.status == 201){ 
    //         console.log("sucesss");
    //         setCategorie()
            
           
    //     }
    // }
    // console.log("photo", photo);
    
    return(
            <div className="user-information-pages">
            <Form
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
            
             
            >
            <div className='user-information-title-product'>Catégorie</div>
            {formValues.map((element, index) => (
            <Row className='row-user-information-struct-product'>
            <Col className="row-user-inforamtion-style-product" >
            
                <Form.Item >
                    <Select defaultValue="Categorie" onChange={e => props.handleChangeCategorie(index, e)} className='row-user-information-info-generale-input'>
                            <Option value="Fondateur/ co-Fondateur">{'Fondateur/ co-Fondateur'}</Option>
                            <Option value="Membre de l'équipe">{"Membre de l'équipe"}</Option>
                    </Select>               
                </Form.Item>
            </Col>
            <Col>
            {!index?<Form.Item key={index}>
                <div onClick={() => addFormFields()}className="user-information-categorie-btn-plus"><span>+</span></div>
            </Form.Item>:<Col>
            <Form.Item>
            <div style={{ width:"50px"}} onClick={() => addFormFields()}className="user-information-categorie-btn-plus-none"><span></span></div></Form.Item></Col>}
            </Col>
            </Row>
            ))}
            <div className='user-information-title-product'>Produit</div>
            {produit.map((element, index) => (
            <div>
            <Row className='row-user-information-struct-product-photo'>
                <Col className="row-user-inforamtion-style-product">
                
                    <Form.Item >
                        <Select defaultValue="Produit" onChange={(e)=>props.handleChangeProduits(index, e)}  className='row-user-information-info-generale-input'>
                                <Option value="Fondateur/ co-Fondateur">{'Fondateur/ co-Fondateur'}</Option>
                                <Option value="Membre de l'équipe">{"Membre de l'équipe"}</Option>
                        </Select>               
                    </Form.Item>
                </Col>
            <Col>
            {!index?
            <Form.Item key={index}>
                <div onClick={() => addFormFieldsProduct()}className="user-information-categorie-btn-plus"><span>+</span></div>
            </Form.Item>
            :
            <Col>
            <Form.Item>
            <div style={{ width:"50px"}} onClick={() => addFormFieldsProduct()}className="user-information-categorie-btn-plus-none"><span></span></div>
            </Form.Item>
            </Col>}
            </Col>
            <Col className={"upload-photo-product"}>
            <Upload {...image}  onChange={(info)=>props.onUploadPhoto(info.fileList[0].originFileObj, index)}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            </Col>
            </Row>

            <Row className='row-user-information-struct-product'>
                <Col className="row-user-inforamtion-style-product" >
                <Form.Item>
                <Select defaultValue="Type"  className='row-user-information-info-generale-input' onChange={(e)=>props.handleChangeType(index, e)}>
                                <Option value="Fondateur/ co-Fondateur">{'Fondateur/ co-Fondateur'}</Option>
                                <Option value="Membre de l'équipe">{"Membre de l'équipe"}</Option>
                        </Select>
                </Form.Item>
                </Col>
                <Col>
                    <Form.Item>
                    <div style={{ width:"50px"}} onClick={() => addFormFieldsProduct()}className="user-information-categorie-btn-plus-none"><span></span></div>
                    </Form.Item>
                </Col>
            </Row>
            <Row className='row-user-information-struct-product'>
                <Col className="row-user-inforamtion-style-product" >
                    <Form.Item>
                        <TextArea className='row-user-information-info-generale-input-text-area' rows={4} placeholder='Description' onChange={(e)=>props.handleChangeDescription(index, e.target.value)} />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item>
                    <div style={{ width:"50px"}} onClick={() => addFormFieldsProduct()}className="user-information-categorie-btn-plus-none"><span></span></div>
                    </Form.Item>
                </Col>
            </Row>
            <Row className='row-user-information-struct-product'>
                <Col className="row-user-inforamtion-style-product" >
                    <Form.Item>
                        <Input placeholder="Prix" className='row-user-information-info-generale-input' onChange={(e)=>props.handleChangePrix(index, e.target.value)} />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item>
                    <div style={{ width:"50px"}} onClick={() => addFormFieldsProduct()}className="user-information-categorie-btn-plus-none"><span></span></div>
                    </Form.Item>
                </Col>
            </Row>
            <Row className='row-user-information-struct-product'>
                <Col className="row-user-inforamtion-style-product" >
                    <Form.Item>
                    <Input placeholder="Quantité" className='row-user-information-info-generale-input' onChange={(e)=>props.handleChangeQuantite(index, e.target.value)} />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item>
                    <div style={{ width:"50px"}} onClick={() => addFormFieldsProduct()}className="user-information-categorie-btn-plus-none"><span></span></div>
                    </Form.Item>
                </Col>
            </Row>
            </div>
            
            ))}
            
            </Form>
            <Row className='button-sauvgarder-user-information'><Button  className='button-sauvgarder-user-information-style' onClick={props.handleSaveForm}>Sauvgarder</Button></Row>
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
      
export default connect(mapStateToProps, mapDispatchToProps)(Product);