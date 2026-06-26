const express = require("express");
const Chat = require("./chat");

const app = express();

app.use(express.json());

// Перевірка працездатності сервера
app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

// Створення нового чату
app.post("/chat", (req, res) => {
    const { title } = req.body;

    const chat = new Chat(title);

    res.json({
        message: "Chat created successfully",
        chat: {
            title: chat.title,
            pinned: chat.pinned,
            messages: chat.messages
        }
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});