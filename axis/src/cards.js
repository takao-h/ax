import React from 'react';
import {
  Grid,
  Row,
  Col,
  Clearfix,
} from 'react-bootstrap'
const Cards = props =>{
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={3}>
         <img src="http://media.gettyimages.com/photos/businesspeople-with-color-samples-picture-id470331588?s=170667a&w=1007" width="90%" />
          <h4>圧倒的な成長を私たちとしよう。</h4>
          <br />
          あたなにしかできないことを実現する為のプロセスを一緒に作りませんか？
          インフルエンサーマーケティングを支えるAI技術を伸ばす精鋭を募集中！！
        </Col>
        <Col sm={6} md={3}>
         <img src="http://media.gettyimages.com/photos/businesspeople-with-color-samples-picture-id470331588?s=170667a&w=1007" width="90%" />
          <h4>地方創生に興味のある学生集まれ。</h4>
          <br />
          学生が当事者意識を持って地方を盛り上げる

        </Col>
        <Clearfix visibleSmBlock>
          <code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code>
        </Clearfix>
        <Col sm={6} md={3}>
         <img src="http://media.gettyimages.com/photos/businesspeople-with-color-samples-picture-id470331588?s=170667a&w=1007" width="90%" />
          <h4>プログラミングに興味のある学生集まれ</h4>
          <br />
          Scalaのウィザード級ハッカーが世界で通じるプログラムを書かせます。
        </Col>
        <Col sm={6} md={3}>
         <img src="http://media.gettyimages.com/photos/businesspeople-with-color-samples-picture-id470331588?s=170667a&w=1007" width="90%" />
          <h4>ビットコインのその先へ</h4>
          <br />
          ブロックチェーン技術を使った電子カルテを作り
          日本の将来の医療を支える人を募集。
        </Col>
      </Row>
    </Grid>
  );
}

export default Cards
