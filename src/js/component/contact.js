import React, { useContext, Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

const Contact = ({item,index}) =>{
    
    const { store, actions } = useContext(Context);
    const deleteContact = (contact_id) => {

        fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`,{ 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
              },
            }
        )
        .then(resp => {
            if (resp.status >= 200 && resp.status < 300){
                console.log("El request se hizo bien");
                return (resp.json());
            }else{
                console.log(`Hubo un error ${resp.status} en el request`);
            }
            // El problema esta aqui, estoy eliminando todo el contenido del store.contacts en vez de solo el que quiero
            store.contacts = store.filter((c,id) => id != contact_id)
            return(resp.json());
        })  
        .then(data => {
            if(data.ok){
            console.log('Contacto eliminado');
            }else{
                console.log("Error in deletion")
            }
        })
        .catch(error => {
            //manejo de errores
            console.error(error);
            console.log('F')
        });
    }


    return(
        <div className="container-fluid mx-12">
            <div className="row mx-5 border border-dark border-opacity-25">
                {/* <div className="col-1"></div> */}
                <div className="col-3 ms-5 rounded-circle"><img src={rigoImage} className="rounded-5" style={{height:"auto"}}/></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-md-8 py-3">Name:{' '}{item.full_name}</div>
                        <div className="col-6 col-md-2 my-2 ms-5 me-0 text-end">
                            <a className=" m-2 fs-5 link-dark" href="/demo"><i className=" fa fa-light fa-pen"/> </a>
                            <a className=" m-2 fs-5 link-dark" onClick={deleteContact(item.id)}><i className="fa fa-regular fa-trash"/></a>                      
                        </div>
                        <p>Address:{' '}{item.address}</p>
                        <p>Phone:{' '}{item.phone}</p>
                        <p>Email:{' '}{item.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;