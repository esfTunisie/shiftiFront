//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import imageShifty from "../../assets/img/Ellipse1.svg"
import imageShiftyPoint from "../../assets/img/1.svg"
import { Input, Row, Col, Button } from 'antd';
import imageShiftyLogin from "../../assets/img/imageLogin.png"
import InfoGeneral from "./Profile/InfoGeneral";
import Domaine from "./Profile/Domaine";
import Product from "./Profile/Product";
import Paiement from "./Profile/Paiement";
import Template from "./Profile/Template";
import { apiURL } from "../../Config/config";



const { TextArea } = Input;
const BluePage = (props) => {
    const [steps, setSteps] = useState(1)
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
    const [ValuePaiement,setValuePaiement] = useState("")
    const [ValueDomaine,setValueDomaine] = useState("")
    const [userInformation,setuserInformation] = useState("")
    const [userDomaine,setuserDomaine] = useState()
    const [validationUserDomaine, setvalidationUserDomaine] = useState({error:[true], errorMsg:["required"]})
    const [userDomaineError, setuserDomaineError] = useState([true])
    const [userDomaineErrorMsg, setuserDomaineErrorMsg] = useState([''])
    const [infoGen, setInfoGen] = useState({username:"",nomEntreprise:"",email:"",secteurActivite:"",phone:"",
    produit:"",chiffreAffaire:"",rne:"",numberRue:"",rue:"",adresse:"",ville:"",codePostal:"",webSite:"",})
    const [validation, setValidation] = useState({error:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,],
        errorMsg:["required","required","required", "required", "required","required","required", "required",
        "required","required","required", "required", "required","required",]
    })

    const [infoGenError, setinfoGenError] = useState([true,true,true, true,true,true,true, true,true,true,true, true,true,true]);
    const [infoGenErrorMsg, setinfoGenErrorMsg] = useState(['','','', '','','','', '','','','', '','','']);
    const [userPaiement, setuserPaiement] = useState("")


    useEffect(() => {
        console.log("hereeee");
        getAllUserInformation()
        getPaimentUser()
       
    }, []);

    const stepsProps = props.auth.steps
    const changeStepsOne =()=>{
        setSteps(1);  
    }
    const changeStepsTwo =()=>{
        setSteps(2);
    }
    const changeStepsThree =()=>{
        setSteps(3);
    }
    const changeStepsFour =()=>{
        setSteps(4);
    }
    const changeStepsFive =()=>{
        setSteps(5);
    }
    const changeStepsSix=()=>{
        setSteps(6)
    }
    console.log(props);


    /*******************product page ******************/
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
      


    const handleChangeCategorie =(index, newValue)=>{
        const updatedArray = [...categorie];
        updatedArray[index] = newValue;
        setCategorie(updatedArray)
    }
    const handleChangeProduits =(index, newValue)=>{
        const updatedArray = [...produits];
        updatedArray[index] = newValue;
        setProduits(updatedArray)
    }
    const handleChangeType =(index, newValue)=>{
        const updatedArray = [...type];
        updatedArray[index] = newValue;
        setType(updatedArray)
    }
    const handleChangeDescription =(index, newValue)=>{
        const updatedArray = [...description];
        updatedArray[index] = newValue;
        setDescription(updatedArray)
    }
    const handleChangePrix =(index, newValue)=>{
        const updatedArray = [...prix];
        updatedArray[index] = newValue;
        setPrix(updatedArray)
    }
    const handleChangeQuantite =(index, newValue)=>{
        const updatedArray = [...quantite];
        updatedArray[index] = newValue;
        setQuantite(updatedArray)
    }
    const handleSaveForm =async()=>{
        let formdata = new FormData()
        
        produits.forEach(pd => {
            formdata.append('name[]', pd)
        });
        quantite.forEach(qu => {
            formdata.append('quantite[]', qu)
        });
        prix.forEach(pr => {
            formdata.append('prix[]', pr)
        });
        type.forEach(typ => {
            formdata.append('type[]', typ)
        });
        description.forEach(des => {
            formdata.append('description[]', des)
        });
        photo.forEach(ph => {
            formdata.append('photo[]', ph)
        });
          const requestOptions = {
            method: 'POST',
            body: formdata
          };
        
        const data = await fetch(apiURL+'/addProduit/'+props.auth.username,requestOptions);
        const dataJson = await data.json();
        console.log("dataaaa",dataJson);
        if(data.status == 201){ 
            console.log("sucesss");
            setQuantite()
            setPrix()
            setProduits()
            setDescription()
            setType()
            
           
        }
        let formdataCategorie = new FormData()
        categorie.forEach(cat => {
            formdataCategorie.append('categorie[]', cat)
        });
        const requestOptionsCategorie = {
            method: 'POST',
            body: formdataCategorie
          };
        const dataCategorie = await fetch(apiURL+'/addCategorie/'+props.auth.username,requestOptionsCategorie);
        const dataJsonCategorie = await dataCategorie.json();
        
        if(dataCategorie.status == 201){ 
            console.log("sucesss");
            setCategorie()
            setSteps(5)

            
           
        }
    }
    console.log("photo", photo);

    /****************************product page ***************/

    /*************************paiement page ****************/

    const onChangePaiement = e => {
        setValuePaiement(e.target.value);
      };

    const getPaimentUser =async()=>{
        const requestOptions = {
            method: 'GET',
          };
        const data = await fetch(apiURL+'/getPaiementUser/'+props.auth.username,requestOptions);
        const dataJson = await data.json();

        console.log("dataaaa",dataJson);
        if(data.status == 200){ 
            setuserPaiement(dataJson)
        }
    }  

    const handleSavePaiement =async()=>{
        let formdata = new FormData()
        formdata.append('type', ValuePaiement)
        const requestOptions = {
            method: 'POST',
            body: formdata
          };

        const data = await fetch(apiURL+'/addPaiementUser/'+props.auth.username,requestOptions);
        const dataJson = await data.json();
        console.log("dataaaa",dataJson);
        if(data.status == 201){ 
            setSteps(6)
        }
    }
    
    /*************************paiement page ****************/
    /*************************domaine page ****************/
    const onChangeDomaine =(value,key,index)=>{
        let aux ={...userDomaine}
        let auxValidation = {...validationUserDomaine}
        aux[key]=value
        if(key=="nom"){
          if(value.trim()===''){
            auxValidation.error[index]=true
            auxValidation.errorMsg[index]='required'
          }else{
            auxValidation.error[index]=false
            auxValidation.errorMsg[index]=''
          }
        }
        console.log("auuuuuux",aux);
        setuserDomaine(aux.nom)
        setvalidationUserDomaine(auxValidation)
    }


    const handleSaveDomaine =async()=>{
        console.log("hiii");
        const ERROR = [...validationUserDomaine.error]
        const ERROR_MSG=[...validationUserDomaine.errorMsg]
        setuserDomaineError(ERROR)
        setuserDomaineErrorMsg(ERROR_MSG)
        console.log("ERROR",ERROR);
        if(!ERROR.includes(true)){
            // let formdata = new FormData()
            // formdata.append('nom', ValueDomaine)
            var urlencoded = new URLSearchParams();
            urlencoded.append("nom", userDomaine);
            const requestOptions = {
                method: 'PUT',
                body: urlencoded
            };

            const data = await fetch(apiURL+'/updateDomaineUser/'+props.auth.username,requestOptions);
            const dataJson = await data.json();
            console.log("dataaaa",dataJson);
            if(data.status == 201){ 
                setSteps(3)
            }
        }
    }
    // const getDomaineUser =async()=>{
       
    //     const requestOptions = {
    //         method: 'GET',
    //       };
    //     const data = await fetch(apiURL+'/getDomaineUser/'+props.auth.username,requestOptions);
    //     const dataJson = await data.json();

    //     console.log("dataaaa",dataJson);
    //     if(data.status == 200){ 
    //         setuserDomaine(dataJson)
    //     }
    // }
    /*************************domaine page ****************/

    /****************************infoGenaral **************/
    const getAllUserInformation =async()=>{
        console.log("hereeee");
            const requestOptions = {
                method: 'GET', 
              };
            const data = await fetch(apiURL+'/getAllUserInformation/'+props.auth.username,requestOptions);
            
            const dataJson = await data.json();
            console.log("dataaaa",dataJson);

            if(data.status == 200){ 
                setInfoGen({email:dataJson.email,username:dataJson.firstName,nomEntreprise:dataJson.userInformation.nomEntreprise,
                secteurActivite:dataJson.userInformation.secteurActivite,phone:dataJson.userInformation.phone,
                produit:dataJson.userInformation.produit, chiffreAffaire:dataJson.userInformation.chiffreAffaire,
                rne:dataJson.userInformation.rne, numberRue:dataJson.userInformation.numberRue,
                rue:dataJson.userInformation.rue, adresse:dataJson.userInformation.adresse, ville:dataJson.userInformation.ville,
                codePostal:dataJson.userInformation.codePostal, webSite:dataJson.userInformation.webSite

                })
                setuserDomaine(dataJson.userInformation.webSite)
                //   setuserInformation(dataJson)
               
            }
        }

    const onChangeInfoGeneralUser =(value,key,index)=>{
        let aux ={...infoGen}
        let auxValidation = {...validation}
    
        aux[key]=value
        if(key=="username"){
          if(value.trim()===''){
            auxValidation.error[index]=true
            auxValidation.errorMsg[index]='required'
          }else{
            auxValidation.error[index]=false
            auxValidation.errorMsg[index]=''
          }
        }
        if(key=="nomEntreprise"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="email"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="secteurActivite"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="phone"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="produit"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="rne"){
              console.log("here",value);
            if(!value){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="chiffreAffaire"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="numberRue"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="rue"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="adresse"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="ville"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="codePostal"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          if(key=="webSite"){
            if(value.trim()===''){
                auxValidation.error[index]=true
                auxValidation.errorMsg[index]='required'
            }else{
                auxValidation.error[index]=false
                auxValidation.errorMsg[index]=''
            }
          }
          setInfoGen(aux)
          setValidation(auxValidation)
          console.log(aux);
          console.log(auxValidation);
    }
    const defaultFile=
     [
        {
          uid: '0',
          name:infoGen && infoGen.rne ,
          status: 'done',
        },
    ]
    const saveModificationInfoGen =async()=>{
        const ERROR = [...validation.error]
        const ERROR_MSG=[...validation.errorMsg]
        setinfoGenError(ERROR)
        setinfoGenErrorMsg(ERROR_MSG)
        if(!ERROR.includes(true)){
            let formdata =new FormData()
            formdata.append('phone',infoGen.phone)
            formdata.append('adresse',infoGen.adresse)
            formdata.append('numerRue',infoGen.numberRue)
            formdata.append('rue',infoGen.rue)
            formdata.append('ville',infoGen.ville)
            formdata.append('codePostal',infoGen.codePostal)
            formdata.append('nomEntreprise',infoGen.nomEntreprise)
            formdata.append('secteurActivité',infoGen.secteurActivite)
            formdata.append('produit',infoGen.produit)
            formdata.append('chiffreAffaire',infoGen.chiffreAffaire)
            formdata.append('rne',infoGen.rne)
            formdata.append('webSite',infoGen.webSite)
            formdata.append('email',infoGen.email)
            formdata.append('firstName',infoGen.username)
            const requestOptions = {
                method: 'POST',
                body: formdata
              };
              
              const data =  await fetch(apiURL+'/updateUserInformation/'+props.auth.username,requestOptions);
              const dataJson = await data.json();
              if(data.status == 200){ 
                  console.log("yeeeeeeeeeeeeees");
                  setSteps(2)
              }
        }
    }
    
    const propsRne = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            setInfoGen({rne:info.originFileOb})
        },
        }
    
    console.log("infoooo",infoGen);
    /****************************infoGenaral **************/
    

      
        return(
            <Row>
            <div  className="blue-page-user-inforamtion">
                <div className="content-blue-page">
                <Row className={steps && steps == 1?"user-rubrique-selected": "user-rubrique" }>
                   <Col onClick={changeStepsOne}> Infos générales</Col>
                </Row>
                <Row className={steps && steps == 2?"user-rubrique-selected":"user-rubrique" } onClick={changeStepsTwo}>
                    Domaine
                </Row>
                <Row className={steps && steps == 3?"user-rubrique-selected": "user-rubrique"} onClick={changeStepsThree}>
                    Template
                </Row>
                <Row className={steps && steps == 4?"user-rubrique-selected": "user-rubrique"}>
                   <Col onClick={changeStepsFour}>Produit</Col>
                </Row>
                <Row className={steps && steps == 5?"user-rubrique-selected": "user-rubrique"}>
                   <Col onClick={changeStepsFive}>Paiement</Col>
                </Row>
                <Row className={steps && steps == 6?"user-rubrique-selected": "user-rubrique"}>
                   <Col onClick={changeStepsSix}>Livraison</Col>
                </Row>
                </div>
            </div>
            {steps && steps == 1 ? <InfoGeneral getAllUserInformation={getAllUserInformation} userInformation={infoGen}
            onChangeInfoGeneralUser={onChangeInfoGeneralUser} 
            infoGenError={infoGenError} infoGenErrorMsg={infoGenErrorMsg}
            defaultFile={defaultFile}
            propsRne={propsRne}
            saveModificationInfoGen={saveModificationInfoGen}
            />: null}
            {steps && steps == 2 ? <Domaine handleSaveDomaine={handleSaveDomaine} onChangeDomaine={onChangeDomaine} userDomaine={userDomaine}
            userDomaineError={userDomaineError}
            userDomaineErrorMsg={userDomaineErrorMsg}  /> : null}
            {steps && steps == 3 ? <Template /> : null}
            {steps && steps == 4 ? <Product 
            handleChangeCategorie={handleChangeCategorie}
            addFormFields={addFormFields}
            handleChangeProduits={handleChangeProduits}
            addFormFieldsProduct={addFormFieldsProduct}
            onUploadPhoto={onUploadPhoto}
            handleChangeType={handleChangeType}
            handleChangeDescription={handleChangeDescription}
            handleChangePrix={handleChangePrix}
            handleChangeQuantite={handleChangeQuantite}
            handleSaveForm={handleSaveForm}
            /> : null}
            {steps && steps == 5 ? <Paiement onChangePaiement={onChangePaiement} handleSavePaiement={handleSavePaiement} userPaiement={userPaiement}
            getPaimentUser={getPaimentUser} /> : null}
            </Row>
        );
       

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
      
export default connect(mapStateToProps, mapDispatchToProps)(BluePage);