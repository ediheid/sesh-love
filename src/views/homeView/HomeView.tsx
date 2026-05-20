import balloon from "../../assets/images/balloon.webp";
import Image from "../../components/ui/image/Image";
import Svg from "../../components/ui/svgs/Svgs";
import styles from "./HomeView.module.css";

const HomeView = () => {
  const balloonAlt =
    "A shiny red heart-shaped balloon with a pale pink string against a white background.";

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className={styles.balloonWrapper}>
        <Image
          src={balloon}
          alt={balloonAlt}
          width={600}
          height={600}
          variant="hero"
          className="block w-auto max-w-[90vw] max-h-[90vh] h-auto"
        />

        <Svg name="logo" className={styles.logo} decorative />

        <h1 className="sr-only">Sesh</h1>
      </div>
    </section>
  );
};

export default HomeView;
