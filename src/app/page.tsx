import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/main-content.css";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
