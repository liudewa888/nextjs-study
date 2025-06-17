"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/twoFour", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <p>Loading...</p>;
  }
  const datas = data?.datas;
  datas.sort((a, b) => b.ctime - a.ctime);
  function getM(timestamp: any) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  }
  return (
    <div className="flex-auto pl-2 pt-4 overflow-auto scroll-smooth">
      <ul className="flex flex-col justify-start">
        {datas.map((item, index) => {
          return (
            <li key={"twoFour" + index}>
              <div className="flex flex-row border-l-2 border-slate-200 border-dashed gap-2">
                <div className="flex-none h-4 w-4 rounded-full border-2 border-solid border-slate-200 bg-white mt-1.5 -translate-x-[0.5625rem]"></div>
                <div className="flex-none w-16 pt-0.5 pb-8 -translate-x-1">
                  <div className="flex flex-col items-center ">
                    <span>今日</span>
                    <span>{getM(item.ctime)}</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-medium text-slate-700 tracking-wide text-justify">
                    {item.title}
                  </h1>
                  <p className="pb-8 text-xl  tracking-wide leading-relaxed text-justify break-words text-[#666]">
                    {item.content}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
