import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {

  // const [assignments, setAssignments] = useState([]);

  return (
    <>
      <Header />
      <Assignments />
    </>
  );
}

export default App;
