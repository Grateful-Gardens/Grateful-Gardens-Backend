const express = require("express");
const router = express.Router();
const ChatController = require("../controller/chatController");

router.get("/users/:sender_id/chat/:receiver_id", ChatController.getChat);
router.post("/users/:sender_id/chat/:receiver_id", ChatController.createChat);

module.exports = router;