import LiveChat from "./liveChat.model.js";

export default function liveChatSocket(io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Join user room
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined room`);
    });

    // Send message
    socket.on("sendMessage", async (data) => {
      const { senderId, receiverId, message } = data;

      const newMessage = await LiveChat.create({ senderId, receiverId, message });

      io.to(receiverId).emit("receiveMessage", newMessage);
      io.to(senderId).emit("messageDelivered", newMessage);
    });

    // Typing indicator
    socket.on("typing", (data) => {
      io.to(data.receiverId).emit("typing", { senderId: data.senderId });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}
