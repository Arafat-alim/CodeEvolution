import "./App.css";
import Inline from "./MyComponents/StylingComponent/Inline";
import "./MyComponents/StylingComponent/myStyles.css";
import styles from "./MyComponents/StylingComponent/appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
    </div>
  );
}

export default App;
