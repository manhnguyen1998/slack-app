import { createPromiseClient } from "@connectrpc/connect";
import { SlackService } from "./gen/slack/v1/slack_connect";
import { createConnectTransport } from "@connectrpc/connect-node";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
  httpVersion: "1.1"
});

async function main() {
  const client = createPromiseClient(SlackService, transport);
  const res = await client.postMessage({ message: "Jane" });
  console.log(res);
}
void main();
