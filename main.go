package main

import (
	"fmt"
	"os"

	"github.com/slack-go/slack"
)

func main() {
	api := slack.New(os.Getenv("TOKEN"))
	// user, err := api.GetUserInfo(os.Getenv("USER_ID"))
	// options := slack.MsgOption()
	res1, res2, err := api.PostMessage("CLMTRTE2C", slack.MsgOptionText("aaaa", false))
	if err != nil {
		fmt.Printf("%s\n", err)
		return
	}
	// fmt.Printf("ID: %s, Fullname: %s, Email: %s\n", user.ID, user.Profile.RealName, user.Profile.Email)
	fmt.Printf("ID: %s, Fullname: %s", res1, res2)
}
