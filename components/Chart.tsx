/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-md bg-white px-3 py-2 shadow-md border border-gray-200 text-sm">
        <p className="font-medium text-gray-800">{payload[0].payload.day}</p>
        <p className="text-orange-500">Orange: {payload[0].value}</p>
        {payload[1] && <p className="text-purple-500">Purple: {payload[1].value}</p>}
      </div>
    );
  }
  return null;
};

export default function StyleChart({ data }: { data: any[] }) {
  return (
    <div className="mt-8 h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={true} tickLine={false} />
          <YAxis tick={false} axisLine={false} tickLine={false} width={0} />

          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="orange" stroke="#f97316" strokeWidth={1} dot={false} />
          <Line type="monotone" dataKey="purple" stroke="#8b5cf6" strokeWidth={1} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
