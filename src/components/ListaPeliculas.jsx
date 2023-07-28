import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ listaPeliculas, eliminarPelicula }) => {
  return (
    <section className="container bg-white my-5">
      <h3 className="text-center my-3">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Film%20Frames.png"
          alt="Film Frames"
          className="iconFilmFrames"
        />
        Lista de peliculas
      </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaPeliculas.map((pelicula) => (
          <CardPelicula
            key={pelicula.nombrePeli}
            pelicula={pelicula}
            eliminarPelicula={eliminarPelicula}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaPeliculas;
