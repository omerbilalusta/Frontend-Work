import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import Navi from "../loginLogout/navi"

export default class SignUp extends Component {
  render() {
    return (

      <div>
        <Navi></Navi>
        <Row>
          <Col xs="12">
            <Form>


              <FormGroup row>
                <Label for="Name" sm={2}>İsim</Label>
                <Col sm={10}>
                  <Input id="idName" name="name" placeholder="İsim" type="text" required />
                </Col>
              </FormGroup>


              <FormGroup row>
                <Label for="Surname" sm={2}>Soyad</Label>
                <Col sm={10}>
                  <Input id="idSurname" name="surname" placeholder="Soyad" type="text" required />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Username" sm={2}>Username</Label>
                <Col sm={10}>
                  <Input id="idUsername" name="username" placeholder="Kullanıcı Adı" type="text" required />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Date" sm={2}>Doğum Tarihi</Label>
                <Col sm={10}>
                  <Input id="idDate" name="date" placeholder="date placeholder" type="date" required />
                </Col>
              </FormGroup>


              <FormGroup row>
                <Label for="Email" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input id="idEmail" name="email" placeholder="Email" type="email" required />
                </Col>
              </FormGroup>


              <FormGroup row>
                <Label for="Password" sm={2}>Şifre</Label>
                <Col sm={10}>
                  <Input id="idPassword" name="password" placeholder="Şifre" type="password" required />
                </Col>
              </FormGroup>


              <FormGroup row tag="fieldset" >
                <legend className="col-form-label col-sm-2"> Cinsiyet </legend>

                <Col sm={10}>

                  <FormGroup check>
                    <Input name="radio2" type="radio" /> {' '}
                    <Label check> Erkek </Label>
                  </FormGroup>

                  <FormGroup check>
                    <Input name="radio2" type="radio" />{' '}
                    <Label check> Kız </Label>
                  </FormGroup>

                </Col>
              </FormGroup>

              <FormGroup check row>
                <Col sm={{ offset: 2, size: 10 }} >
                  <Button><Link to="/home">Submit</Link></Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}