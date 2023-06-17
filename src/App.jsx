import { Col, Row, Button, Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

import Post from './post.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" className='mb-3'>
            <Container >
                <Navbar.Brand href="#">
                  <FontAwesomeIcon size='lg'  icon={faShop} style={{color: "#ee2f2f",}} />
                  Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    navbarScroll
                >
                  <Nav.Link href="#home" active >Home</Nav.Link>
                  <Nav.Link href="#man">Man</Nav.Link>
                  <Nav.Link href="#women">Women</Nav.Link>
                  <Nav.Link href="#baby">Baby Collection</Nav.Link>
                  <NavDropdown title="Pages" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#cart">Cart</NavDropdown.Item>
                  <NavDropdown.Item href="#product-details">
                      Product Details
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#product-checkout">
                      Product Checkout
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#login">
                      Login
                  </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} className='mb-3'>
            <Post image="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1080/596049.jpg" title='Adidas' desp="adidas is about more than sportswear and workout clothes. We partner "/>
          </Col>
          <Col xs={12} md={6} lg={3} className='mb-3'>
            <Post title='Nike' desp="Nike delivers innovative products, experiences and services to inspire athletes."/>
          </Col>
          <Col xs={12} md={6} lg={3} className='mb-3'>
            <Post title='Adidas' desp="adidas is about more than sportswear and workout clothes. We partner "/>
          </Col>
          <Col xs={12} md={6} lg={3} className='mb-3'>
            <Post title='Nike' desp="Nike delivers innovative products, experiences and services to inspire athletes."/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

// import React, { useState } from 'react';

// function Post() {
//   const [posts, setPosts] = useState([]);

//   const handleAddPost = () => {
//     const newPost = {
//       karim: "New Post",
//       author: "John Doe",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     };

//     setPosts([...posts, newPost]);
//   };

//   return (
//     <div className="container">
//       {posts.map((post, index) => (
//         <div className="card mb-3" key={index}>
//           <div className="card-body">
//             <h2 className="card-title">{post.karim}</h2>
//             <p className="card-text">Author: {post.author}</p>
//             <p className="card-text">{post.content}</p>
//           </div>
//         </div>
//       ))}
//       <button className="btn btn-primary" onClick={handleAddPost}>Add Post</button>
//     </div>
//   );
// }

// export default Post;
