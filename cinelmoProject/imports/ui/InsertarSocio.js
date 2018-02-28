import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Redirect } from 'react-router';

export default class InsertarSocio extends Component {

  constructor(props){
    super(props);
    this.state = {
      insertSuccess: false
    }
    this.insert = this.insert.bind(this);
  }


  insert(event){
    event.preventDefault();
    var formInsert = event.target;
    HTTP.call('POST', 'http://localhost:8080/Cinelmo-1.0-SNAPSHOT/webresources/com.mycompany.cinelmo.socio/', {
      data: { nombreSocio: formInsert.name.value, contrasena: formInsert.passw.value, correoelectronico: formInsert.email.value, tipo: formInsert.type.value}
    }, (error, result) => {
      if (!error) {
        this.setState({
          insertSuccess: true
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.insert}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="passw">Contraseña:</label>
              <input type="password" className="form-control" id="passw" name="passw" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Tipo:</label>
              <input type="text" className="form-control" id="type" name="type" />
            </div>
            <button type="submit" className="btn btn-primary">Insertar</button>
          </form>
        </div>
        { this.state.insertSuccess &&
          <Redirect to='/' />
        }
      </div>
    );
  }
}
