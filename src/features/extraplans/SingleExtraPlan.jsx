import { useDispatch, useSelector } from "react-redux";
import { selectedPlan, setExtra } from "../planSlice";

export default function SingleExtraPlan({ plan }) {
  const curPlane = useSelector(selectedPlan);
  const dispatch = useDispatch();

  function handleChange(isChecked, planId) {
    dispatch(setExtra({ isChecked, planId }));
  }

  const labelStyle = `mb-5 flex w-full cursor-pointer items-center gap-6 rounded-md border-[2px] px-6 py-4 ${plan.checked ? "border-purplish-blue bg-mag" : ""}`;
  const priceRender = curPlane.yearly
    ? `+$${plan.price * 10}/yr`
    : `+$${plan.price}/mo`;

  return (
    <label htmlFor={plan.id} className={labelStyle}>
      <input
        className=" scale-150 accent-purplish-blue"
        type="checkbox"
        checked={plan.checked}
        id={plan.id}
        onChange={(event) => handleChange(event.target.checked, plan.id)}
      />
      <div className=" flex-grow text-left">
        <p className=" font-bold text-marin-blue">{plan.name}</p>
        <p className=" text-xs text-cool-gray">{plan.des}</p>
      </div>
      <p className=" text-purplish-blue">{priceRender}</p>
    </label>
  );
}
