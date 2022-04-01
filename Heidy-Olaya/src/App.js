import { Component } from 'react';
import data from './components/data.json';
function App() {
  return (
    <div className="App">
      <History />
    </div>
  );
}



class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numHistory: "1",
      cont: 0,
      guardarDato: "",
      historialArray: []
    };
  };

  handleClick = (e) => {
    const id = e.target.id;
    let contador = this.state.cont;
    let numLetra = 1;
    numLetra = numLetra + 1;
    this.state.historialArray.push(id);
    
    if (contador >= 7) {
      alert('esto ya termino');
      this.setState({
        numHistory: "1",
        cont: 0,
        guardarDato: "",
        historialArray:[]
      });
    } else if (contador === 0) {
      id === "a" ? contador = contador + 1 : contador = contador + 2;

      //cambio el state por los nuevos valores
      this.setState({
        numHistory: numLetra + id,
        cont: contador,
        guardarDato: id
      });

    } else if (this.state.numHistory == numLetra + "a") {
      id === "a" ? contador = contador + 2 : contador = contador + 3;

      //cambio el state por los nuevos valores
      this.setState({
        numHistory: numLetra + id,
        cont: contador,
        guardarDato: id
      });

    } else {
      id === "a" ? contador = contador + 1 : contador = contador + 2;

      //cambio el state por los nuevos valores
      this.setState({
        numHistory: numLetra + id,
        cont: contador,
        guardarDato: id
      });
    };
  };

  render() {
    return (
      <div className="layout">
        <h1 className='historia'>{data[this.state.cont].historia}</h1>
        <div className='opciones'>
          <div className='opcion'>
            <button id='a' className='botones' onClick={this.handleClick}>A</button>
            <h2>{data[this.state.cont].opciones.a}</h2>
          </div>
          <div className='opcion'>
            <button id='b' className='botones' onClick={this.handleClick}>B</button>
            <h2>{data[this.state.cont].opciones.b}</h2>
          </div>
        </div>
        <div className='recordatorio'>
          <h3>Seleccionado anteriormente: {this.state.guardarDato}</h3>
          <h4>Historial de opciones elegidas</h4>
          <ul>
            {this.state.historialArray.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
