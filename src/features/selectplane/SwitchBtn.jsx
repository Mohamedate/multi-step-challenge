import { useDispatch, useSelector } from "react-redux";
import { selectedPlan, setPlan } from "../planSlice";

export default function SwitchBtn() {
  const curPlane = useSelector(selectedPlan);
  const dispatch = useDispatch();

  const monthlyStyle = !curPlane.yearly ? "text-marin-blue" : "text-cool-gray";
  const switchStyle = curPlane.yearly ? " translate-x-[18px]" : "translate-x-0";
  const yearlyStyle = curPlane.yearly ? "text-marin-blue" : "text-cool-gray";

  function handleClick() {
    dispatch(setPlan({ yearly: "" }));
  }

  return (
    <div className=" mt-8 flex items-center justify-center gap-4 rounded-md bg-mag p-3 ">
      <p className={`font-bold transition-all duration-300 ${monthlyStyle}`}>
        Monthly
      </p>
      <button
        onClick={handleClick}
        className="w-10 rounded-full bg-marin-blue p-1"
      >
        <span
          className={`block h-3.5 w-3.5 rounded-full bg-white transition-all duration-300 ${switchStyle}`}
        ></span>
      </button>
      <p className={`font-bold transition-all duration-300 ${yearlyStyle}`}>
        Yearly
      </p>
    </div>
  );
}
