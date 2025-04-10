import './styles/App.css';
import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';
// import Home from './pages/Home';

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-heading">Bienvenido a mi sitio web</h1>
          <p className="hero-text">
            Aquí puedes colocar cualquier contenido entre el Header y el Footer. Puedes incluir secciones de presentación, productos, servicios o lo que quieras destacar.
          </p>
        </section>

        {/* <Home /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
