"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function getM(timestamp: any) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}

function calculateNaturalViews(publishDate: any) {
  const daysPublished =
    (new Date() - new Date(publishDate)) / (1000 * 60 * 60 * 24);
  return Math.floor(100 * Math.log(daysPublished + 1) + 50 * Math.random());
}

export default function Home() {
  const [data, setData] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch("/api/article/" + params.id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <></>;
  }
  const datas = data?.datas;

  const news = {
    title: datas.title,
    origin: datas.author,
    time: datas.ctime,
    viewNum: calculateNaturalViews(datas.ctime),
    content: datas.content,
  };

  return (
    <div className="mx-auto max-w-7xl w-full px-8 overflow-auto">
      <h1 className="text-3xl font-bold text-slate-800 py-2 mt-4">
        {news.title}
      </h1>
      <p className="text-base space-x-2">
        <span>{news.origin}</span>
        <span>今天</span>
        <span>{getM(news.time)}</span>
      </p>
      <div className="text-base text-neutral-500 py-2">
        阅读量 {news.viewNum}
      </div>
      <div
        className="my-4 text-lg text-slate-800 leading-relaxed tracking-wide space-y-2"
        dangerouslySetInnerHTML={{ __html: news.content }}
      ></div>
    </div>
  );
}
