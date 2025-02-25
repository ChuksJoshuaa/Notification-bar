import { USER_ID } from "@/constants";
import {
  fetchNotifications,
  markNotificationAsRead,
  setSelectedID,
} from "@/redux/features/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { defaultImageURl } from "@/utils/data";
import moment from "moment";
import { useEffect } from "react";
import { RiUser6Fill } from "react-icons/ri";
import { RxDot, RxDotFilled } from "react-icons/rx";

const NewNotification = () => {
  const dispatch = useAppDispatch();
  const { notifications, page, selectedId } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchNotifications(USER_ID));
  }, [dispatch, USER_ID, page, selectedId]);

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h4 className="text-gray-700 font-medium leading-tight text-md">New</h4>
        <button className="cursor-pointer text-sm text-[#0a42f7]">
          See all
        </button>
      </div>
      <div className="mt-5 flex items-center justify-start gap-3">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={defaultImageURl} alt="photo_url" />
          </div>
          <button className="py-2 px-2 bg-blue-400 rounded-full absolute right-0 bottom-[-0.4em]">
            <RiUser6Fill size={20} color="#fff" />
          </button>
        </div>

        <div className="flex flex-col">
          <h2 className="text-gray-700 font-medium leading-normal text-md">
            Chuck Joshua
          </h2>
          <p className="text-gray-500 font-normal leading-normal text-sm">
            {notifications?.[0]?.message}
          </p>
          <p className="text-gray-500 font-nromal leading-tight text-sm">
            {moment(notifications?.[0]?.createdAt).startOf("hour").fromNow()}
          </p>
          <p className="text-gray-500 font-nromal leading-tight text-sm mt-2">
            Request accepted
          </p>
        </div>
      </div>

      <div className="mt-10">
        {notifications?.map((item, idx) => (
          <div
            className="mt-5 flex items-center justify-between gap-3"
            key={idx}
          >
            <div className="flex items-center justify-start gap-3">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src={defaultImageURl} alt="photo_url" />
                </div>
                <button className="py-2 px-2 bg-blue-400 rounded-full absolute right-0 bottom-[-0.4em]">
                  <RiUser6Fill size={20} color="#fff" />
                </button>
              </div>

              <div className="flex flex-col">
                <h2 className="text-gray-700 font-medium leading-normal text-md">
                  Chuck Joshua
                </h2>
                <p className="text-gray-500 font-normal leading-normal text-sm">
                  {item?.message}
                </p>
                <p className="text-gray-500 font-nromal leading-tight text-sm">
                  {moment(item?.createdAt).startOf("hour").fromNow()}
                </p>
              </div>
            </div>

            {item?.read ? (
              <button
                onClick={() => {
                  dispatch(setSelectedID(item._id));
                  dispatch(markNotificationAsRead(item._id));
                }}
              >
                <RxDotFilled size={30} color={"blue"} />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setSelectedID(item._id));
                  dispatch(markNotificationAsRead(item._id));
                }}
              >
                <RxDot size={30} color={"blue"} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewNotification;
