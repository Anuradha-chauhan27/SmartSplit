
import React from "react";
import {
    LuUtensils,
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn,
    onDelete,
}) => {
    const getAmountStyles = () => {
        return type === "income"
            ? "bg-green-50 text-green-500"
            : "bg-red-50 text-red-500";
    };

    return (
        <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
            {/* Transaction Icon */}

            <div className="w-12 h-12 shrink-0 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
                {icon && icon.startsWith("http") ? (
                    <img
                        src={icon}
                        alt={title}
                        className="w-6 h-6 object-contain"
                    />
                ) : (
                    icon ? (
                        <span>{icon}</span>
                    ) : (
                        <LuUtensils />
                    )
                )}
            </div>


            {/* Transaction Details */}
            <div className="flex-1 flex items-center justify-between gap-3">
                <div className="min-w-0">
                    <p className="text-sm text-gray-700 font-medium">
                        {title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        {date}
                    </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    {!hideDeleteBtn && (
                        <button
                            type="button"
                            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            onClick={onDelete}
                        >
                            <LuTrash2 size={18} />
                        </button>
                    )}

                    <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}
                    >
                        <h6 className="text-xs font-medium">
                            {type === "income" ? "+" : "-"} $
                            {Number(amount || 0).toLocaleString("en-US")}
                        </h6>

                        {type === "income" ? (
                            <LuTrendingUp size={16} />
                        ) : (
                            <LuTrendingDown size={16} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionInfoCard;
