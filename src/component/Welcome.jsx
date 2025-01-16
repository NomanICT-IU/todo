import styles from "./Welcome.module.css";

const Welcome = ({ todoItems }) => {
  console.log(todoItems);
  const msg = <h2 className={`${styles.welcomeMsg}`}>Enjoy Your Day.....</h2>;
  return <>{todoItems.length === 0 ? msg : ""}</>;
};

export default Welcome;
