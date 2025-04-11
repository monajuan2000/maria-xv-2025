import backgroundVideo from './assets/videos/PC-main-wallpaper-1.mp4';
import Home from './pages/Home';
import './styles/app.css';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-105"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support HTML5 videos.
      </video>

      <main className="relative z-10 w-full h-full overflow-y-auto">
        {/* Top Navigation */}


        {/* Dynamic Sections */}
        <section className="p-4">
          <div >
            <header className="w-full p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">Main Page Title</h1>
              <nav className="flex space-x-4">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Services</a>
                <a href="#" className="hover:underline">Contact</a>
              </nav>
            </header>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded"><Home /></div>
            <div className="bg-white/70 p-4 rounded shadow">Item 2</div>
            <div className="bg-white/70 p-4 rounded shadow">Item 3</div>
          </div>
        </section>
        {/* 
        <section className="p-4">
          <div className="bg-blue-600 text-white text-lg font-semibold px-4 py-2 rounded shadow mb-4">
            Section 2 Title
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/70 p-4 rounded shadow">Item A</div>
            <div className="bg-white/70 p-4 rounded shadow">Item B</div>
          </div>
        </section>

        <section className="p-4">
          <div className="bg-green-600 text-white text-lg font-semibold px-4 py-2 rounded shadow mb-4">
            Section 3 Title
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/70 p-4 rounded shadow">Content 1</div>
            <div className="bg-white/70 p-4 rounded shadow">Content 2</div>
            <div className="bg-white/70 p-4 rounded shadow">Content 3</div>
            <div className="bg-white/70 p-4 rounded shadow">Content 4</div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
