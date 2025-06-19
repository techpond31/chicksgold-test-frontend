import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/header.css";
import "../styles/footer.css";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="temp-content">
          <h1>Main Content Area</h1>
          <p>
            This is where the product grid will go. Header and Footer are now
            complete!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
