"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Home() {
  // const tabs = ["沪港深", "概念", "一级行业", "二级行业", "三级行业"];
  const tabs = [
    { label: "沪港深", value: 1 },
    { label: "概念", value: 4 },
    { label: "一级行业", value: 0 },
    { label: "二级行业", value: 2 },
    { label: "三级行业", value: 3 },
  ];
  const [tabIndex, setTabIndex] = useState(1);
  const [datas, setDatas] = useState([]);

  function tabClick(val) {
    setTabIndex(val);
    fetch("/api/indicatorView?type=" + val, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setDatas(data.datas.slice(0, 80)));
  }
  useEffect(() => {
    tabClick(1);
  }, []);
  if (!datas.length) {
    return <p>Loading...</p>;
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
                (tabIndex == item.value ? "!bg-sky-500 text-white" : "")
              }
              key={"tab" + index}
              onClick={() => {
                tabClick(item.value);
              }}
            >
              {item.label}
            </a>
          );
        })}
      </ul>
      <div className="overflow-y-auto grow my-4 border rounded-xl p-3">
        <Table
          aria-label="Example static collection table"
          className={"text-xl"}
          classNames={{ th: "bg-gray-100" }}
        >
          <TableHeader>
            <TableColumn>名称</TableColumn>
            <TableColumn>近一月涨跌</TableColumn>
            <TableColumn>近一年涨跌</TableColumn>
            <TableColumn>最新PE</TableColumn>
            <TableColumn>PE分位</TableColumn>
            <TableColumn>最新PB</TableColumn>
            <TableColumn>PB分位</TableColumn>
          </TableHeader>
          <TableBody>
            {datas.map((user) => (
              <TableRow
                key={user.codePre}
                className=" border-b-[#eee] border-b-[1px] h-20"
              >
                <TableCell className="text-center w-[220px]">
                  {user.name}
                  <span className="text-base bg-slate-100 rounded px-2 ml-2 font-number">
                    {user.code}
                  </span>
                </TableCell>
                <TableCell
                  className={
                    "text-center " +
                    (user.one_mouth_close_rate > 0
                      ? "text-red-600"
                      : "text-green-600")
                  }
                >
                  {(user.one_mouth_close_rate * 100).toFixed(2)}%
                </TableCell>
                <TableCell
                  className={
                    "text-center " +
                    (user.one_mouth_close_rate > 0
                      ? "text-red-600"
                      : "text-green-600")
                  }
                >
                  {(user.one_year_close_rate * 100).toFixed(2)}%
                </TableCell>
                <TableCell className="text-center">{user.pe}</TableCell>
                <TableCell className="text-center">
                  {(user.pePer * 100).toFixed(2)}%
                </TableCell>
                <TableCell className="text-center">{user.pb}</TableCell>
                <TableCell className="text-center">
                  {(user.pbPer * 100).toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
