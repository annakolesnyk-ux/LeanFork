const Chat = require("./chat");

describe("Chat", () => {

  // EP: позитивний
  test("Створення чату", () => {
    const chat = new Chat("AI Chat");

    expect(chat.title).toBe("AI Chat");
  });

  // EP: позитивний
  test("Додавання повідомлення", () => {
    const chat = new Chat("AI Chat");

    expect(chat.addMessage("Hello")).toBe(1);
  });

  // EP: негативний
  test("Не можна додати порожнє повідомлення", () => {
    const chat = new Chat("AI Chat");

    expect(() => chat.addMessage("")).toThrow();
  });

  // EP: позитивний
  test("Видалення повідомлення", () => {
    const chat = new Chat("AI Chat");

    chat.addMessage("Hello");

    expect(chat.deleteMessage(0)).toBe(0);
  });

  // BVA: негативний
  test("Неправильний індекс повідомлення", () => {
    const chat = new Chat("AI Chat");

    expect(() => chat.deleteMessage(0)).toThrow();
  });

  // EP: позитивний
  test("Закріплення чату", () => {
    const chat = new Chat("AI Chat");

    expect(chat.pinChat()).toBe(true);
  });

  // EP: негативний
  test("Повторне закріплення чату", () => {
    const chat = new Chat("AI Chat");

    chat.pinChat();

    expect(() => chat.pinChat()).toThrow();
  });

  // BVA
  test("Додавання одного повідомлення", () => {
    const chat = new Chat("AI Chat");

    chat.addMessage("Test");

    expect(chat.messages.length).toBe(1);
  });

  // BVA
  test("Після видалення список порожній", () => {
    const chat = new Chat("AI Chat");

    chat.addMessage("Hello");
    chat.deleteMessage(0);

    expect(chat.messages.length).toBe(0);
  });

  // EP
  test("Новий чат не закріплений", () => {
    const chat = new Chat("AI Chat");

    expect(chat.pinned).toBe(false);
  });

});