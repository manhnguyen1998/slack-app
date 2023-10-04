# Demo
Send your message to Slack channel from chrome extension
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnAxY3IzcGRpM25qdWZ3NWwwbWFyYzMybHdrcDN6dTZ1M2dycHI2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LfuheqsT32MgK3vZWD/giphy.gif)
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

2. Using client
```
cd extension
yarn
yarn run dev
open http://127.0.0.1:5173/ to check

-> PostMessageResponse { response: 'Sending message successfully, Jane!' }
```

3. Using extension
```
cd extension
yarn build
```
- Load /dist to your chrome
# Go server hot reloading 
```
go install github.com/cosmtrek/air@latest
air init
air
```
