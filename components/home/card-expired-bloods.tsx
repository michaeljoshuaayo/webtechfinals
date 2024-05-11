import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { ExpiredIcon } from "../icons/dashboard/expired-icon";

export const ExpiredCard = ({ totalUnits = 30 }) => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex justify-center">
          <ExpiredIcon />
        </div>
        <div className="flex justify-center mt-2">
          <span className="text-default-1000 text-2xl font-bold">{totalUnits}</span> 
        </div>
        <div className="text-center mt-3">
          <span className="text text-sm font-semibold">Expired Blood Units</span>
        </div>
      </CardBody>
    </Card>
  );
};
