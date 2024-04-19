import React from "react";
import { useSelector } from "react-redux";
import { selectedPlan } from "../planSlice";

export default function FinishExtraPlan({ extraP }) {
  const { name, price, checked } = extraP;
  const curPlane = useSelector(selectedPlan);
  const priceRender = curPlane.yearly ? `$${price * 10}/yr` : `$${price}/mo`;

  if (checked)
    return (
      <div className=" flex justify-between pt-4">
        <p className="text-cool-gray">{name}</p>
        <span>{priceRender}</span>
      </div>
    );
}
