"use client";

import { SettingsIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Frame } from "./sections/FrameByAnima";
import { FrameWrapper } from "./sections/FrameWrapperByAnima/FrameWrapper";
import { SideNavigation } from "./sections/SideNavigationByAnima";

export const FinancialsTargets = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#eaecf0] fixed top-0 right-0 left-0 md:left-[248px] z-10 bg-white h-[72px] px-4">
          {/* Left: Hamburger menu (only on mobile) */}
          <div className="block md:hidden">
            <Button variant="ghost" size="icon" className="rounded-md">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>

          {/* Right: Settings and Avatar */}
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon" className="rounded-md">
              <SettingsIcon className="h-5 w-5" />
            </Button>
            <Avatar className="h-10 w-10 rounded-full border border-[#00000014]">
              <AvatarImage src="/avatar.png" alt="User avatar" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main content */}
        <div className="flex h-full">
          {/* Side Navigation */}
          <div className="hidden md:block">
            <SideNavigation />
          </div>

          {/* Main content area */}
          <main className="w-full md:ml-[248px] pt-[73px] overflow-x-hidden">
            <div className="flex flex-col p-5">
              <div className="flex flex-wrap gap-5">
                <FrameWrapper />
              </div>
              <Frame />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
