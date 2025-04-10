import './styles/App.css'
import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      <div className="text-4xl text-blue-700 font-bold underline">
        ¡Tailwind funciona perfectamente!
      </div>
    </div>
  );
}


export default App
