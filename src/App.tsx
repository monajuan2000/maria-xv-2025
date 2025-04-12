
import BackgroundVideo from './components/background/BackgroundVideo';
import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';
//import Home from './pages/Home';
import './styles/app.css';
//import TextTesting from './components/testing/TextTesting';
import Home from './pages/Home';
import LocationGoogleMap from './components/locations/LocationGoogleMap';
import OpenStreetMapLeaflet from './components/locations/OpenStreetMapLeaflet';
import CountdownComponentV2 from './components/countdown/CountdownComponentV2';
import CountdownComponentV1 from './components/countdown/CountdownComponentV1';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Background Video */}
      <BackgroundVideo videoSrc={backgroundVideo} />

      <main className="relative w-full h-full ">

        <section className="p-4">
          <Home />
        </section>

        <section className="p-4">
          <CountdownComponentV2 />
        </section>

        <section className="p-4">
          <CountdownComponentV1 />
        </section>

        <section className="p-4">
          <LocationGoogleMap />
        </section >

        <section className="p-4">
          <OpenStreetMapLeaflet />
        </section>

      </main >
    </div >
  );
}

export default App;
