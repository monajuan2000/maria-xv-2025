
import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';
import Home from './pages/Home';
import './styles/app.css';

function App() {
  return (
    <div >
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      <main className="centered-content">
        <section >
          {/* <h1 >Bienvenido a mi sitio web</h1>
          <p >
            Aquí puedes colocar cualquier contenido entre el Header y el Footer. Puedes incluir secciones de presentación, productos, servicios o lo que quieras destacar.
          </p> */}
        </section>

        <Home />
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
