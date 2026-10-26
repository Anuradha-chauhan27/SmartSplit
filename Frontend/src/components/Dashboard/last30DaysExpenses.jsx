import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const Last30DaysExpenses = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const transactions = Array.isArray(data)
            ? data
            : data?.transactions || [];

        const result = prepareExpenseBarChartData(transactions);
        console.log("Expense Chart Data:", result);
        setChartData(result);
    }, [data]);

    return (
        <div className="card col-span-1">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">
                    Last 30 Days Expenses
                </h5>
            </div>

            <CustomBarChart data={chartData} />
        </div>
    );
};

export default Last30DaysExpenses;