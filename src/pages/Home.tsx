

//import MainContent from "../components/main/MainContent";

import MainContent from "../components/main/MainContent";

function Home() {
    return (
        <div>
            {/* <MainContent /> */}
            <h1 className="text-4xl font-bold text-center text-pink-600">
                Welcome to María Alejandra's XV Birthday!
            </h1>
            <section id="mainContent" className="min-h-screen pt-20 snap-start">
                <MainContent />
            </section>
        </div >
    );
}

export default Home


