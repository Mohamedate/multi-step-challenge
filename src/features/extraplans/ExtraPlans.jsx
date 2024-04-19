import Container from "../../ui/Container";
import BoxPlan from "../../ui/BoxPlan";
import Title from "../../ui/Title";

import { useDispatch, useSelector } from "react-redux";
import { extraPlans, nextStep } from "../planSlice";
import SingleExtraPlan from "./SingleExtraPlan";
import UpAnim from "../../components/UpAnim";
import NextBtn from "../../components/NextBtn";

export default function ExtraPlans() {
  const extraPlansData = useSelector(extraPlans);
  const dispatch = useDispatch();

  const handleNextStep = () => dispatch(nextStep());

  return (
    <Container>
      <BoxPlan>
        <Title head="Pick add-ons">
          Add-ons help enhance your gaming experience.
        </Title>
        <div>
          {extraPlansData.map((plan, i) => (
            <UpAnim key={plan.id} del={0.2 + i / 5}>
              <SingleExtraPlan plan={plan} />
            </UpAnim>
          ))}
        </div>
      </BoxPlan>
      <NextBtn onClickHandle={handleNextStep} />
    </Container>
  );
}
