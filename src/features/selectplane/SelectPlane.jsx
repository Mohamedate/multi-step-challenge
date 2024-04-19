import { useDispatch } from "react-redux";
import { nextStep } from "../planSlice";

import Container from "../../components/Container";
import Title from "../../components/Title";
import SwitchBtn from "./SwitchBtn";
import BtnPlan from "./BtnPlan";
import NextBtn from "../../components/NextBtn";
import BoxPlan from "../../components/BoxPlan";
import UpAnim from "../../components/UpAnim";

export default function SelectPlane() {
  const dispatch = useDispatch();

  const handleNextStep = () => dispatch(nextStep());

  return (
    <Container>
      <BoxPlan>
        <Title head="Select your plan">
          You have the option of monthly or yearly billing.
        </Title>
        <div className=" flex flex-col gap-4 md:flex-row ">
          <UpAnim del={0.2} classes="basis-1/3">
            <BtnPlan image="./images/icon-arcade.svg" name="Arcade" price={9} />
          </UpAnim>
          <UpAnim del={0.4} classes="basis-1/3">
            <BtnPlan
              image="./images/icon-advanced.svg"
              name="Advanced"
              price={12}
            />
          </UpAnim>
          <UpAnim del={0.6} classes="basis-1/3">
            <BtnPlan image="./images/icon-pro.svg" name="Pro" price={15} />
          </UpAnim>
        </div>
        <UpAnim del={0.8}>
          <SwitchBtn />
        </UpAnim>
      </BoxPlan>
      <NextBtn onClickHandle={handleNextStep} />
    </Container>
  );
}
