import StatusCodes from "http-status-codes";
import { seedDatabase } from "../data/seedNotifications.js";
import Notification from "../models/Notification.js";

export const insertNotification = async (_, res) => {
  try {
    await seedDatabase();
    res.status(StatusCodes.OK).json({ message: "Database seeded." });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

// Get all notifications for a user (with pagination)
export const getAllNotifications = async (req, res) => {
  const { userId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  try {
    const notifications = await Notification.find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Notification.countDocuments({ userId });

    res.status(StatusCodes.OK).json({
      notifications,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

// Mark a notification as read
export const markSingleNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Notification not found" });
    }

    notification.read = req.body.read;
    await notification.save();

    res.status(StatusCodes.OK).json(notification);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

// Mark all notifications as read
export const markAllNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    res.status(StatusCodes.OK).json(notification);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};
