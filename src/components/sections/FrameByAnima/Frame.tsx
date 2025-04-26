import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// User data for pending questions
const pendingQuestions = [
  {
    id: 1,
    user: {
      name: "Phoenix Baker",
      username: "@phoenix",
      avatar: "/avatar-4.png",
      background: "avatar-user-squarephoenix-baker-color-background",
      online: true,
    },
    question: "What are the requirements for opening a new store?",
    time: "5min ago",
  },
  {
    id: 2,
    user: {
      name: "Koray Okumus",
      username: "@koray",
      avatar: "/avatar-2.png",
      background: "avatar-user-squarekoray-okumus-color-background",
      online: true,
    },
    question: "How do I manage inventory effectively?",
    time: "4hr ago",
  },
];

export const Frame= (): JSX.Element => {
  return (
    <section className="w-full border-t border-[#d7dee8] bg-gray-50 mt-8">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Pending Questions Panel */}
        <div className="w-full md:w-1/2 lg:w-[360px]">
          <Card className="rounded-none border-0 shadow-none h-full">
            <CardHeader className="border-b border-[#d7dee8] bg-white px-6 py-3">
              <div className="flex items-center justify-between">
                <CardTitle className="font-text-lg-semibold text-[#101828]">
                  Pending Questions
                </CardTitle>
                <Badge className="bg-primary-500 px-1.5 py-0.5 shadow-shadows-shadow-xs">
                  <span className="font-text-xs-medium text-white">02</span>
                </Badge>
              </div>
            </CardHeader>

            {pendingQuestions.map((item) => (
              <CardContent
                key={item.id}
                className="flex flex-col gap-4 border-b border-[#eaecf0] bg-white p-4"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-[5px]" />
                    <div className="flex items-center gap-3">
                      <div
                        className={`relative w-10 h-10 rounded-full bg-${item.user.background}`}
                      >
                        <Avatar className="w-10 h-10 border-[0.75px] border-[#00000014]">
                          <AvatarImage
                            src={item.user.avatar}
                            alt={item.user.name}
                          />
                          <AvatarFallback>
                            {item.user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {item.user.online && (
                          <div className="absolute w-[13px] h-[13px] top-7 left-7 bg-[#17b169] rounded-full border-[1.5px] border-solid border-white" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-text-sm-semibold text-[#344054]">
                          {item.user.name}
                        </span>
                        <span className="font-text-sm-regular text-[#475467]">
                          {item.user.username}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="font-text-sm-regular text-[#475467]">
                    {item.time}
                  </span>
                </div>
                <div className="pl-5">
                  <p className="font-text-sm-regular text-[#475467]">
                    {item.question}
                  </p>
                </div>
              </CardContent>
            ))}
          </Card>
        </div>

        {/* AI Chat Assistant */}
        <div className="w-full md:w-1/2 lg:flex-1">
          <Card className="h-full border-0 shadow-none bg-white">
            <CardContent className="flex flex-col items-center gap-8 py-8 px-4 md:px-8">
              <div className="flex flex-col items-center gap-5 w-full max-w-[486px]">
                <img className="w-16 h-[35.56px]" alt="Logo" src="/logo.svg" />
                <h2 className="font-text-display-sm-semibold text-colorsgrey-5 text-center">
                  Welcome to the AI Chat Assistant
                </h2>
              </div>

              <div className="w-full max-w-[680px]">
                <div className="relative w-full">
                  <Input
                    className="pr-12 py-2.5 border-[#d7dee8] shadow-shadow-skim-xs font-text-md-16-normal text-[#1c222b99]"
                    placeholder="Ask your question here.."
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <img
                      className="w-5 h-5"
                      alt="Send"
                      src="/majesticons-send.svg"
                    />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Collapse button - Only visible on desktop */}
        <button className="hidden md:flex items-center justify-center w-6 h-6 p-1.5 bg-[#e9eff6] rounded-[30px] -rotate-90 self-start">
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};