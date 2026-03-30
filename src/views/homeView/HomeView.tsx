import balloon from "../../assets/images/balloon.png";
import Svg from "../../components/ui/svgs/Svgs";
import styles from "./HomeView.module.css";

const HomeView = () => {
  const balloonAlt =
    "A shiny red heart-shaped balloon with a pale pink string against a white background.";

  return (
    <main className="flex justify-center items-center min-h-[100svh]">
      <div className={styles.balloonWrapper}>
        <img
          src={balloon}
          alt={balloonAlt}
          className="block w-auto max-w-[90vw] max-h-[90vh] h-auto"
        />
        <Svg name="logo" className={styles.logo} />
      </div>
    </main>
  );
};

export default HomeView;
