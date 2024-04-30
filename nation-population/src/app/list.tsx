'use client'
import React, { useEffect, useState } from 'react';
import fetchData from './fetch';


const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetchData();
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApiData();
  }, []);

  return (
    <div className='flex justify-center'>
      
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Population Data</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Nation</th>
              <th className="px-4 py-2">Population</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.Nation}</td>
                <td className="border px-4 py-2">{item.Population}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div> 
    </div>
  );
};

export default List;
