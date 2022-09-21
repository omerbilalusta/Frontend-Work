import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import Navi from "../loginLogout/navi"
import {Link} from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navi />

        <Form>
          <FormGroup row>
            <Label for="Username" sm={2}> Kullanıcı Adı </Label>
            <Col sm={10}><Input id="idUsername" vname="username" placeholder="Kullanıcı Adınız" type="text" required/></Col>
          </FormGroup>
          {' '}
          <FormGroup row>
            <Label for="Password" sm={2}> Şifre </Label>
            <Col sm={10}><Input id="idPassword" name="password" placeholder="Şifreniz" type="password" required/></Col>
          </FormGroup>
          {' '}
          <Button><Link to="/home">Submit</Link></Button>
        </Form>
      </div>
    )
  }
}
