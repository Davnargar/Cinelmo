import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Redirect } from 'react-router';

export default class ListarSocio extends Component {

  constructor(props){
    super(props);
    this.state = {
      socios: [],
      editSelected: false
    }
    this.delete = this.delete.bind(this);
    this.fetch = this.fetch.bind(this);
    this.edit = this.edit.bind(this);

    this.fetch();
  }


  fetch(){
    HTTP.call('GET', 'http://localhost:8080/Cinelmo-1.0-SNAPSHOT/webresources/com.mycompany.cinelmo.socio'
    , (error, result) => {
      if (!error) {
        //JSON.stringify(result);
        this.setState({
          socios: result.data
        });
      }
    });
  }

  delete(idsocio){
    HTTP.call('DELETE', 'http://localhost:8080/Cinelmo-1.0-SNAPSHOT/webresources/com.mycompany.cinelmo.socio/' + idsocio
    , (error, result) => {
      if (!error) {
        //JSON.stringify(result);
        this.fetch();
      }
    });
  }

  edit(idsocio){
    this.setState({
      editSelected: true,
      idsocio: idsocio
    });
  }

  showSocio(){
    return this.state.socios.map((socio) => (
        <tr key={socio.idsocio}>
          <td>{socio.nombreSocio}</td><td>{socio.correoelectronico}</td><td>{socio.tipo}</td>
          <td>
            <button className="btn btn-danger" onClick={() => this.delete(socio.idsocio)}>
              <span className="glyphicon glyphicon-trash"></span>
            </button>
            <button className="btn btn-info" onClick={() => this.edit(socio.idsocio)}>
              <span className="glyphicon glyphicon-edit"></span>
            </button>
          </td>
        </tr>
    ));
  }

  render() {
    return (
      <div>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nombre</th><th>Correo</th><th>Tipo</th><th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.showSocio()}
            </tbody>
          </table>
        </div>
        { this.state.editSelected &&
          <Redirect to={"/edit/" + this.state.idsocio} />
        }
      </div>
    );
  }
}
