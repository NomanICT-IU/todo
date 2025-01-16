import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems, handleOnDelete}) => {
  
  return (
    <>
     <div className="container text-center">
  {
    todoItems.map((item, index) => (
      <div className="row" key={index}>
        <div className={`${styles.todoItems} col-4`}>{item.name}</div>
        <div className={`${styles.todoItems} col-3`}>{item.dueDate}</div>
        <div className={`${styles.todoItems} col-3`}>{item.dueTime}</div>
        <div className={`${styles.todoItems} col-2`}>
          <button className={`${styles.deleteBtn} btn btn-danger`}
          onClick={()=>handleOnDelete(item.name)}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  }
</div>

    </>
  );
};

export default TodoItems;
