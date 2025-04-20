import BackgroundVideo from './components/background/BackgroundVideo';
import backgroundVideo from './assets/videos/phone-main-wallpaper2.mp4';
import './styles/app.css';

import Home from './pages/Home';
import LocationGoogleMap from './components/locations/LocationGoogleMap';
import OpenStreetMapLeaflet from './components/locations/OpenStreetMapLeaflet';
import CountdownComponentV2 from './components/countdown/CountdownComponentV2';
import CountdownComponentV1 from './components/countdown/CountdownComponentV1';
import WelcomeCard from './components/main/WelcomeCard';

// function App() {
//   return (
//     <div >

//       <BackgroundVideo videoSrc={backgroundVideo} />

//       <main >
//         {/* Sección 1 - WelcomeCard */}
//         <section >
//           <WelcomeCard />
//         </section>

//         {/* Sección 2 - Home */}
//         <section className="py-100">
//           <Home />
//         </section>

//         <section id="countdown" className="snap-start min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-10">
//           <CountdownComponentV2 />
//           <CountdownComponentV1 />
//         </section>

//         <section id="ubicacion" className="snap-start min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-10">
//           <LocationGoogleMap />
//           <OpenStreetMapLeaflet />
//         </section>
//       </main>

//     </div>
//   );
// }

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <BackgroundVideo videoSrc={backgroundVideo} />

      <main className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory z-10">

        <section className="h-screen snap-start p-4">
          <WelcomeCard />
        </section>

        <section className="h-screen snap-start p-4 py-200">
          <Home />
        </section>

        <section className="h-screen snap-start p-4 py-200">
          <CountdownComponentV1 />
          <CountdownComponentV2 />
        </section>


        <section className="h-screen snap-start p-4">
          <LocationGoogleMap />
          <OpenStreetMapLeaflet />
        </section>

      </main>
    </div>
  );
}


export default App;
