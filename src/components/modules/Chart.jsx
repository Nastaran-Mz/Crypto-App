/* eslint-disable react/prop-types */
import styles from "./Chart.module.css";
import { convertData } from "../../helpers/convertData";
import { useState } from "react";
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";
export function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  

  return (
    <>
      <div className={styles.container}>
        <span className={styles.cross} onClick={() => setChart(null)}>
          X
        </span>
        <div className={styles.chart}>
          <div className={styles.name}>
            <img src={chart.coin.image} alt="" />
            <p>{chart?.coin?.name || "No Name Available"}</p>

          </div>
          <div className={styles.graph}>
            <ChartComponent data={convertData(chart, type)} type={type}/>
          </div>
        </div>
      </div>
    </>
  );
}
const ChartComponent = ({data ,type}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
