import './App.css';
import Header from './components/Header.js'
import Banner from './components/Banner.js'
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div>
        <Banner></Banner>
      </div>
        <Gallery></Gallery>
        <Footer></Footer>
    </div>
  );
}

export default App;
