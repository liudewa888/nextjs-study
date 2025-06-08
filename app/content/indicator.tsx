import { useEffect, useState } from "react";

export default function Home() {
  const tabs = ["沪港深", "概念", "一级行业", "二级行业", "三级行业"];
  const [tabIndex, setTabIndex] = useState(0);

  function tabClick(val) {
    console.log(val,98);
    
    setTabIndex(val);
  }
  return (
    <div className="w-full grow flex flex-col">
      <h1 className="flex-none text-3xl font-bold text-slate-800 pb-4">
        指数看板
      </h1>
      <ul className="flex-none flex gap-2 items-center text-xl">
        {tabs.map((item, index) => {
          return (
            <a
              className={
                "pointer-events-auto rounded-md px-4 py-2 text-lg font-semibold leading-5 duration-200 bg-sky-500/0 hover:bg-slate-100 " +
                (tabIndex == index ? "!bg-sky-500 text-white" : "")
              }
              key={"tab" + index}
              onClick={() => {
                tabClick(index);
              }}
            >
              {item}
            </a>
          );
        })}
      </ul>
      <div className="overflow-y-auto grow my-4 border rounded-xl"></div>
    </div>
  );
}
