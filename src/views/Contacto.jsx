import { Container } from "react-bootstrap";

export default () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Cuéntanos, ¿en qué te podemos ayudar?
            </h1>
            <form action="">    
                <div className="label">Correo:</div>
                <input type="text" placeholder="name@example.com" />
                <div className="label">Descripción</div>
                <textarea id="pregunta" type="text" placeholder="Escribe aquí tu consulta y/o petición" />
            </form>
            <button type="button" class="btn btn-danger">Enviar</button>
        </Container>

    );
};