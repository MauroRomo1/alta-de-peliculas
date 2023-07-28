const CardPelicula = ({ pelicula }) => {
  return (
    <article className="col">
      <div className="card h-100">
        <div className="card-header">
          <h5 className="card-title text-center">{pelicula.nombrePeli}</h5>
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
          <button className="btn btn-danger">Borrar</button>
        </div>
      </div>
    </article>
  );
};

export default CardPelicula;
