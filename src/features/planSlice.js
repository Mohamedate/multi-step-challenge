import { createSlice } from "@reduxjs/toolkit";
import { Validation } from "./validation";

const initialState = {
  userName: "",
  email: "",
  phoneNumber: "",
  userError: "",
  emailError: "",
  phoneError: "",
  selectedPlan: {
    name: "Arcade",
    price: 9,
    yearly: false,
  },
  extraPlans: [
    {
      id: "e1",
      name: "Online service",
      price: 1,
      des: "Access to multiplayer games",
      checked: false,
    },
    {
      id: "e2",
      name: "Larger storage",
      price: 2,
      des: "Extra 1TB of cloud save",
      checked: false,
    },
    {
      id: "e3",
      name: "Customizable profile",
      price: 2,
      des: "Custom theme on your profile",
      checked: false,
    },
  ],
  step: 1,
};

export const planInfoSlice = createSlice({
  name: "planInfo",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone(state, action) {
      state.phoneNumber = action.payload;
    },
    submit: (state) => {
      state.userError = Validation.checkName(state.userName);
      state.emailError = Validation.checkEmail(state.email);
      state.phoneError = Validation.checkPhone(state.phoneNumber);

      if (
        state.userError === "" &&
        state.emailError === "" &&
        state.phoneError === ""
      )
        state.step += 1;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    goBack: (state) => {
      state.step -= 1;
    },

    setPlan(state, action) {
      if ("yearly" in action.payload) {
        state.selectedPlan.yearly = !state.selectedPlan.yearly;
      } else {
        state.selectedPlan.name = action.payload.name;
        state.selectedPlan.price = action.payload.price;
      }
    },

    setExtra(state, { payload }) {
      const { isChecked, planId } = payload;

      state.extraPlans = state.extraPlans.map((p) => {
        if (p.id === planId) return { ...p, checked: isChecked };
        else return p;
      });
    },

    changePlan(state) {
      state.step = 2;
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  submit,
  setPlan,
  setExtra,
  nextStep,
  goBack,
  changePlan,
} = planInfoSlice.actions;

export const getName = (state) => state.planInfo.userName;
export const getEmail = (state) => state.planInfo.email;
export const getPhone = (state) => state.planInfo.phoneNumber;

export const getUserError = (state) => state.planInfo.userError;
export const getEmailError = (state) => state.planInfo.emailError;
export const getPhoneError = (state) => state.planInfo.phoneError;
export const selectedPlan = (state) => state.planInfo.selectedPlan;
export const extraPlans = (state) => state.planInfo.extraPlans;

export const numOfStep = (state) => state.planInfo.step;

export default planInfoSlice.reducer;
