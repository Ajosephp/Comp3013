import { Header } from "./components/Header/header";
import { Assignments } from "./components/Assignments/assignments";
import { useState } from "react";


// Each Assignment has a title, a unique identifier and a completed boolean
export interface IAssignment {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [assignments, setAssignments] = useState<IAssignment[]>([]);

  // Adds a new assignment with a unique ID, title, and initial completion status.
  const addAssignment = (title: string) => {
    setAssignments(prevAssignments => 
      [...prevAssignments, { id: Date.now(), title, isCompleted: false } ]);
  };

  // Removes an assignment from the list based on its ID.
  const deleteAssignment = (id: number) => {
    setAssignments(prevAssignments => 
      prevAssignments.filter(assignment => assignment.id !== id))
  };

  // Toggles the completion status of an assignment based on its ID. 
  // If the ID matches, it returns a new assignment object with the `isCompleted` status flipped.
  // Otherwise, returns the original assignment unchanged.
  const toggleCompletion = (id: number) => {
    setAssignments(prevAssignments =>
      prevAssignments.map(assignment =>
        assignment.id === id ? 
        { ...assignment, isCompleted: !assignment.isCompleted } : assignment
      )
    );
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments 
      assignments={assignments}
      deleteAssignment={deleteAssignment}
      toggleCompletion={toggleCompletion} />
    </>
  );
}

export default App;
