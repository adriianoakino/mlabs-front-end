import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import * as _ from 'lodash';
import { blue } from 'ansi-colors';
import { MdHelpOutline } from "react-icons/md";
export default class Widget extends Component {
    

    constructor(props){
        super(props);
        this.divStyle = {
            color: 'blue',
            background: blue,
        };
    }

    renderPlatformToConnect = () => {
        return (
            <>
                <div className = "grid-item">
                    <div className = "grid-img">
                        <img className = "icon" src = { this.props.url } alt="" title="" />
                        <div className = "badge-help"><h4> <MdHelpOutline /> </h4></div>
                    </div>
                    <h3> { _.toUpper(this.props.name) } </h3>
                    <div className = "button-align" >
                        <button onClick = { this.props.onClick } name = { this.props.name } > Adicionar </button>
                    </div>
                </div>
            </>
        );
    }
    
    renderPlatformLogged = () => {
        return (
            <>
                <div className = {`grid-item logged`} style = {{background: `${this.props.color}`}}>
                    <Row className = "logged-header"> <span>{ this.props.logged.name }</span></Row>
                    <img  src = { this.props.iconLogged }></img>
                </div>
            </>
        );
    }

    render = () => {
        return (
            <> 
                {
                    this.props.logged ? this.renderPlatformLogged() : this.renderPlatformToConnect()
                }
            </>
        );
    }
}

