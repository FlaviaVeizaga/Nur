import React from 'react'
import { Col } from 'react-bootstrap'
import logo from '../img/logonur.png'

export default class Header extends React.Component {

    render() {
        return (

            <Col style={{ backgroundColor: 'none', textAlign:'left'}}>
                <img style={{ maxHeight: '90px', backgroundColor: 'none' }} src={logo}
                    alt='logo nur' />
            </Col>

        )
    }
}
