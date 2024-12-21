import React from "react";
//   ************* Notice **************///
//// Desktop mode mobile mode er jonno alada 2 ta chart ase.
/// akta chart responsive kora jacche na
// 2 tay data addd korte hobee
//   ************* Notice **************///
import {
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const salesData = [
    { Month: "January", Sales: 5000 },
    { Month: "February", Sales: 4500 },
    { Month: "March", Sales: 4800 },
    { Month: "April", Sales: 5200 },
    { Month: "May", Sales: 6000 },
    { Month: "June", Sales: 5800 },
    { Month: "July", Sales: 6100 },
    { Month: "August", Sales: 6300 },
    { Month: "September", Sales: 5900 },
    { Month: "October", Sales: 6200 },
    { Month: "November", Sales: 6500 },
    { Month: "December", Sales: 7000 },
  ];

  return (
    <>
      {/* This is desktop mode*/}
      <div className="w-full h-auto md:px-10 hidden md:block">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="7 9" />
            <XAxis dataKey="Month" />
            <YAxis taKey="Sales" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Month" fill="#dfdfdf" />
            <Bar dataKey="Sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* This is desktop mode* end*/}

      {/* This is mobile mode*/}
      <div className="w-full h-auto md:px-10 md:hidden">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="7 9" />
            <XAxis dataKey="Month" />
            <YAxis taKey="Sales" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Month" fill="#dfdfdf" />
            <Bar dataKey="Sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* This is mobile mode end*/}
    </>
  );
};

export default Chart;
