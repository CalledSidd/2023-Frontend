import './App.css';
import PropTypes, { object } from "prop-types"
import pokemon from './pokemon.json'
import React from 'react';


const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button
      onClick={()=>{onSelect(pokemon)}}
      >Select !</button>
    </td>
  </tr>
);


PokemonRow.propTypes = {
  pokemon : PropTypes.shape({
    name : PropTypes.shape({
      english : PropTypes.string.isRequired,
    }),
    type : PropTypes.arrayOf(PropTypes.string.isRequired)
  }),
  onSelect : PropTypes.func.isRequired, 
}


const PokemonInfo = ({name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {
        Object.keys(base).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))
      }
    </table>
  </div>
)

PokemonInfo.propTypes = {
  name : PropTypes.shape({
    english : PropTypes.string,
  }),
  base : PropTypes.shape({
    HP : PropTypes.number.isRequired,
    Attack : PropTypes.number.isRequired,
    Defense : PropTypes.number.isRequired,
    "SP. Attack" : PropTypes.number.isRequired,
    "SP. Defense" : PropTypes.number.isRequired,
    Speed : PropTypes.number.isRequired,
    
  })
}


function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null)
  const [pokemon, pokemonSet] = React.useState([])
  return (
    <div className="App"
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: "1rem"
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <input 
       value={filter}
       onChange={(event)=>{filterSet(event.target.value)}}
      />
      <div 
      style={{
        display : 'grid',
        gridTemplateColumns: "70% 30%",
        gridColumnGap: "1rem"
      }}
      >
        <div>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon
          .filter((pokemon) => pokemon.name.english.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
          .slice(0, 20).map((pokemon) => (
          <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => {selectedItemSet(pokemon)}} />
          )
          )}
        </tbody>
      </table>
      </div>
      {
        selectedItem && <PokemonInfo {...selectedItem} />
      }
      </div>
    </div>
  );
}

export default App;
