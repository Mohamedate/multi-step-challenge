import Step from "./Step";
import styles from "./Steps.module.css";

const steps = ["your info", "select plan", "add-ons", "summary"];

export default function Steps() {
  return (
    <div
      className={`${styles.steps} flex basis-40 items-start justify-center gap-5 p-8 md:basis-[30%] md:flex-col md:justify-normal md:rounded-md`}
    >
      {steps.map((step, index) => (
        <Step stepNumber={index + 1} key={step} step={step} />
      ))}
    </div>
  );
}
