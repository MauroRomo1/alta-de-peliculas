const ListaPeliculas = ({ listaPeliculas }) => {
  return (
    <section className="container bg-white my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaPeliculas.map((pelicula) => (
          <article className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">
                  {pelicula.nombrePeli}
                </h5>
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
        ))}
      </div>
    </section>
  );
};

export default ListaPeliculas;
