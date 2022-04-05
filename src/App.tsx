import { requests } from './api/request';
import './App.css';
import { Row } from './components/Row/Row';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGUINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
