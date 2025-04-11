
import BackgroundVideo from './components/background/BackgroundVideo';
import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';
//import Home from './pages/Home';
import './styles/app.css';
import TextTesting from './components/testing/TextTesting';
import CountdownComponentV1 from './components/countdown/CountdownComponentV1';
import CountdownComponentV2 from './components/countdown/CountdownComponentV2';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Background Video */}
      <BackgroundVideo videoSrc={backgroundVideo} />

      <main className="relative w-full h-full ">

        <section className="p-4">
          <TextTesting />
        </section>

        <section className="p-4">
          <CountdownComponentV2 />
        </section>

        <section className="p-4">
          <CountdownComponentV1 />
        </section>



      </main>
    </div>
  );
}

export default App;
