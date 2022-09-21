import React, { Component } from 'react'
import Navi from "../mainPage/mainPageNavi"
import { Row, Col, Button, Badge, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { Link } from "react-router-dom"


export default class main extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Row>
                    <Col xs="6">
                        <br />
                        <br />
                        <br />
                        <br />
                        <Toast name="toast" isOpen={true}>
                            <ToastHeader toggle={function noRefCheck() { }}> Giriş Yap</ToastHeader>
                            <ToastBody>
                                Markete <Link to="/login"><strong>giriş</strong></Link>  yapmak için buraya tıklayınız
                            </ToastBody>
                        </Toast>
                    </Col>
                    <Col xs="6">
                        <br />
                        <br />
                        <br />
                        <br />
                        <Toast name="toast" isOpen={true}>
                            <ToastHeader toggle={function noRefCheck() { }}> Kayıt Ol </ToastHeader>
                            <ToastBody>
                                Markete <Link to="/signup"><strong>kayıt</strong></Link> olmak için buraya tıklayınız
                            </ToastBody>
                        </Toast>
                    </Col>
                </Row>
            </div>
        )
    }
}