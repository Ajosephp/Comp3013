import { Header } from "./components/Header/header";
import { Assignments } from "./components/Assignments/assignments";
import { useState } from "react";


// Each Assignment has a title and a unique identifier
export interface IAssignment {
  id: number;
  title: string;
}

function App() {

  const [assignments, setAssignments] = useState<IAssignment[]>([]);

  const addAssignment = (title: string) => {
    setAssignments(prevAssignments => 
      [...prevAssignments, { id: Date.now(), title } ]);
  };

  const deleteAssignment = (id: number) => {
    setAssignments(prevAssignments => 
      prevAssignments.filter(assignment => assignment.id !== id))
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments assignments={assignments} deleteAssignment={deleteAssignment} />
    </>
  );
}

export default App;
