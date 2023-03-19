import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar className="barra" bg="dark" variant="dark">
                <Container className="justify-content-space-between">
                    <div>
                        <Link to="/" className="text-white ms-3 text-decoration-none">
                            🏠 Home
                        </Link>
                        <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
                            📒 Contacto
                        </Link>
                    </div>
                    <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
