const CardPelicula = ({ pelicula, eliminarPelicula }) => {
  return (
    <article className="col">
      <div className="card shadow h-100">
        <div className="card-header">
          <h6 className="card-title text-center">{pelicula.nombrePeli}</h6>
        </div>
        <div className="card-body">
          <p>
            Categoria:{" "}
            <span className="badge text-bg-primary">
              {pelicula.categoriaPeli}
            </span>
          </p>
          <p className="card-text">{pelicula.descripcionPeli}</p>
        </div>
        <div className="card-footer d-grid">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => eliminarPelicula(pelicula)}
          >
            Borrar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardPelicula;
