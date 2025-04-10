
import Header from "../components/header/Header";
import MainContent from "../components/main/MainContent";

function Home() {
    return (
        <div>
            <section id="header" className="min-h-screen pt-20 snap-start">
                <Header />
            </section>
            <section id="mainContent" className="min-h-screen pt-20 snap-start">
                <MainContent />
            </section>
        </div >
    );
}

export default Home


