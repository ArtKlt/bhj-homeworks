document.addEventListener('DOMContentLoaded', function () {
    const chatWidget = document.querySelector('.chat-widget');
    const inputField = document.getElementById('chat-widget__input');
    const messagesContainer = document.getElementById('chat-widget__messages');
  

    chatWidget.addEventListener('click', function () {
      chatWidget.classList.add('chat-widget_active');
    });
  

    inputField.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && inputField.value.trim() !== '') {
        sendMessage(inputField.value.trim(), 'message_client');
        inputField.value = '';
        receiveRandomMessage();
      }
    });
  

    function sendMessage(text, className) {
      const message = createMessage(text, className);
      messagesContainer.appendChild(message);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    function createMessage(text, className) {
      const now = new Date();
      const time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
  
      const messageElement = document.createElement('div');
      messageElement.className = 'message ' + className;
      messageElement.innerHTML = `
        <div class="message__time">${time}</div>
        <div class="message__text">${text}</div>
      `;
  
      return messageElement;
    }
  
    function receiveRandomMessage() {
      const robotResponses = [
        'Да, конечно!',
        'Как я могу вам помочь?',
        'Интересно, расскажите подробнее.',
        'Пожалуйста, задавайте свои вопросы.',
      ];
  
      const randomResponse = robotResponses[Math.floor(Math.random() * robotResponses.length)];
      sendMessage(randomResponse, '');
    }
  });