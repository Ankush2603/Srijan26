"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("./index"), { ssr: false });

export default function DynamicChatWidget() {
  return <ChatWidget />;
}