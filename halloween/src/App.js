
import React, { useEffect, useState } from 'react';
import RoutesList from "./RoutesList.js";
import HalloweenApi from './api.js';
import NavBar from "./NavBar.js";
import './App.css';

/* App component
  * holds state for allCostumes and passes it down to RoutesList

  * calls on Halloween API to fetch costumes and set response as allCostumes
*/

function App() {
  const [allCostumes, setAllCostumes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await HalloweenApi.getCostumes();
        let allCostumes = res;
        setAllCostumes(allCostumes)
      } catch (e) {
        console.error('Error fetching video data', e)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <RoutesList allCostumes={allCostumes} />
      </header>
    </div>
  );
}

export default App;

