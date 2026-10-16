import React from "react";
import cards from "../../assets/images/cards.png";
import { LuTrendingUp } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-[#FCFAFC] overflow-hidden">

      {/* Left Section */}
      <div className="w-full md:w-[60%] min-h-screen px-8 md:px-12 pt-8 pb-12 flex flex-col relative z-10">
        <h2 className="text-2xl font-semibold text-black">
          SmartSplit
        </h2>

        <div className="flex-1 flex flex-col justify-center">
          {children}
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-[40%] h-screen bg-violet-50 relative overflow-hidden">

        {/* Top Purple Shape */}
        <div className="absolute w-64 h-64 bg-purple-600 rounded-[40px]
          -top-10 -left-20 z-0" />

        {/* Pink Outline Shape */}
        <div className="absolute w-64 h-64 rounded-[40px]
          border-[20px] border-fuchsia-600
          top-[38%] -right-24 z-0" />

        {/* Bottom Purple Shape */}
        <div className="absolute w-48 h-48 bg-violet-500
          rounded-[40px] bottom-[-40px] -left-10 z-0" />

        {/* Stats Card */}
        <div className="absolute top-[2%] left-[5%] w-[90%] z-10">
          <StatsInfoCard
            icon={<LuTrendingUp />}
            label="Track Your Income & Expenses"
            value="$430,000"
            color="bg-violet-500"
          />
        </div>

        {/* Transaction Chart */}
        <div className="absolute top-[40%] left-[5%] w-[90%] z-10">
          <img
            src={cards}
            alt="All Transactions"
            className="w-full h-auto rounded-xl shadow-lg shadow-purple-400/10"
          />
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl
      shadow-md shadow-purple-400/10 border border-gray-200/50">

      <div className={`w-12 h-12 shrink-0 flex items-center justify-center
        text-[26px] text-white ${color} rounded-full shadow-md`}>
        {icon}
      </div>

      <div className="min-w-0">
        <h6 className="text-xs text-gray-500 mb-1">
          {label}
        </h6>
        <span className="text-xl font-medium text-black">
          {value}
        </span>
      </div>

    </div>
  );
};
