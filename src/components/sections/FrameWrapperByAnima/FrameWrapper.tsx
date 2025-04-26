import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const FrameWrapper = (): JSX.Element => {
  // Data for steps completed
  const completedSteps = [
    { name: "Profile Setup", completed: true },
    { name: "Initial Training", completed: true },
    { name: "Legal Documents", completed: true },
  ];

  // Data for steps remaining
  const remainingSteps = [
    { name: "Financial Integration", completed: true },
    { name: "Final Review", completed: true },
  ];

  // Data for franchisee stages
  const franchiseeStages = [
    { name: "Stage 1 (Initial Inquiry)", color: "primary-700", count: "02" },
    {
      name: "Stage 2 (Document Submission)",
      color: "primary-500",
      count: "07",
    },
    { name: "Stage 3 ((Training)", color: "primary-200", count: "05" },
  ];

  // Data for prospect leads
  const prospectLeads = [
    { name: "Wade Warren", stage: "Initial Inquiry", avatar: "/avatar-9.png" },
    { name: "Ava Wright", stage: "Initial Inquiry", avatar: "/avatar-10.png" },
    { name: "Cody Fisher", stage: "Initial Inquiry", avatar: "/avatar-11.png" },
  ];

  return (
    <>
      {/* Account Progress Card */}
      <Card className="w-full md:w-[316px] h-[586px] border border-[#eaecf0] shadow-shadows-shadow-xs">
        <CardContent className="p-6 flex flex-col gap-5 h-full">
          <div className="flex flex-col items-center gap-6 pb-4 border-b border-[#e9eff6] flex-1">
            <CardTitle className="font-semibold text-black text-base">
              Account Progress
            </CardTitle>

            <div className="relative w-[148px] h-[148px]">
              <div className="relative w-[133px] h-[133px] top-[7px] left-[7px]">
                <div className="absolute w-[133px] h-[133px] top-0 left-0 bg-[url(/background.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[133px] h-[133px] top-0 left-0"
                    alt="Line"
                    src="/line.svg"
                  />
                </div>

                <div className="absolute h-[29px] top-[52px] left-[42px] text-[#101828] text-[30px] text-center leading-[38px] whitespace-nowrap font-semibold">
                  85%
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Card className="bg-[#f6f7fb] border-none shadow-none">
              <CardContent className="p-4 flex flex-col gap-4">
                <h3 className="font-semibold text-[#1c222b] text-sm">
                  Steps Completed
                </h3>

                <div className="flex flex-col gap-4 justify-between flex-1">
                  {completedSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />
                        <span className="font-medium text-[#455468] text-sm">
                          {step.name}
                        </span>
                      </div>
                      <img
                        className="w-4 h-4"
                        alt="Completed"
                        src="/teenyicons-tick-circle-solid.svg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#f6f7fb] border-none shadow-none">
              <CardContent className="p-4 flex flex-col gap-4">
                <h3 className="font-semibold text-[#1c222b] text-sm">
                  Steps Remaining
                </h3>

                <div className="flex flex-col gap-2">
                  {remainingSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />
                        <span className="font-medium text-[#455468] text-sm">
                          {step.name}
                        </span>
                      </div>
                      <img
                        className="w-4 h-4"
                        alt="Completed"
                        src="/teenyicons-tick-circle-solid.svg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Middle Column */}
      <div className="w-full md:w-[386px] flex flex-col gap-5">
        {/* Total Franchisees Onboard Card */}
        <Card className="h-[284px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <CardTitle className="font-semibold text-black text-base">
                Total Franchisees Onboard
              </CardTitle>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <span className="text-[#101828] text-[30px] font-semibold">
                    14
                  </span>
                  <Badge className="bg-transparent text-[#057647] border-[1.5px] border-[#069454] rounded-full pl-2 pr-2.5 py-0.5 flex items-center gap-1">
                    <img
                      className="w-3 h-3"
                      alt="Trend up"
                      src="/trend-up-01.svg"
                    />
                    <span>7.4%</span>
                  </Badge>
                </div>

                <div className="flex -ml-px">
                  {[3, 4, 5, 6, 7].map((num) => (
                    <div
                      key={num}
                      className={`relative w-[27px] h-[27px] rounded-full overflow-hidden border-[1.5px] border-solid border-white -ml-1 ${
                        num === 7
                          ? "bg-[#f2f4f7]"
                          : "bg-[#e5e7eb]"
                      }`}
                    >
                      <div className="w-6 h-6 border-[0.5px] border-solid rounded-full border-[#00000014]">
                        {num === 7 && (
                          <div className="absolute w-6 top-0.5 left-0 text-[#475467] text-xs font-semibold text-center">
                            +7
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 w-full">
              <div className="w-[100px] h-3 bg-primary-700 rounded" />
              <div className="w-[76px] h-3 bg-primary-500 rounded" />
              <div className="flex-1 h-3 bg-primary-200 rounded" />
            </div>

            <div className="flex flex-col gap-4">
              {franchiseeStages.map((stage, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 bg-${stage.color} rounded`} />
                    <span className="text-[#475467] text-sm font-medium">
                      {stage.name}
                    </span>
                  </div>
                  <span className="text-[#1c222b] text-lg font-semibold">
                    {stage.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Wellbeing Card */}
        <Card className="h-[282px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4 pb-3 border-b border-[#e9eff6]">
              <CardTitle className="font-semibold text-black text-base">
                Financial Wellbeing
              </CardTitle>

              <div className="flex items-center justify-around gap-4 w-full">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#101828] text-[30px] font-semibold">
                        20
                      </span>
                      <span className="text-[#475467] text-sm font-medium">
                        Total Franchisees
                      </span>
                    </div>

                    <Badge className="bg-transparent text-[#057647] border-[1.5px] border-[#069454] rounded-full pl-2 pr-2.5 py-0.5 flex items-center gap-1">
                      <img
                        className="w-3 h-3"
                        alt="Trend up"
                        src="/trend-up-01.svg"
                      />
                      <span>2.1%</span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <Card className="flex-1 bg-[#f6f7fb] border-none shadow-none">
                <CardContent className="p-4 flex flex-col items-center gap-2">
                  <h3 className="font-semibold text-[#455468] text-sm">
                    Target
                  </h3>
                  <span className="text-[#1c222b] text-xl font-semibold leading-[38px]">
                    $500,000
                  </span>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-[#f6f7fb] border-none shadow-none">
                <CardContent className="p-4 flex flex-col items-center gap-2">
                  <h3 className="font-semibold text-[#455468] text-sm">
                    Current
                  </h3>
                  <span className="text-[#1c222b] text-xl font-semibold leading-[38px]">
                    $450,000
                  </span>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[386px] flex flex-col gap-5">
        {/* Key Insights & Feedback Card */}
        <Card className="h-[282px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <CardTitle className="font-semibold text-black text-base">
                Key Insights &amp; Feedback
              </CardTitle>
            </div>

            <div className="flex justify-between pb-3 border-b border-[#e9eff6] w-full">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#101828] text-[30px] font-semibold">
                        10%
                      </span>
                      <span className="text-[#475467] text-sm font-medium">
                        Sales Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-9 h-9">
                      <AvatarImage src="/image-14.png" alt="Top performer" />
                      <AvatarFallback className="border-[0.75px] border-[#00000014]"></AvatarFallback>
                    </Avatar>

                    <Badge className="bg-[#d5f1ff80] text-primary-600 border border-[#b9e9ff] rounded-[20px] px-3 py-0.5 font-medium text-xs">
                      Top Performer
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#f6f7fb] border-none shadow-none flex-1">
              <CardContent className="p-4 flex flex-col gap-1.5">
                <h3 className="font-semibold text-[#1c222b] text-sm">
                  Feedback
                </h3>
                <div className="flex items-center gap-2">
                  <div className="h-9 pt-1">
                    <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />
                  </div>
                  <p className="font-medium text-[#455468] text-xs leading-[18px] w-72">
                    Franchisees are requesting more detailed training materials.
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Prospect Leads Card */}
        <Card className="h-[284px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <CardTitle className="font-semibold text-black text-base">
                Prospect Leads
              </CardTitle>
            </div>

            <div className="flex flex-col gap-3">
              {prospectLeads.map((lead, index) => (
                <Card
                  key={index}
                  className="bg-[#f6f7fb] border-none shadow-none"
                >
                  <CardContent className="px-4 py-2.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2.5">
                        <Avatar className="w-9 h-9">
                          <AvatarImage src={lead.avatar} alt={lead.name} />
                          <AvatarFallback className="border-[0.75px] border-[#00000014]"></AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-[#101828] text-sm">
                          {lead.name}
                        </span>
                      </div>
                      <div className="font-medium text-sm">
                        <span className="text-[#1c222bb2]">Stage:</span>
                        <span className="text-[#475467]">&nbsp;</span>
                        <span className="text-[#1c222be6]">{lead.stage}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};