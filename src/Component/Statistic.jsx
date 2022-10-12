import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistic = () => {
    const recharts = useLoaderData();
    const { data } = recharts;
    return (
        <div>
            <h1 className='font-bold text-3xl'>Line</h1>
            <LineChart
                width={500}
                height={400}
                data={data}
            ><Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>


        </div>
    );
};

export default Statistic;