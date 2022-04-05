import { requests } from './api/request';
import './App.css';
import { Row } from './components/Row/Row';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGUINALS" fetchUrl={requests.feachNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
