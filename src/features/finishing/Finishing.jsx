import { useDispatch, useSelector } from "react-redux";
import BoxPlan from "../../components/BoxPlan";
import Container from "../../components/Container";
import Title from "../../components/Title";
import NextBtn from "../../components/NextBtn";
import { changePlan, extraPlans, selectedPlan } from "../planSlice";
import FinishExtraPlan from "./FinishExtraPlan";
import { useState } from "react";
import UpAnim from "../../components/UpAnim";
import CircleAnim from "../../components/CircleAnim";

export default function Finishing() {
  const curPlan = useSelector(selectedPlan);
  const extra = useSelector(extraPlans);
  const dispatch = useDispatch();
  const [finish, setFinish] = useState(false);
  // ========================
  const changePlanHandler = () => dispatch(changePlan());
  const handleFinish = () => setFinish(true);
  // ========================
  const planDurationRender = curPlan.yearly ? "Yearly" : "Monthly";
  const priceDurationRender = curPlan.yearly ? "per year" : "per month";
  // ========================
  const priceRender = curPlan.yearly
    ? `$${curPlan.price * 10}/yr`
    : `$${curPlan.price}/mo`;

  // =======================
  let totalPrice = curPlan.price;
  totalPrice += extra
    .filter((e) => e.checked)
    .reduce((pre, cur) => pre + cur.price, 0);

  totalPrice = curPlan.yearly ? `$${totalPrice * 10}/yr` : `$${totalPrice}/mo`;
  // ========================

  if (finish) {
    return (
      <Container>
        <BoxPlan classes="flex items-center">
          <div className=" flex flex-col items-center">
            <CircleAnim>
              <div className=" mb-8">
                <img
                  className=" basis-4"
                  src="./images/icon-thank-you.svg"
                  alt="thank you"
                />
              </div>
            </CircleAnim>

            <UpAnim>
              <h2 className=" mb-4 text-2xl font-bold text-marin-blue">
                Thank you!
              </h2>
            </UpAnim>
            <UpAnim del={0.2}>
              <p className=" text-center text-cool-gray ">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at mohame.datefh49@gmail.com.
              </p>
            </UpAnim>
          </div>
        </BoxPlan>
      </Container>
    );
  } else {
    return (
      <Container>
        <BoxPlan>
          <Title head="Finishing up">
            Double-check everything looks OK before confirming.
          </Title>
          <UpAnim del={0.2}>
            <div className="rounded-lg bg-alabaster p-5">
              <div className="flex items-center justify-between  border-b-2 pb-4">
                <div className="flex flex-col ">
                  <p className="font-bold text-marin-blue">
                    {curPlan.name} ({planDurationRender})
                  </p>
                  <button
                    onClick={changePlanHandler}
                    className=" w-fit text-cool-gray underline "
                  >
                    Change
                  </button>
                </div>
                <span className="font-bold text-marin-blue">{priceRender}</span>
              </div>
              <div>
                {extra.map((e) => (
                  <FinishExtraPlan key={e.id} extraP={e} />
                ))}
              </div>
            </div>
          </UpAnim>
          <UpAnim del={0.4}>
            <div className=" flex justify-between p-5">
              <p className=" text-cool-gray">Total ({priceDurationRender})</p>
              <span className=" text-xl font-bold text-purplish-blue">
                {totalPrice}
              </span>
            </div>
          </UpAnim>
        </BoxPlan>
        <NextBtn onClickHandle={handleFinish} />
      </Container>
    );
  }
}
