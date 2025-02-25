export interface NotificationProps {
  _id: string;
  userId: string;
  type: string;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface FetchNotificationsResponse {
  notifications: NotificationProps[];
  totalPages: number;
  page: number;
}

export interface IIProps {
  loading: boolean;
  showNotification: boolean;
  notifications: NotificationProps[];
  page: number;
  totalPages: number;
  currentPage: number;
  selectedId: number | null;
}

export type NotificationNavProps = {
  id: string;
  name: string;
};
