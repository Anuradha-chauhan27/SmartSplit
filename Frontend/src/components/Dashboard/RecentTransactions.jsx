
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const RecentTransactions = ({ transactions = [], onSeeMore }) => {
    const recentTransactions = Array.isArray(transactions)
        ? transactions.slice(0, 5)
        : [];

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Recent Transactions</h5>

                <button
                    className="card-btn"
                    onClick={onSeeMore}
                >
                    See All
                    <LuArrowRight className="text-base" />
                </button>
            </div>

            <div className="mt-6">
                {recentTransactions.length > 0 ? (
                    recentTransactions.map((item) => (
                        <TransactionInfoCard
                            key={item._id}
                            title={
                                item.type === "expense"
                                    ? item.category
                                    : item.source
                            }
                            icon={item.icon}
                            date={moment(item.date).format("Do MMM YYYY")}
                            amount={item.amount}
                            type={item.type}
                            hideDeleteBtn
                        />
                    ))
                ) : (
                    <p className="py-6 text-center text-gray-400">
                        No transactions found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default RecentTransactions;
