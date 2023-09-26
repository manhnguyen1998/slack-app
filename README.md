# slack-app
1. create your own envrc
    ```
    cp .envrc.sample .envrc
    ```
2. Modify your .envrc and `direnv allow `

```
go run main.go
```
# Generate grpc code
1. Golang
```
cd go-server
buf generate
```
2. Nodejs
```
cd extension
npx buf generate
```
# Test grpc
1. Golang server
```
cd go-server
go run main.go
```
- Test server
```bash
evans --path ./ --proto slack/v1/slack.proto -p 8080
slack.v1.SlackService@127.0.0.1:8080> call PostMessage
message (TYPE_STRING) => manh
{
  "response": "Hello, manh!"
}
```

2. Connect to golang server with ts
```
cd extension
npx tsx client.ts

-> PostMessageResponse { response: 'Sending message successfully, Jane!' }
```

# Go server hot reloading 
```
go install github.com/cosmtrek/air@latest
air init
air
```
