import { Navbar,Nav,NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";
import useAuth from "../auth/useAuth";
export default function Navigation(){
    const{ logout}= useAuth();
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark"bg="dark">
           <Navbar.Brand style={{ padding: "10px" }}>
             <Nav.Link as={NavLink} to={routes.home} > Bienestar CECAR</Nav.Link> 
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
           <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={routes.monitorias}>Monitoria</Nav.Link> 
                         <Nav.Link as={NavLink} to={routes.escuelas_de_formacion}>Escuelas De Formacion</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.atencion_medica}>Atencion Medica</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.atencion_psicologica}>Atencion Psicologica</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.seguimiento_tae}>Seguimiento TAE</Nav.Link>
                    <NavDropdown title="admin">
                        <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="ms-auto"style={{ marginRight: "25px" }}>
                   
                        <Nav.Link as={NavLink} to={routes.login} className="me-2">Iniciar Sesión</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.register} className="me-2">Registrarse</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.account} className="me-2">Mi Cuenta</Nav.Link>
                        <Nav.Link onClick={logout}>Cerrar Sesión</Nav.Link>
                    
                </Nav>
           </Navbar.Collapse>
        </Navbar>
    )
}