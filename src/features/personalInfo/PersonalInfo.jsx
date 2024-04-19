import Title from "../../components/Title";
import Input from "./Input";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setPhone,
  getName,
  getEmail,
  getPhone,
  submit,
  getUserError,
  getEmailError,
  getPhoneError,
} from "../planSlice";
import NextBtn from "../../components/NextBtn";
import BoxPlan from "../../components/BoxPlan";
import UpAnim from "../../components/UpAnim";

export default function PersonalInfo() {
  const dispatch = useDispatch();

  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const userError = useSelector(getUserError);
  const emailError = useSelector(getEmailError);
  const phoneError = useSelector(getPhoneError);

  const handleName = (e) => dispatch(setName(e.target.value));
  const handleEmail = (e) => dispatch(setEmail(e.target.value));
  const handlePhone = (e) => dispatch(setPhone(e.target.value));

  function handleSubmit() {
    dispatch(submit());
  }

  return (
    <Container>
      <BoxPlan>
        <Title head=" Personal info">
          Please provide your name, email address, and phone number.
        </Title>
        <div className=" flex flex-col gap-6">
          <UpAnim del={0.2}>
            <Input label="Name" error={userError}>
              <input
                placeholder="e.g Mohamed Atef"
                onChange={handleName}
                value={name}
                className=" rounded-md border p-2"
              />
            </Input>
          </UpAnim>
          <UpAnim del={0.4}>
            <Input label="Email address" error={emailError}>
              <input
                placeholder="e.g mohamed@gmail.com"
                onChange={handleEmail}
                value={email}
                className=" rounded-md border p-2"
              />
            </Input>
          </UpAnim>

          <UpAnim del={0.6}>
            <Input label="phone number" error={phoneError}>
              <input
                placeholder="e.g +20 111 592 5784"
                onChange={handlePhone}
                value={phone}
                className=" rounded-md border p-2"
              />
            </Input>
          </UpAnim>
        </div>
      </BoxPlan>

      <NextBtn onClickHandle={handleSubmit} />
    </Container>
  );
}
