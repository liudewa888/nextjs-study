"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/config.json')
      .then((response) => response.json())
      .then((data) => setConfig(data))
      .catch((error) => console.error('Error loading config.json:', error));
  }, []);


  useEffect(() => {
    fetch("/api/indicator")
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setData1(data));
  }, []);

  if (!data || !data1) {
    return <></>;
  }

  const columns = ["行情资讯", "早盘播报", "深度解析"];
   const showElement = config.adShow

  const listData = data.datas;

  const newsData = data1.datas;
  function getM(timestamp: any) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  }

  return (
    <div className="pcHtml">
      <div className="mx-auto w-full overflow-auto mt-5">
        {showElement && (
          <div className="w-full h-full transition-all duration-500 opacity-100 mb-5">
            <img
              src="/assets/images/ad1.jpg"
              alt="Image 0"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        )}
        <ul className="grid grid-cols-6 gap-4">
          {listData.map((item, index) => {
            return (
              <li
                className={`p-3 rounded-2xl min-w-[9rem]  ${
                  item.chgVal < 0
                    ? "text-green-600 bg-green-50"
                    : "text-red-500 bg-red-50"
                }`}
                key={"li-" + index}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="text-lg font-bold text-slate-700">
                    {item.name}
                  </div>
                  <div className="text-xl font-bold font-number">
                    <span className="font-number">{item.value.toFixed(2)}</span>
                  </div>
                  <div className="text-base first-line:font-number space-x-2">
                    <span className="font-number">{item.chgVal}</span>
                    <span className="font-number">
                      {(item.chg * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="text-xs">
          <div className=" maPaiban mgt20px indexPb flex justify-between">
            <div className="nrContent">
              <div className="w100 boxsz paiban_4 ">
                <div className="item">
                  <a
                    href={"/article/" + newsData[15].id}
                    target="_blank"
                    className="aimg"
                  >
                    <img
                      src="/assets/images/tit-1.jpeg"
                      className="flexImg_cover"
                    />
                  </a>
                  <a href="article" target="_blank" className="abtn br50">
                    &nbsp;
                  </a>
                </div>

                <div className="item">
                  <a
                    href={"/article/" + newsData[16].id}
                    target="_blank"
                    className="aimg"
                  >
                    <img
                      src="/assets/images/tit-2.jpeg"
                      className="flexImg_cover"
                    />
                  </a>
                  <a href="article" target="_blank" className="abtn br50">
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
            <div className="nrContent">
              <div className="w100 boxsz paiban_3 ">
                {newsData.slice(17, 19).map((item, index) => {
                  return (
                    <a
                      href={"/article/" + item.id}
                      target="_blank"
                      className="quick block mt-[2.2rem]"
                      key={"quick-" + index}
                    >
                      <h3 className="text-[2.5rem] text-[#EF9524] mt-[1.2rem] font-semibold">
                        {item.author}快讯
                      </h3>
                      <span className="block text-[1rem] text-[#999] mt-[1.6rem] ">
                        今日 {getM(item.ctime)}
                      </span>
                      <p className="text-[1.5rem] text-[#666] mt-[1.4rem]  leading-[2.2rem] ">
                        {item.title}...
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
            <div
              className="nrContent"
              style={{ width: "32rem", height: "26rem" }}
            >
              <a
                href={"/article/" + newsData[19].id}
                target="_blank"
                className="aimg"
              >
                <img src="/assets/images/tit-3.jpg" className="flexImg_cover" />
              </a>
            </div>
          </div>
          {showElement && (
            <div className="w-full h-full transition-all duration-500 opacity-100">
              <img
                src="/assets/images/ad2.jpg"
                alt="Image 0"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          )}
          <div className="indexpb nrPaiban flex justify-between">
            {columns.map((item, index) => {
              return (
                <div className="nrContent" key={"column-" + index}>
                  <div className="w100 boxsz paiban_6">
                    <div className="lmitem">
                      <span className="lmtitle">{item}</span>
                    </div>
                    <div className="w100 boxsz">
                      {newsData
                        .slice(3 * index + 7, 3 * index + 10)
                        .map((item, index1) => {
                          return (
                            <div className="item" key={"column1-" + index1}>
                              <a
                                href={"/article/" + item.id}
                                target="_blank"
                                className="aimg"
                              >
                                <img
                                  src={`/assets/images/col-${
                                    index * 3 + index1 + 1
                                  }.jpeg`}
                                  className="flexImg_cover"
                                />
                              </a>
                              <a
                                href={"/article/" + item.id}
                                target="_blank"
                                className="atitle cljb"
                                title=""
                              >
                                {item.title}
                              </a>
                              <a
                                href={"/article/" + item.id}
                                target="_blank"
                                className="articleinfo"
                              >
                                <span>{item.author}</span>{" "}
                                <span>{getM(item.ctime)}</span>
                              </a>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-[1.6rem] font-bold text-slate-700 mt-8 mb-4">
            今日看点
          </h1>
          <ul className="flex flex-col justify-start gap-8">
            {newsData.slice(0, 6).map((item, index) => {
              return (
                <li key={"news" + index}>
                  <a
                    className="bg-white p-6 rounded-xl border-2 border-slate-50 shadow-lg hover:shadow-xl shadow-slate-50 duration-500 flex flex-row gap-6"
                    href={"/article/" + item.id}
                    target="_blank"
                  >
                    <div className="flex flex-col justify-between">
                      <h1 className="text-lg font-bold text-slate-700">
                        {item.title}
                      </h1>
                      <div>
                        <p>{item.author}</p>
                        <div className="space-x-1">
                          <span>今日</span>
                          <span>{getM(item.ctime)}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
