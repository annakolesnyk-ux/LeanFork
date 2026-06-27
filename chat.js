<<<<<<< HEAD
class Chat {
  constructor(title) {
    this.title = title;
    this.messages = [];
    this.pinned = false;
  }

  addMessage(text) {
    if (!text || text.trim() === "") {
      throw new Error("Message cannot be empty");
    }

    this.messages.push(text);
    return this.messages.length;
  }

  deleteMessage(index) {
    if (index < 0 || index >= this.messages.length) {
      throw new Error("Invalid message index");
    }

    this.messages.splice(index, 1);
    return this.messages.length;
  }

  pinChat() {
    if (this.pinned) {
      throw new Error("Chat is already pinned");
    }

    this.pinned = true;
    return this.pinned;
  }
}

=======
class Chat {
  constructor(title) {
    this.title = title;
    this.messages = [];
    this.pinned = false;
  }

  addMessage(text) {
    if (!text || text.trim() === "") {
      throw new Error("Message cannot be empty");
    }

    this.messages.push(text);
    return this.messages.length;
  }

  deleteMessage(index) {
    if (index < 0 || index >= this.messages.length) {
      throw new Error("Invalid message index");
    }

    this.messages.splice(index, 1);
    return this.messages.length;
  }

  pinChat() {
    if (this.pinned) {
      throw new Error("Chat is already pinned");
    }

    this.pinned = true;
    return this.pinned;
  }
}

>>>>>>> 930671ee9814666bb5a71d792c840f1cb0177f4b
module.exports = Chat;