import { setPage } from "@/redux/features/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page, totalPages } = useAppSelector((state) => state.data);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div
      className={`mt-10 flex justify-between items-center flex-wrap mx-1`}
      data-testid="pagination"
    >
      <div className="mb-4"></div>
      <div className="space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`mb-4 px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed`}
          data-testid="previous-page-button"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
