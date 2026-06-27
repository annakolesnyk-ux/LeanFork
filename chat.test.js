const Chat = require("./chat");

describe("Chat", () => {
  test("Створення чату", () => {
    const chat = new Chat("AI Chat");

    expect(chat.title).toBe("AI Chat");
  });

  test("Додавання повідомлення", () => {
    const chat = new Chat("AI Chat");

    expect(chat.addMessage("Hello")).toBe(1);
  });

  test("Не можна додати порожнє повідомлення", () => {
    const chat = new Chat("AI Chat");

    expect(() => chat.addMessage("")).toThrow();
  });

  test("Видалення повідомлення", () => {
    const chat = new Chat("AI Chat");

    chat.addMessage("Hello");

    expect(chat.deleteMessage(0)).toBe(0);
  });

  test("Неправильний індекс повідомлення", () => {
    const chat = new Chat("AI Chat");

    expect(() => chat.deleteMessage(0)).toThrow();
  });

  test("Закріплення чату", () => {
    const chat = new Chat("AI Chat");

    expect(chat.pinChat()).toBe(true);
  });

  test("Повторне закріплення чату", () => {
    const chat = new Chat("AI Chat");

    chat.pinChat();

    expect(() => chat.pinChat()).toThrow();
  });

  test("Додавання одного повідомлення", () => {
    const chat = new Chat("AI Chat");

    chat.addMessage("Test");

    expect(chat.messages.length).toBe(1);
  });

  test("Після видалення список порожній", () => {
    const chat = new Chat("AI Chat");

    chat.addMessage("Hello");
    chat.deleteMessage(0);

    expect(chat.messages.length).toBe(0);
  });

  test("Новий чат не закріплений", () => {
    const chat = new Chat("AI Chat");

    expect(chat.pinned).toBe(false);
  });
});