import { Grid } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#E44848"
        ariaLabel="grid-loading"
        radius="12.5"
      />
    </div>
  );
};

export default Loader;
