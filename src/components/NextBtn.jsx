import { useDispatch, useSelector } from "react-redux";
import { goBack, numOfStep } from "../features/planSlice";

export default function NextBtn({ onClickHandle }) {
  const step = useSelector(numOfStep);
  const dispatch = useDispatch();

  const goBackHandler = () => dispatch(goBack());

  const goBackBtn = step > 1 && (
    <button
      onClick={goBackHandler}
      className=" font-bold text-cool-gray transition-all hover:text-marin-blue"
    >
      Go Back
    </button>
  );

  return (
    <div className=" absolute bottom-0 flex w-full justify-between bg-white p-4 md:relative  md:p-0">
      {goBackBtn}
      <button
        onClick={onClickHandle}
        className="ml-auto rounded-md bg-marin-blue px-4 py-3 capitalize text-white transition-all hover:bg-purplish-blue md:px-6 "
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
