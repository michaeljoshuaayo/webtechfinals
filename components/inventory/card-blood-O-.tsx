import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { BloodIcon } from "../icons/dashboard/blood-icon";
export const BloodONegative = ({ totalUnits = 40 }) => { // Set default value to 77 for totalUnits
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 flex justify-center items-center"> {/* Updated to use flexbox */}
        <div className="flex justify-center items-center">
            <BloodIcon />
          <div className="flex items-center">
            <span className="text text-4xl font-semibold ml-2 mr-4">O-</span> 
          </div>
          <div className="ml-8"> {/* Added ml-8 for more spacing between blood type and total units */}
            <span className="text-default-1000 text-4xl font-bold">{totalUnits}</span>
          <div className="flex items-center">
          <span className="text-default-500 text-sm font-bold">Units Available</span>
          </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
