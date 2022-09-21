import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";
import Navi from "../navi/Navi";

export default class Dashbord extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </div>
    )
  }
}
