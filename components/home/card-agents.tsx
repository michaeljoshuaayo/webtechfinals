import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const items = [
  {
    serialNumber: "W1234 06 123456",
    bldType: "AB+",
    status: "Reserved",
    expDate: "9/20/2021",
  },
  {
    serialNumber: "W1235 06 123457",
    bldType: "O-",
    status: "Available",
    expDate: "9/20/2021",
  },
  {
    serialNumber: "W1236 06 123458",
    bldType: "B+",
    status: "Reserved",
    expDate: "9/20/2021",
  },
  {
    serialNumber: "W1237 06 123459",
    bldType: "A-",
    status: "Reserved",
    expDate: "9/20/2021",
  },
  {
    serialNumber: "W1238 06 123460",
    bldType: "A+",
    status: "Available",
    expDate: "9/20/2021",
  },
];

export const CardAgents = () => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500 text-white rounded-xl px-3 py-1 text-center";
      case "Reserved":
        return "bg-blue-500 text-white rounded-xl px-3 py-1 text-center";
      default:
        return "text-center";
    }
  };

  return (
    <Card className="bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              Near Expiry Blood Products
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-sm">Exp. Date</th>
                <th className="text-sm text">Serial Number</th>
                <th className="text-sm">Blood Type</th>
                <th className="text-sm text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <React.Fragment key={index}> 
                  <tr>
                    <td></td>
                  </tr>
                  <tr className="border-b">
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  
                  <tr>
                    <td className="text-sm text-center text-red-500">{item.expDate}</td>
                    <td className="text-sm text-center">{item.serialNumber}</td>
                    <td className="text-sm text-center">{item.bldType}</td>
                    <td className={`text-sm ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};
