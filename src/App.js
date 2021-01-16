import logo from './logo.svg';
import './App.css';
import Header from "./Components/HeaderComponent/Header";
import Section from "./Components/SectionComponent/Section";
import InfoComponent from "./Components/SectionComponent/InfoComponent/InfoComponent";
import Footer from "./Components/FooterComponent/Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <section>
        <Section/>
        <InfoComponent/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
