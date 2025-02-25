import { pushNotificationData } from "@/utils/data";
import { useState } from "react";
import { MdClose } from "react-icons/md";
const PushNotification = () => {
  const [selectedPush, setSelectedPush] = useState("turn on");
  return (
    <div className="mt-5">
      <div className="bg-gray-100 rounded-lg p-5 gap-3">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold leading-normal text-md">
            Your push notifications are off
          </h3>
          <button>
            <MdClose size={20} />
          </button>
        </div>
        <p className="text-gray-500 font-medium leading-normal text-sm mt-1">
          Turn on notifications to stay connected
        </p>

        <div className="flex justify-start items-center gap-5 mt-5 w-full">
          {pushNotificationData?.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPush(item?.id)}
              className={`w-full py-2 px-3 rounded-lg ${selectedPush === item?.id ? "bg-[#d2dcfc]" : "bg-gray-200"}`}
            >
              <h3
                className={`text-md ${selectedPush === item?.id ? "text-[#0a42f7] font-medium" : "text-gray-700 font-normal"}`}
              >
                {item?.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
