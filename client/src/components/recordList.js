import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title } from 'chart.js';

import { Pie, Line } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title);

export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);

    const data = {
     labels: records.map((record) => record.callLetters),
     datasets: [
       {
         label: '# of Votes',
         data: records.map((record) => record.airTemperature.value),
         backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)',
           'rgba(255, 159, 64, 0.2)',
         ],
         borderColor: [
           'rgba(255, 99, 132, 1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)',
         ],
         borderWidth: 1,
       },
     ],
   };
  
    const options = {
     responsive: true,
     plugins: {
       legend: {
         position: 'top',
       },
       title: {
         display: true,
         text: 'Chart.js Line Chart',
       },
     },
   };
   
   const labels = records.map((record) => record.callLetters);
   
    const data2 = {
     labels,
     datasets: [
       {
         label: 'Pressure',
         data: records.map((record) => record.pressure.value),
         borderColor: 'rgb(53, 162, 235)',
         backgroundColor: 'rgba(53, 162, 235, 0.5)',
       },
     ],
   };
 
 return (
   <div>
     <h3>Record Charts</h3>

    <div style={{ marginTop: 20, width: '35%', float: 'left', margin: '0 5% 0 5%' }}> 
        <Pie data={data} /> 
    </div>

    <div style={{ marginTop: 20, width: '35%', float: 'left', margin: '0 5% 0 5%' }}> 
        <Line options={options} data={data2} /> 
    </div>
    
   </div>
 );
}