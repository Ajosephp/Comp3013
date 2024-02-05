import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";


// Each Header is expecting input of type string which returns void
interface HeaderProps {
  addAssignment: (title: string) => void;
}

export function Header( {addAssignment}:HeaderProps ) {
  const [input, setInput] = useState(''); // Default for the Input

  const handleSubmit = (e:any) => {
    e.preventDefault();
    addAssignment(input);
    setInput(''); // Set back to blank input
  }
  
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form
      onSubmit={handleSubmit} // Handle the form submission
      className={styles.newAssignmentForm}>

        <input 
         value={input}
         onChange={e => setInput(e.target.value)}
         type="text" />
        <button 
         type="submit"
         disabled={!input}>
          Create <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  );
}
