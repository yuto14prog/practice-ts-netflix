import { requests } from './api/request';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Nav } from './components/Nav/Nav';
import { Row } from './components/Row/Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGUINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
