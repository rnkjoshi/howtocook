import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./component/Recipe"
import TextField from "@material-ui/core/TextField"
  
const API_ID = "a507caa9"
const API_KEY = "41a281bfab0e8037bcc4e2e32fd71c31	"
function App() {

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query,setQuery] = useState('chocolate cake');
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    getRecipe();
  },[query]);

  const getRecipe = async () =>{
    setLoading(true);
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await res.json();
    setLoading(false)
    console.log(data.hits);
    setRecipe(data.hits);
  }
  return (
    <div className="App">
      <form className="search-form">
      {/* <InputLabel variant="filled">Enter Food Name</InputLabel> */}
        <TextField className="search-bar" variant="outlined" label="Search Recipe..." color = "primary" margin = "dense" type ="search"onChange={e=>setSearch(e.target.value)}/>
        <button className="search-button" type="submit"
          onClick={e =>{e.preventDefault(); setQuery(search); setSearch('')}}>
          Search
        </button>
      </form>

      <div className="recipes">
      {
      (!loading)?
      recipe.map((rec,id) => (
        <Recipe
            key = {id}
            title={rec.recipe.label}
            calories={rec.recipe.calories}
            image={rec.recipe.image}
            ingredients = {rec.recipe.ingredients}
            rest = {rec.recipe}
        />
      )):<i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>}
      </div>
      <center>
        <p>designed by Ronak Joshi</p>
        <p>Powered by @Edamum & inspired by <a href="https://rinkumonani.github.io/sear-a-pe/dist/index.html">sear-a-pe</a></p>
      </center>
    </div>
  );
}

export default App;
