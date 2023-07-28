import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";
import Swal from "sweetalert2";

const FormPeliculas = () => {
  const [formValue, setformValue] = useState({
    nombrePeli: "",
    descripcionPeli: "",
    categoriaPeli: "",
  });

  let peliculasLocalStorage =
    JSON.parse(localStorage.getItem("peliculas")) || [];

  const [listaPeliculas, setListaPeliculas] = useState(peliculasLocalStorage);

  let { nombrePeli, descripcionPeli, categoriaPeli } = formValue;

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(listaPeliculas));
  }, [listaPeliculas]);

  const handleChange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const crearPelicula = (data) => {
    let peliculaEncontrada = listaPeliculas.find(
      (pelicula) => pelicula.nombrePeli.trim() === data.nombrePeli.trim()
    );

    if (peliculaEncontrada) {
      Swal.fire({
        icon: "error",
        title: "<h5>Esta pelicula ya existe en la lista</h5>",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "<h4>Pelicula agregada</h4>",
        showConfirmButton: false,
        timer: 1500,
      });
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
      Swal.fire({
        icon: "error",
        title: "<h5>Debes de llenar todos los campos</h5>",
      });
    } else {
      crearPelicula(formValue);
    }
  };

  const eliminarPelicula = (peliculaBorrar) => {
    let peliculasFiltradas = listaPeliculas.filter(
      (pelicula) => pelicula.nombrePeli !== peliculaBorrar.nombrePeli
    );
    setListaPeliculas(peliculasFiltradas);
  };

  return (
    <>
      <section className="container my-4">
        <div className="row justify-content-center">
          <div className="col-11 col-xl-8 shadow p-3">
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

      {listaPeliculas.length === 0 ? (
        <h3 className="text-center my-3">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Film%20Projector.png"
            alt="Film Projector"
            className="iconFilmProjector mx-2"
          />
          Aún no hay peliculas
        </h3>
      ) : (
        <ListaPeliculas
          listaPeliculas={listaPeliculas}
          eliminarPelicula={eliminarPelicula}
        />
      )}
    </>
  );
};

export default FormPeliculas;
