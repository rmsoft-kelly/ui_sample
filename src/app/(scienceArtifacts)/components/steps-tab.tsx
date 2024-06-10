"use client";
import React from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Steps, Tabs } from "../types/steps";

const tabs: Tabs[] = [
  {
    key: "artifact",
    name: "기본정보 건",
    add_button: false,
  },
  {
    key: "subartifact",
    name: "기본정보 점",
    add_button: true,
  },
  {
    key: "excavation",
    name: "발굴정보(기초조사)",
    add_button: false,
  },
  {
    key: "enroll",
    name: "등록정보",
    add_button: false,
  },
  {
    key: "inquiry",
    name: "조사정보(관리정보)",
    add_button: false,
  },
  {
    key: "usage",
    name: "활용정보",
    add_button: true,
  },
  {
    key: "support",
    name: "지원정보",
    add_button: true,
  },
  {
    key: "heritage",
    name: "국가유산정보(아이템)",
    add_button: true,
  },
];

const StepsTab = () => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const splitedPathname = pathname.split("/");

  const step = splitedPathname[3]
    ? tabs.findIndex((tap) => tap.key === splitedPathname[3]) + 1
    : 1;

  const moveToRegister = (to: Steps) => {
    // TODO_store를 통해 현재 페이지의 isDirty상태 체크 & alert 표시

    if (to === "artifact") {
      router.push(`/artifact`);
      return;
    }
    const artId = params.id;

    if (!artId) return alert("경로가 올바르지 않습니다.");
    router.push(`/artifact/${artId}/${to}`);
  };
  return (
    <ul className="col-span-2 flex items-end cursor-default">
      {tabs.map((tab, idx) => {
        const isActive = idx < step;
        return (
          <li
            key={tab.key}
            className={`px-3 py-1 tracking-tighter flex ${
              isActive
                ? "text-primary  border-b-2 border-primary font-semibold"
                : "text-slate-400  border-b border-slate-300"
            }`}
          >
            {tab.name}
            {tab.add_button && (
              <div
                onClick={() => isActive && moveToRegister(tab.key)}
                className={`${
                  isActive ? "cursor-pointer" : "cursor-default"
                } border rounded-full w-5 h-5`}
              >
                +
              </div>
            )}
          </li>
        );
      })}
      <li className="border-b border-slate-300 flex-1"></li>
    </ul>
  );
};

export default StepsTab;
