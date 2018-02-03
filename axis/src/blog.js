import React from 'react';
import {
  Grid,
  Row,
  Col,
  Clearfix,
} from 'react-bootstrap'
const Blog = props =>{
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={3}>
         <img src="https://sozai-good.com/uploads/12986/12986_sample.png" width="90%"/>
          <p>インターンを通じてかわった私の変化</p>
          <br />
          留年危機の私が自分を変えて独立に至ったストーリー

        </Col>
        <Col sm={6} md={3}>
          <img src="https://sozai-good.com/uploads/12986/12986_sample.png" width="90%"/>
          <p>インターンを通じてかわった私の変化</p>
          <br />
          留年危機の私が自分を変えて独立に至ったストーリー

        </Col>
        <Clearfix visibleSmBlock>
          <code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code>
        </Clearfix>
        <Col sm={6} md={3}>
          <img src="https://sozai-good.com/uploads/12986/12986_sample.png" width="90%"/>
          <p>インターンを通じてかわった私の変化</p>
          <br />
          留年危機の私が自分を変えて独立に至ったストーリー

        </Col>
        <Col sm={6} md={3}>
          <img src="https://sozai-good.com/uploads/12986/12986_sample.png" width="90%"/>
          <p>インターンを通じてかわった私の変化</p>
          <br />
          留年危機の私が自分を変えて独立に至ったストーリー

        </Col>
      </Row>
    </Grid>
  );
}

export default Blog
