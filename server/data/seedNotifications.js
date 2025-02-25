import mongoose from "mongoose";
import Notification from "../models/Notification.js";

const userId = new mongoose.Types.ObjectId("654321abcdef123456789012");

const notifications = [
  {
    userId,
    type: "friend_request",
    message: "John Doe sent you a friend request.",
    read: false,
  },
  {
    userId,
    type: "login_device",
    message: "New login from device XYZ.",
    read: false,
  },
  {
    userId,
    type: "post_update",
    message: "Jane Smith posted an update.",
    read: false,
  },
  {
    userId,
    type: "post_like",
    message: "Alice liked your post.",
    read: false,
  },
  {
    userId,
    type: "comment",
    message: "Bob commented on your post.",
    read: false,
  },
  {
    userId,
    type: "message",
    message: "You have a new message from Charlie.",
    read: false,
  },
  {
    userId,
    type: "friend_request",
    message: "David sent you a friend request.",
    read: false,
  },
  {
    userId,
    type: "login_device",
    message: "New login from device ABC.",
    read: false,
  },
  {
    userId,
    type: "post_update",
    message: "Eve posted an update.",
    read: false,
  },
  {
    userId,
    type: "post_like",
    message: "Frank liked your post.",
    read: false,
  },
  {
    userId,
    type: "comment",
    message: "Grace commented on your post.",
    read: false,
  },
  {
    userId,
    type: "message",
    message: "You have a new message from Henry.",
    read: false,
  },
  {
    userId,
    type: "friend_request",
    message: "Ivy sent you a friend request.",
    read: false,
  },
  {
    userId,
    type: "login_device",
    message: "New login from device XYZ.",
    read: false,
  },
  {
    userId,
    type: "post_update",
    message: "Jack posted an update.",
    read: false,
  },
  {
    userId,
    type: "post_like",
    message: "Karen liked your post.",
    read: false,
  },
  {
    userId,
    type: "comment",
    message: "Leo commented on your post.",
    read: false,
  },
  {
    userId,
    type: "message",
    message: "You have a new message from Mia.",
    read: false,
  },
  {
    userId,
    type: "friend_request",
    message: "Noah sent you a friend request.",
    read: false,
  },
  {
    userId,
    type: "login_device",
    message: "New login from device ABC.",
    read: false,
  },
];

// Insert dummy data into the database
export const seedDatabase = async () => {
  try {
    await Notification.deleteMany({});
    await Notification.insertMany(notifications);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};
