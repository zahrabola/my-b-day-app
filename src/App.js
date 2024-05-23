import React, { useState } from "react";
import Data from "./Data";
import List from "./List";
import "./App.css";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>{people.length} birthday today</h3>

          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
//https://www.uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042
