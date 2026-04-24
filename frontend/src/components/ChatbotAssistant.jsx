import { useState } from 'react';
import { sendChatMessage } from '../services/api';

function ChatbotAssistant() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('Ask about food, fraud, or how to save money.');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim()) return;

    const data = await sendChatMessage(message);
    setResponse(data.response);
    setMessage('');
  };

  return (
    <section className="card">
      <h2>AI Chatbot Assistant</h2>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div className="chat-response">{response}</div>
    </section>
  );
}

export default ChatbotAssistant;
