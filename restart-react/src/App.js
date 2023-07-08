import './App.css';
import pokemon from './pokemon.json'

function App() {
  return (
    <div className="App" 
    style={{
        margin: 'auto',
        width: 800,
        paddingTop: "1rem"
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pokemon, index) => (
          <tr key={index}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
          </tr>
          )
          )}
        </tbody>
      </table>

    </div>
  );
}

export default App;
