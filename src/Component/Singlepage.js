import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  
} from "react-bootstrap";
export default () => {
  const localStorageFunction = () =>   
     {
      localStorage.setItem('name','1231322')
      localStorage.setItem('age','1322')
      alert(localStorage.getItem('name'))
     }


     const localStorageRemoveFunction = () =>{
      localStorage.removeItem('name')
      localStorage.clear();      
     }
   
   const localStorageObject = () =>{
    var testObject = { 'one': 1, 'two': 2, 'three': 3 };
   }
  return (
  
    <div class="container">
      <div class="dropdown drop">
      
      <Nav className="md-auto ">
    <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
    <Nav.Link href="#Home Page">Home Page</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
          <NavDropdown title="Left dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Any Page</NavDropdown.Item>
            <NavDropdown.Item href="#">Second Level</NavDropdown.Item>

            <NavDropdown title="Another Page" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Anther Page</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Any Page
              </NavDropdown.Item>

              <NavDropdown title="Third Level" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Any Page</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another Page
            </NavDropdown.Item>
            
            </NavDropdown>
          </NavDropdown>
          </NavDropdown>
          
          <NavDropdown title="Left dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Any Page</NavDropdown.Item>
            <NavDropdown.Item href="#">Second Level</NavDropdown.Item>
            
            
           
            <NavDropdown title="Another Page" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Anther Page</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Any Page
              </NavDropdown.Item>
              
              
          
              <NavDropdown title="Third Level" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Any Page</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another Page
            </NavDropdown.Item>
            
            </NavDropdown>
          </NavDropdown>
          </NavDropdown>
          <Nav.Link href="#home">Home</Nav.Link>
         
          <NavDropdown title="Left dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Any Page</NavDropdown.Item>
            <NavDropdown.Item href="#">Second Level</NavDropdown.Item>
            
            
           
            <NavDropdown title="Another Page" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Anther Page</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Any Page
              </NavDropdown.Item>
              
              
          
              <NavDropdown title="Third Level" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Any Page</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another Page
            </NavDropdown.Item>
            
            </NavDropdown>
          </NavDropdown>
          </NavDropdown>
          
          

      </Navbar.Collapse>
    </Navbar>
                            
    </Nav>
    </div>
    </div>
  
  
  );
};

