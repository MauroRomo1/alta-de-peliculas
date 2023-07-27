import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPeliculas from "./components/FormPeliculas";

function App() {
  return (
    <>
      <header>
        <h4 className="text-center my-3">
          Alta de Películas
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Clapper%20Board.png"
            alt="Clapper Board"
            className="iconClapperBoard"
          />
        </h4>
        <hr />
      </header>
      <main>
        <FormPeliculas />
      </main>
      <footer>
        <hr />
        <h6 className="text-center my-3">
          &copy; todos los derechos reservados
        </h6>
      </footer>
    </>
  );
}

export default App;
