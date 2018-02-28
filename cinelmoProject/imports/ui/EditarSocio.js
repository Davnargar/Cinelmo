import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Redirect } from 'react-router';

export default class EditarSocio extends Component {

  constructor(props){
    super(props);
    this.state = {
      disabled: true,
      editSuccess: false,
      idsocio: this.props.match.params.idsocio
    }
    this.edit = this.edit.bind(this);
    this.fetch = this.fetch.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePassw = this.changePassw.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeType = this.changeType.bind(this);
    this.fetch(this.state.idsocio);
  }

  fetch(idsocio){
    HTTP.call('GET',
    'http://localhost:8080/Cinelmo-1.0-SNAPSHOT/webresources/com.mycompany.cinelmo.socio/' + idsocio,
     (error, result) => {
      if (!error) {
        this.setState({
          idsocio: result.data.idsocio,
          name: result.data.nombreSocio,
          passw: result.data.contrasena,
          email: result.data.correoelectronico,
          type: result.data.tipo,
          disabled: false
        });
      }
    });
  }

  edit(event){
    event.preventDefault();
    HTTP.call('PUT',
    'http://localhost:8080/Cinelmo-1.0-SNAPSHOT/webresources/com.mycompany.cinelmo.socio/'
    + this.state.idsocio, {
      data: { idsocio: this.state.idsocio, nombreSocio: this.state.name, contrasena: this.state.passw, correoelectronico: this.state.email, tipo: this.state.type}
    }, (error, result) => {
      if (!error) {
        this.setState({
          editSuccess: true
        });
      }
    });
  }

  changeName(event){
    this.setState({
      name: event.target.value
    });
  }

  changePassw(event){
    this.setState({
      passw: event.target.value
    });
  }

  changeEmail(event){
    this.setState({
      email: event.target.value
    });
  }

  changeType(event){
    this.setState({
      type: event.target.value
    });
  }

  showForm(){
    return(
      <form onSubmit={this.edit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" className="form-control" id="name" name="name"
                  value={this.state.name}
                  onChange={this.changeName}/>
        </div>
        <div className="form-group">
          <label htmlFor="passw">Contraseña:</label>
          <input type="password" className="form-control" id="passw" name="passw"
                  value={this.state.passw}
                  onChange={this.changePassw}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" className="form-control" id="email" name="email"
                  value={this.state.email}
                  onChange={this.changeEmail}/>
        </div>
        <div className="form-group">
          <label htmlFor="type">Tipo:</label>
          <input type="text" className="form-control" id="type" name="type"
                  value={this.state.type}
                  onChange={this.changeType}/>
        </div>
        <button type="submit" className="btn btn-primary">Modificar</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          { !this.state.disabled &&
            this.showForm()
          }
        </div>
        { this.state.editSuccess &&
          <Redirect to='/' />
        }
      </div>
    );
  }
}
