/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.cinelmo;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author AlumnoTarde
 */
@Entity
@Table(name = "socio")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Socio.findAll", query = "SELECT s FROM Socio s")
    , @NamedQuery(name = "Socio.findByIdsocio", query = "SELECT s FROM Socio s WHERE s.idsocio = :idsocio")
    , @NamedQuery(name = "Socio.findByNombreSocio", query = "SELECT s FROM Socio s WHERE s.nombreSocio = :nombreSocio")
    , @NamedQuery(name = "Socio.findByContrasena", query = "SELECT s FROM Socio s WHERE s.contrasena = :contrasena")
    , @NamedQuery(name = "Socio.findByCorreoelectronico", query = "SELECT s FROM Socio s WHERE s.correoelectronico = :correoelectronico")
    , @NamedQuery(name = "Socio.findByTipo", query = "SELECT s FROM Socio s WHERE s.tipo = :tipo")})
public class Socio implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idsocio")
    private Integer idsocio;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "nombreSocio")
    private String nombreSocio;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "contrasena")
    private String contrasena;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "correoelectronico")
    private String correoelectronico;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "tipo")
    private String tipo;

    public Socio() {
    }

    public Socio(Integer idsocio) {
        this.idsocio = idsocio;
    }

    public Socio(Integer idsocio, String nombreSocio, String contrasena, String correoelectronico, String tipo) {
        this.idsocio = idsocio;
        this.nombreSocio = nombreSocio;
        this.contrasena = contrasena;
        this.correoelectronico = correoelectronico;
        this.tipo = tipo;
    }

    public Integer getIdsocio() {
        return idsocio;
    }

    public void setIdsocio(Integer idsocio) {
        this.idsocio = idsocio;
    }

    public String getNombreSocio() {
        return nombreSocio;
    }

    public void setNombreSocio(String nombreSocio) {
        this.nombreSocio = nombreSocio;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getCorreoelectronico() {
        return correoelectronico;
    }

    public void setCorreoelectronico(String correoelectronico) {
        this.correoelectronico = correoelectronico;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idsocio != null ? idsocio.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Socio)) {
            return false;
        }
        Socio other = (Socio) object;
        if ((this.idsocio == null && other.idsocio != null) || (this.idsocio != null && !this.idsocio.equals(other.idsocio))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.cinelmo.Socio[ idsocio=" + idsocio + " ]";
    }
    
}
