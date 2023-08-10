import styles from "./Weather.module.scss";
import { WiCelsius } from "react-icons/wi";
const Weather = (props) => {
  return (
    <div className={styles["weather"]}>
      <div className={styles["weather__main"]}>
        <span className={styles["weather__icon"]}>
          <img
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt={props.name}
          />
        </span>
        <div className={styles["weather__temp"]}>
          <span>{props.main}</span>
          <span className={styles["weather__celcium"]}>
            {props.temp}{" "}
            <WiCelsius
              fill={"#D49555"}
              size={"1.8em"}
              viewBox={"5 3.5 20 20"}
            />{" "}
          </span>
        </div>
      </div>
      <h2 className={styles["weather__title"]}>{props.name}</h2>
      <span className={styles["weather__title"]}>{props.description}</span>
    </div>
  );
};
export default Weather;
