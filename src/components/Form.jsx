import { useSelector } from "react-redux";
import { numOfStep } from "../features/planSlice";

import Steps from "../features/steps/Steps";
import PersonalInfo from "../features/personalInfo/PersonalInfo";
import SelectPlane from "../features/selectplane/SelectPlane";
import ExtraPlan from "../features/extraplans/ExtraPlans";
import Finishing from "../features/finishing/Finishing";

const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;

export default function Form() {
  const numStep = useSelector(numOfStep);
  return (
    <div className="m-auto flex max-w-[900px] flex-col rounded-xl bg-white md:flex-row md:p-3">
      <Steps />
      {numStep === ONE && <PersonalInfo />}
      {numStep === TWO && <SelectPlane />}
      {numStep === THREE && <ExtraPlan />}
      {numStep === FOUR && <Finishing />}
    </div>
  );
}
