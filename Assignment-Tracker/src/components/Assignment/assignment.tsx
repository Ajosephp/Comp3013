import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";


// Each AssignmentProp has a title and a unique identifier and a function
// associated with it's button
interface AssignmentProps {
  id: number;
  title: string;
  deleteAssignment: (id: number) => void;
  toggleCompletion: (id: number) => void;
  isCompleted: boolean;
}

export function Assignment( 
  { id,
   title,
   deleteAssignment,
   toggleCompletion,
   isCompleted }: AssignmentProps ) {

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}
       onClick={() => toggleCompletion(id)}>
       { isCompleted ? <BsCheckCircleFill /> : <div /> }
      </button>

      <p className={isCompleted ? styles.textCompleted: '' } >{title}</p>

      <button className={styles.deleteButton}
       onClick={() => deleteAssignment(id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
