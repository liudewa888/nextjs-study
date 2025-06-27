"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import Home from "./content/home";
import TwoFour from "./content/twoFour";
import Indicator from "./content/indicator";

export default function Index() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["首页", "7x24", "指数看板"];

  function tabClick(val) {
    setTabIndex(val);
  }

  let currentComponent;
  switch (tabIndex) {
    case 0:
      currentComponent = <Home />;
      break;
    case 1:
      currentComponent = <TwoFour />;
      break;
    case 2:
      currentComponent = <Indicator />;
      break;
  }

  return (
    <div className="pcHtml">
      <div className="mx-auto w-full overflow-auto mt-5">
        <div className="h-16 flex justify-end">
          <ul className="flex gap-8 items-center text-xl">
            {tabs.map((item, index) => {
              return (
                <li
                  key={"tabs" + index}
                  onClick={() => {
                    tabClick(index);
                  }}
                >
                  <a className="group">
                    <div
                      className={
                        "flex flex-col gap-2 items-center duration-300 text-xl text-neutral-500 group-hover:text-sky-500 " +
                        (tabIndex == index ? "text-sky-500" : "")
                      }
                    >
                      {item}
                      <div
                        className={
                          "h-0.5 bg-sky-500 duration-300 group-hover:w-5 w-0 " +
                          (tabIndex == index ? "w-5" : "")
                        }
                      ></div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {currentComponent}
      <div className="mgt20px bg_222222">
        <div className=" pdt20px pdb20px flex-heng flex justify-center">
          <div className="flex-grow-0">
            <div className="w100 a_color_5f5f6a color_5f5f6a a_hv_color_cbcbcb a_color_jb">
              <Link href="/about" target="_blank">
                深圳周喜珠宝产业服务有限公司
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              地址：深圳市南山区北环大道11008号豪方天际花园5栋二单元20D&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;|&nbsp;&nbsp;
              联系电话：15816867493&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="color_5f5f6a mgt5px a_color_5f5f6a color_5f5f6a a_hv_color_cbcbcb a_color_jb text-center">
              &nbsp;&nbsp;&nbsp;&nbsp;
              ©2025&nbsp;zhouxi.vip&nbsp;&nbsp;&nbsp;&nbsp; 版权所有&nbsp;
              <a href="https://beian.miit.gov.cn/">粤ICP备2025409893号</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
