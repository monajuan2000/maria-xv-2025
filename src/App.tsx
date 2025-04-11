
import BackgroundVideo from './components/background/BackgroundVideo';
import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';
//import Home from './pages/Home';
import './styles/app.css';
import TextTesting from './components/testing/TextTesting';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Background Video */}
      <BackgroundVideo videoSrc={backgroundVideo} />

      <main className="relative w-full h-full ">

        <section className="p-4">
          <TextTesting />
        </section>



      </main>
    </div>
  );
}

export default App;
