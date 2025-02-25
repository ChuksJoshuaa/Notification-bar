import express from "express";
import {
  getAllNotifications,
  insertNotification,
  markAllNotification,
  markSingleNotification,
} from "../controllers/Notification.js";

const router = express();

router.post("/seed", insertNotification);
router.get("/:userId", getAllNotifications);
router.patch("/:id/read", markSingleNotification);
router.patch("/:userId/read-all", markAllNotification);

export default router;
