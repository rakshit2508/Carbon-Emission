import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Label, Cell } from 'recharts';

const PieCharts = ({ totalEmissionSubForm1, totalEmissionSubForm2, totalEmissionSubForm3, totalEmissionSubForm4, totalEmissionSubForm5, totalSum2 }) => {
  // Data for the pie chart
  const data = [
    { name: 'Collection', value: totalEmissionSubForm1, co2: totalEmissionSubForm1.toFixed(3) },
    { name: 'Segregation', value: totalEmissionSubForm2, co2: totalEmissionSubForm2.toFixed(3) },
    { name: 'Pretreatment', value: totalEmissionSubForm3, co2: totalEmissionSubForm3.toFixed(3) },
    { name: 'A D', value: totalEmissionSubForm4, co2: totalEmissionSubForm4.toFixed(3) },
   // { name: 'BioMethane', value: totalEmissionSubForm5, co2: totalEmissionSubForm5.toFixed(2) },
  ];

  // Array of colors for the pie chart
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff6e5a', '#a05195']; // Add more colors as needed

  // Custom formatter function for label content
  const formatLabelContent = (value) => {
    return `${parseFloat(value).toFixed(3)} t`;
  };

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
          <Label content={formatLabelContent} position="top" fill="#000" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
