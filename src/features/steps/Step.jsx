import { useSelector } from "react-redux";
import { numOfStep } from "../planSlice";

export default function Step({ step, stepNumber }) {
  const num = useSelector(numOfStep);
  let styleStep = "text-white border";
  let animation = "";

  if (stepNumber === num) {
    styleStep = "bg-light-blue";
    animation = "step-anim bg-light-blue";
  }

  return (
    <div className=" flex items-center gap-3 ">
      <div className={`relative h-8 w-8  text-center font-bold leading-8 `}>
        <span
          className={`absolute left-0 top-0 h-full w-full rounded-full ${animation}`}
        ></span>
        <span
          className={`${styleStep} absolute left-0 top-0 h-full w-full rounded-full`}
        >
          {stepNumber}
        </span>
      </div>
      <div className=" hidden md:block">
        <p className=" text-sm text-light-gray">step {stepNumber}</p>
        <p className="uppercase text-white">{step}</p>
      </div>
    </div>
  );
}
