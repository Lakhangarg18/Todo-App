import styles from "./TodoItems.module.css";
import Todoitem from "./Todoiem";
const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <>
      <div classNameName={styles.itemContainer}>
        {todoItems.map((item) => (
          <Todoitem
            todoDate={item.dueDate}
            todoName={item.name}
            onDelete={onDelete}
          ></Todoitem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
