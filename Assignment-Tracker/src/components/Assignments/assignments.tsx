import { Assignment } from "../Assignment/assignment";
import styles from "./assignments.module.css";
import { IAssignment } from "../../App";


export function Assignments( { assignments, deleteAssignment, toggleCompletion }:
  { assignments: IAssignment[],
    deleteAssignment: (id: number) => void,
    toggleCompletion: (id: number) => void }) {
      
      const isCompleteCount = assignments.filter(assignment => assignment.isCompleted).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{isCompleteCount} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) =>
          <Assignment 
          key={assignment.id}
           id={assignment.id}
            title={assignment.title}
             deleteAssignment={deleteAssignment}
             toggleCompletion={toggleCompletion}
             isCompleted={assignment.isCompleted} />
        )}
      </div>
    </section>
  );
}
