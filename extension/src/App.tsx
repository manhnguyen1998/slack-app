import './App.css'
import { useState } from 'react'
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

// Import service definition that you want to connect to.
import { SlackService } from "../gen/slack/v1/slack_connect";

// The transport defines what type of endpoint we're hitting.
// In our example we'll be communicating with a Connect endpoint.
// If your endpoint only supports gRPC-web, make sure to use
// `createGrpcWebTransport` instead.
const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

// Here we make the client itself, combining the service
// definition with the transport.
const client = createPromiseClient(SlackService, transport);
console.log(client)

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    {
      fromMe: boolean;
      message: string;
    }[]
  >([]);
  return <>
  <ol>
      {messages.map((msg, index) => (
        <li key={index}>
          {`${msg.fromMe ? "ME:" : "SLACK SERVER:"} ${msg.message}`}
        </li>
      ))}
    </ol>
    <p>Send your message to slack channel</p>
  <form onSubmit={async (e) => {
      e.preventDefault();
      // Clear inputValue since the user has submitted.
      setInputValue("");
      // Store the inputValue in the chain of messages and
      // mark this message as coming from "me"
      setMessages((prev) => [
        ...prev,
        {
          fromMe: true,
          message: inputValue,
        },
      ]);

      const response = await client.postMessage({
        message: inputValue,
      });
      setMessages((prev) => [
        ...prev,
        {
          fromMe: false,
          message: response.message,
        },
      ]);
    }}>
  <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
    <button type="submit">Send</button>
  </form>
</>;
}

export default App
