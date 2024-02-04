import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";


export function Header() {
  const [input, setInput] = useState(''); // Default for the Input
  
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input value={input} onChange={e => setInput(e.target.value)}
         type="text" />
        <button disabled={!input}>
          Create <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  );
}
