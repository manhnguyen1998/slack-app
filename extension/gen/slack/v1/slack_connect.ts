// @generated by protoc-gen-connect-es v1.0.0 with parameter "target=ts"
// @generated from file slack/v1/slack.proto (package slack.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PostMessageRequest, PostMessageResponse } from "./slack_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service slack.v1.SlackService
 */
export const SlackService = {
  typeName: "slack.v1.SlackService",
  methods: {
    /**
     * @generated from rpc slack.v1.SlackService.PostMessage
     */
    postMessage: {
      name: "PostMessage",
      I: PostMessageRequest,
      O: PostMessageResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
