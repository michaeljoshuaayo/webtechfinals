import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const items = [
  {
    serialNumber: "W1234 06 123456",
    bldType: "AB+",
    status: "Reserved",
    date: "9/20/2021",
  },
  {
    serialNumber: "W1235 06 123457",
    bldType: "O-",
    status: "Released",
    date: "9/20/2021",
  },
  {
    serialNumber: "W1236 06 123458",
    bldType: "B+",
    status: "Discarded",
    date: "9/20/2021",
  },
  {
    serialNumber: "W1237 06 123459",
    bldType: "A-",
    status: "Reserved",
    date: "9/20/2021",
  },
  {
    serialNumber: "W1238 06 123460",
    bldType: "A+",
    status: "Released",
    date: "9/20/2021",
  },
  {
    serialNumber: "W1238 06 123461",
    bldType: "AB+",
    status: "Reserved",
    date: "9/20/2021",
  },
  {
    serialNumber: "W1238 06 123462",
    bldType: "O+",
    status: "Discarded",
    date: "9/20/2021",
  },
  {
    serialNumber: "W1238 06 123463",
    bldType: "B+",
    status: "Released",
    date: "9/20/2021",
  },
];

export const CardTransactions = () => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Reserved":
        return "bg-blue-500 text-white rounded-xl px-3 py-1 text-center";
      case "Released":
        return "bg-orange-500 text-white rounded-xl px-3 py-1 text-center";
      case "Discarded":
        return "bg-red-500 text-white rounded-xl px-3 py-1 text-center";
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
              Recent Blood Activities
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-sm">Date</th>
                <th className="text-sm">Serial Number</th>
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
                    <td className="text-sm text-center">{item.date}</td>
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
