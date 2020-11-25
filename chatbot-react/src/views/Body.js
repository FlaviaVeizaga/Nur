import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default class Body extends Component {
    render() {
        return (
            <div>

                <Form >
                    <Row>
                        <Col>

                        </Col>

                        <Col>
                            <Row>
                                <Col sm={10}>
                                    <Form.Control type='text' value='buscar...'>

                                    </Form.Control>
                                </Col>
                                <Col sm={2}>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>

            </div>
        )
    }
}
