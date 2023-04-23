import "./scss/index.scss"

import GridPart from "./components/GridPart.js";

function App() {
  return (
    <div className="App">
      <div id="title" className="title-font">EISENHOWER MATRIX</div>
      <div id = "mid-container">
        <div id = "mid-grid">
          <GridPart id="top-left-grid"/>
          <GridPart id="top-right-grid"/>
          <GridPart id="bottom-left-grid"/>
          <GridPart id="bottom-right-grid"/>
        </div>
      </div>
    </div>
  );
}

export default App;
