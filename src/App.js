
import MyComponents from './Components/MyComponents';
import { Jumbotron, Button } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className ="hero">
        <Jumbotron>
          <h1 className="Header">Selamat Datang, di Jual Barang Elektronik</h1>
          <p>Web ini adalah web penjualan barang elektronik</p>
          <Button variant="primary">Go</Button>
        </Jumbotron>
      </div>
        <MyComponents />

    </div>
    
  );
}

export default App;
