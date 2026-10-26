import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === "logout") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            clearUser();
            navigate("/login");
            return;
        }

        navigate(route);
    };
    console.log("Active Menu:", activeMenu);

    return (
        <div className="w-64 min-h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">

            {/* Profile Section */}
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                {user?.profileImageUrl ? (
                    <img
                        src={user?.profileImageUrl
                            ? user.profileImageUrl
                            : "/default-avatar.png"
                        }
                        alt="Profile"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/default-avatar.png";
                        }}
                        className="w-20 h-20 bg-slate-100 rounded-full object-cover border-2 border-purple-100 shadow-sm"
                    />) : <CharAvatar
                    fullName={user?.fullName}
                    width="w-20"
                    height="h-20"
                    style="text-xl"
                />}

                <h5 className="text-gray-950 font-semibold text-base text-center leading-6 break-words max-w-full">
                    {user?.fullName || "User"}
                </h5>
            </div>


            {/* Sidebar Menu */}
            {SIDE_MENU_DATA.map((item) => {
                const isActive = activeMenu === item.label;

                return (
                    <button
                        key={item.id}
                        className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition-colors ${isActive
                            ? "bg-purple-500 text-white"
                            : "text-gray-700 hover:bg-purple-500 hover:text-white"
                            }`}
                        onClick={() => handleClick(item.path)}
                    >
                        <item.icon className="text-xl" />
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
};

export default SideMenu;