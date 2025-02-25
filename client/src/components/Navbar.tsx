import { setShowNotification } from "@/redux/features/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { defaultImageURl } from "@/utils/data";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { showNotification } = useAppSelector((state) => state.data);
  return (
    <div className="flex justify-between items-center pl-5 py-2">
      <div></div>
      <div className="flex items-center space-x-3 justify-start">
        <button className="py-2 px-2 bg-gray-200 rounded-full">
          <GiHamburgerMenu size={20} />
        </button>
        <button className="py-2 px-2 bg-gray-200 rounded-full">
          <FaFacebookMessenger size={20} />
        </button>
        <button className="py-2 px-2 bg-gray-200 rounded-full">
          <FaBell size={20} />
        </button>
        <div
          className="relative mt-2"
          onClick={() => dispatch(setShowNotification(!showNotification))}
        >
          <button className="w-[35px] h-[35px] rounded-full overflow-hidden">
            <img src={defaultImageURl} alt="photo_url" />
          </button>

          {showNotification ? (
            <button
              className={`py-[1px] px-[1px] bg-gray-200 rounded-full absolute right-0 bottom-[0.4em]`}
            >
              <IoIosArrowDown size={10} color={"#222"} />
            </button>
          ) : (
            <button
              className={`py-[1px] px-[1px] bg-gray-200 rounded-full absolute right-0 bottom-[0.4em]`}
            >
              <IoIosArrowUp size={10} color={"#222"} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
