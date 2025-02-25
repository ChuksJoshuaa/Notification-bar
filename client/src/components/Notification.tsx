import {
  NavContent,
  NewNotification,
  Pagination,
  PushNotification,
} from "@/components";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const Notification = () => {
  const { showNotification } = useAppSelector((state) => state.data);

  return (
    <React.Fragment>
      {showNotification && (
        <div
          className={`bg-gray-50 rounded-lg shadow-lg p-5 transition-opacity duration-500 ease-in-out ${showNotification ? "opacity-100" : "opacity-0"} animate-fadeIn`}
        >
          <NavContent />
          <PushNotification />
          <NewNotification />
          <Pagination />
        </div>
      )}
    </React.Fragment>
  );
};

export default Notification;
