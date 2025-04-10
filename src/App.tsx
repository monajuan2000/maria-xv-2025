import './App.css'
import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      {/* Contenido de tu aplicación */}
    </div>
  );
}


export default App
