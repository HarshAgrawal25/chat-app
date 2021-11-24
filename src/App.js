import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WorkArea from "./pages/WorkArea";


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path='/workarea' element={<WorkArea />}></Route>
        
      </Routes>
    </React.Fragment>
  );
}

export default App;
