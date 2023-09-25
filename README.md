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
evans --path ./ --proto greet/v1/greet.proto -p 8080
call Greet

-> name (TYPE_STRING) => node
{
  "greeting": "Hello, node!"
}
```

2. Connect to golang server with ts
```
cd extension
npx tsx client.ts

-> GreetResponse { greeting: 'Hello, Jane!' }
```
