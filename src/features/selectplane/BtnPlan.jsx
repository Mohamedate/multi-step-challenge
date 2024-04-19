import { useDispatch, useSelector } from "react-redux";
import { selectedPlan, setPlan } from "../planSlice";

export default function BtnPlan({ image, name, price }) {
  const dispatch = useDispatch();
  const curPlane = useSelector(selectedPlan);

  const priceRender = curPlane.yearly ? `$${price * 10}/yr` : `$${price}/mo`;

  const handleClick = ({ name, price }) => {
    dispatch(setPlan({ name, price: price }));
  };

  const btnStyle = curPlane.name === name ? "border-purplish-blue bg-mag" : "";

  return (
    <button
      onClick={() => handleClick({ name, price })}
      className={`flex w-full flex-row items-center gap-4 rounded-md border-[1px] border-light-gray p-2 transition-all duration-300 hover:border-purplish-blue hover:bg-mag md:flex-col md:gap-12 md:p-4 ${btnStyle}`}
    >
      <img src={image} alt={name} />
      <div className=" flex flex-col items-start ">
        <p className=" font-bold text-marin-blue">{name}</p>
        <p className=" text-cool-gray">{priceRender}</p>
        {curPlane.yearly && (
          <p className=" text-sm  text-marin-blue">2 months free</p>
        )}
      </div>
    </button>
  );
}
