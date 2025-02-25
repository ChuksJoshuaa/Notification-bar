import { LOCAL_URL } from "@/constants";
import { FetchNotificationsResponse, IIProps } from "@/interface";
import { RootState } from "@/redux/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotifications = createAsyncThunk<
  FetchNotificationsResponse,
  string,
  { state: RootState }
>("notifications/fetchNotifications", async (userId, { getState }) => {
  const { page } = getState().data;
  const response = await axios.get(
    `${LOCAL_URL}/notification/${userId}?page=${page}&limit=10`
  );
  return response.data;
});

export const markNotificationAsRead = createAsyncThunk<
  void,
  string,
  { state: RootState }
>("notifications/markAsRead", async (notificationId, { getState }) => {
  const notification = getState().data.notifications.find(
    (n) => n._id === notificationId
  );
  if (notification) {
    await axios.patch(`${LOCAL_URL}/notification/${notificationId}/read`, {
      read: !notification.read,
    });
  }
});

const initialState: IIProps = {
  loading: true,
  showNotification: true,
  notifications: [],
  page: 1,
  totalPages: 10,
  currentPage: 1,
  selectedId: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setShowNotification: (state, action) => {
      state.showNotification = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    markAllAsRead: (state) => {
      state.notifications.forEach((n) => (n.read = true));
    },
    setSelectedID: (state, action) => {
      state.selectedId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload.notifications;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.page;
      state.loading = false;
      state.selectedId = null;
    });

    builder.addCase(markNotificationAsRead.fulfilled, (state, action) => {
      const notification = state.notifications.find(
        (n) => n._id === action.meta.arg
      );
      if (notification) notification.read = true;
    });
  },
});

export const {
  setLoader,
  setShowNotification,
  markAllAsRead,
  setPage,
  setSelectedID,
} = dataSlice.actions;

export default dataSlice.reducer;
