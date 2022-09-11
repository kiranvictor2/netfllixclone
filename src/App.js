import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import { Orginals,Action, ComedyMovies, RomanceMovies, HorrorMovies } from "./urls";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Rowpost url={Orginals} title='Netflix Orginals' />
     <Rowpost url={Action} title='Action' isSmall />
     <Rowpost url={HorrorMovies} title='Horror' />
     <Rowpost url={ComedyMovies} title='Comedy' isSmall/>
     <Rowpost url={RomanceMovies} title='Romance' />
    </div>
  );
}

export default App;
