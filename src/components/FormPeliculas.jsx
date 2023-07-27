import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormPeliculas = () => {
  const [formValue, setformValue] = useState({
    id: null,
    nombrePeli: "",
    descripcionPeli: "",
    categoriaPeli: "",
  });

  let { id, nombrePeli, descripcionPeli, categoriaPeli } = formValue;

  const handleChange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-11 col-lg-8 bg-light p-3">
          <Form>
            <Form.Group className="mb-3" controlId="nombrePeli">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre pelicula..."
                name="nombrePeli"
                value={nombrePeli}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descripcionPeli">
              <Form.Label>Descripcíon</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción de la pelicula..."
                name="descripcionPeli"
                value={descripcionPeli}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="categoriaPeli">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                name="categoriaPeli"
                value={categoriaPeli}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Selecciona una categoría
                </option>
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
