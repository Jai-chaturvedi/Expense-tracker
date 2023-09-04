import ChartBar from "./ChartBar";
import './Chart.css';
const Chart =(props)=>{
    const dataPointValues=props.datapoints.map((datapoint)=>{return datapoint.value});
     const maxdataPointValue=Math.max(...dataPointValues);
    return(
    <div className="chart">
   {props.datapoints.map((datapoint) => (
   <ChartBar
   key={datapoint.label}
     value={datapoint.value}
     maxValue={maxdataPointValue}
     label={datapoint.label}
   />
   ))}
   </div>
    );
}
export default Chart;