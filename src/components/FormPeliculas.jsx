import { Button, Form } from "react-bootstrap";

const FormPeliculas = () => {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-11 col-lg-8 bg-light p-3">
          <Form>
            <Form.Group className="mb-3" controlId="nombrePeli">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Nombre pelicula..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descripcionPeli">
              <Form.Label>Descripcíon</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción de la pelicula..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Select>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="infantil">Infantil</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormPeliculas;
