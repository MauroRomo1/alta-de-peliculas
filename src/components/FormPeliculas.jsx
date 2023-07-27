import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const FormPeliculas = () => {
  const [formValue, setformValue] = useState({
    nombrePeli: "",
    descripcionPeli: "",
    categoriaPeli: "",
  });

  const [listaPeliculas, setListaPeliculas] = useState([]);

  let { nombrePeli, descripcionPeli, categoriaPeli } = formValue;

  const handleChange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const crearPelicula = (data) => {
    let peliculaEncontrada = listaPeliculas.find(
      (pelicula) => pelicula.nombrePeli === data.nombrePeli
    );

    if (peliculaEncontrada) {
      console.log("Esta pelicula ya existe");
    } else {
      setListaPeliculas([...listaPeliculas, formValue]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombrePeli.trim() === "" ||
      descripcionPeli.trim() === "" ||
      categoriaPeli === ""
    ) {
      console.log("Debe de llenar el formulario");
    } else {
      crearPelicula(formValue);
      console.log(listaPeliculas);
    }
  };

  return (
    <>
      <section className="container my-4">
        <div className="row justify-content-center">
          <div className="col-11 col-xl-8 bg-light p-3">
            <Form onSubmit={handleSubmit}>
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
                  <option value="" defaultValue disabled>
                    Selecciona una categoría
                  </option>
                  <option value="Comedia">Comedia</option>
                  <option value="Drama">Drama</option>
                  <option value="Infantil">Infantil</option>
                </Form.Select>
              </Form.Group>

              <div className="d-grid justify-content-end mb-3">
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <ListaPeliculas listaPeliculas={listaPeliculas} />
    </>
  );
};

export default FormPeliculas;
