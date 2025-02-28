import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";

export const Contacts = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listContacts)
    const eliminarContacto = (id) => {
        // Llamar al action que borra el contacto enviando como parametro el id
        actions.deleteContact(id)
    }

    return (
        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add a new contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.length > 0 && store.listContacts.map((contact, index) => {
                    return (
                        <li key={contact.id} className="list-group-item d-flex justify-content-center">
                            <div className="d-flex align-items-center w-75">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <img
                                        className="rounded-circle"
                                        src="https://picsum.photos/170/170/"
                                        alt="Contact"

                                    />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-title mb-1">{contact.name}</h5>
                                    <p className="card-text mb-1">{contact.address}</p>
                                    <p className="card-text mb-1">{contact.phone}</p>
                                    <p className="card-text mb-1">{contact.email}</p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-end">
                                    <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                                        <i className="fa fa-eraser"></i>
                                    </Link>
                                    <button type="button"  onClick={() => eliminarContacto(contact.id)}>
                                        <i className="fa fa-trash fa-lg"></i>
                                    </button>
                                   
                                   
                                    
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};