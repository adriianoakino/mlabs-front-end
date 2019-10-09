import React from 'react';
import { Media, Row, Col } from 'react-bootstrap';

import './List.css'


export default props => (
    <>
        <ul id = "listPages">
            { props.list && props.list.map((item, index) => 
                <li key = { index }>
                    <Media>
                        <img 
                            src     = { item.picture }
                            width   = { 64 }
                            height  = { 64 }
                        /> 
                        <Media.Body>
                            <Row>
                                <Col sm = { 10 } >
                                    <p className = "title"      > { item.name } </p>
                                    <p className = "description"> { item.url  }</p>
                                </Col>
                                <Col sm = { 2 } className = "align-right" >
                                    <input type = { 'radio' } id = { index } name = { item.channel_key } value = { index } onClick = { props.change } />
                                </Col>
                            </Row>
                        </Media.Body> 
                    </Media>
                </li>
            )}
        </ul>
    </>
);