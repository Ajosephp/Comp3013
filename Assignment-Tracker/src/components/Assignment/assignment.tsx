import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";


// Each AssignmentProp has a title and a unique identifier and a function
// associated with it's button
interface AssignmentProps {
  id: number;
  title: string;
  deleteAssignment: (id: number) => void;
}

export function Assignment( {id, title, deleteAssignment }: AssignmentProps ) {

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{title}</p>

      <button className={styles.deleteButton} onClick={() => deleteAssignment(id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
