import React from "react";

const News = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Container>
          <Row>
            <Col lg={9}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightNav></RightNav>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default News;
