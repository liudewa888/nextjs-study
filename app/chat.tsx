"use client";

import { useState, createContext, useContext } from "react";
// const msgData = [
//   { type: 1, msg: "my msg", uname: "xxx" },
//   { type: 2, msg: "other msg", uname: "xxx" },
// ];

interface Msg {
  uname: string;
  type: number;
  msg: string;
}

const MsgContext = createContext({ msgData: [] as Msg[] });

function Header() {
  return (
    <>
      <div className="h-[40px] bg-[#007bff] flex items-center justify-between px-3">
        <div className="text-[#fff]">
          <span className="text-sm">房间:</span>
          <span className="text-sm">8888</span>
        </div>
        <div className="text-[#fff]">
          <span className="text-sm">昵称:</span>
          <span className="text-sm">xingzi</span>
        </div>
      </div>
    </>
  );
}

function Send() {
  const [inputVal, setInputVal] = useState("");
  const { msgData, setMsgData } = useContext(MsgContext);

  function sendMsg() {
    if (!inputVal) return;
    const type = msgData.length % 2;
    const message = {
      type,
      msg: inputVal,
      uname: "zs",
    };
    const data = msgData.concat([message]);
    setMsgData(data);
    setInputVal("");
  }

  function inputChange(event) {
    setInputVal(event.target.value);
  }
  return (
    <div className="w-full h-12 flex items-center">
      <input
        type="text"
        name="input"
        className="border border-[#ccc] h-10 w-[30%]"
        value={inputVal}
        onChange={inputChange}
      />
      <button className="ml-3" onClick={sendMsg}>
        发送
      </button>
    </div>
  );
}

function Msg() {
  const { msgData } = useContext(MsgContext);
  return (
    <div className="flex-1">
      <ul className="flex flex-col overflow-auto h-[68vh] px-3">
        {msgData.map((item, index) => {
          return (
            <li
              className={`flex flex-col mt-1 ${
                item.type !== 1 ? "items-start" : "items-end"
              }`}
              key={index}
            >
              {item.type !== 1 && (
                <span className="text-xs">{item.uname}:</span>
              )}
              <span>{item.msg}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Content() {
  const initData = [
    { type: 1, msg: "my msg", uname: "xxx" },
    { type: 2, msg: "other msg", uname: "xxx" },
  ];
  const [msgData, setMsgData] = useState(initData);

  return (
    <MsgContext.Provider value={{ msgData, setMsgData }}>
      <div className="flex-1 flex flex-col  border border-[#ccc]">
        <Msg></Msg>
        <Send></Send>
      </div>
    </MsgContext.Provider>
  );
}

export default function Chat() {
  return (
    <div className="flex flex-col w-[80vw] h-[80vh] p-3">
      <Header></Header>
      <Content></Content>
    </div>
  );
}
