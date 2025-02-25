import { notificationNavData } from "@/utils/data";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const NavContent = () => {
  const [selectedNav, setSelectedNav] = useState("all");
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-gray-700 font-medium text-2xl">Notification</h3>
        <button>
          <BsThreeDots size={20} />
        </button>
      </div>
      <div className="flex justify-start items-center gap-5 mt-5">
        {notificationNavData?.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedNav(item?.id)}
            className={`py-2 px-3 rounded-full ${selectedNav === item?.id ? "bg-[#d2dcfc]" : "bg-gray-200"}`}
          >
            <h3
              className={`text-md ${selectedNav === item?.id ? "text-[#0a42f7] font-medium" : "text-gray-700 font-normal"}`}
            >
              {item?.name}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavContent;
