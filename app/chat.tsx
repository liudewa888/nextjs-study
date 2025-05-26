"use client";
import Link from "next/link";
export default function Home() {
  const listData = [
    {
      code: "000001.SH",
      codeSuff: "SH",
      codePre: "000001",
      name: "上证指数",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 400526568.4,
      vol: 34756210100,
      yclose: 3348.3717,
      value: 3346.8388,
      high: 3362.307,
      low: 3336.3552,
      iopv: null,
      open: 3346.561,
      chgVal: -1.53,
      chg: -0.0005,
      turnover: 0.0074,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "399001.SZ",
      codeSuff: "SZ",
      codePre: "399001",
      name: "深证成指",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 609433795.8,
      vol: 48451814037,
      yclose: 10132.4124,
      value: 10091.1584,
      high: 10142.9358,
      low: 10044.0788,
      iopv: null,
      open: 10114.6871,
      chgVal: -41.25,
      chg: -0.0041,
      turnover: 0.042,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "399006.SZ",
      codeSuff: "SZ",
      codePre: "399006",
      name: "创业板指",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 268696372.2,
      vol: 14778711915,
      yclose: 2021.4991,
      value: 2005.2587,
      high: 2023.4855,
      low: 1991.7845,
      iopv: null,
      open: 2016.3705,
      chgVal: -16.24,
      chg: -0.008,
      turnover: 0.1259,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "399102.SZ",
      codeSuff: "SZ",
      codePre: "399102",
      name: "创业板综",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 268696372.2,
      vol: 14778711915,
      yclose: 2786.5517,
      value: 2794.3874,
      high: 2797.4629,
      low: 2768.5714,
      iopv: null,
      open: 2783.2543,
      chgVal: 7.84,
      chg: 0.0028,
      turnover: 0.0285,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "000688.SH",
      codeSuff: "SH",
      codePre: "000688",
      name: "科创50",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 16183737.692,
      vol: 332997100,
      yclose: 980.5781,
      value: 982.2605,
      high: 985.4719,
      low: 978.1416,
      iopv: null,
      open: 982.0651,
      chgVal: 1.68,
      chg: 0.0017,
      turnover: 0.0057,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "000698.SH",
      codeSuff: "SH",
      codePre: "000698",
      name: "科创100",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 17392028.591,
      vol: 403444600,
      yclose: 994.3734,
      value: 998.163,
      high: 1001.9274,
      low: 991.2142,
      iopv: null,
      open: 998.2671,
      chgVal: 3.79,
      chg: 0.0038,
      turnover: 0.0105,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "000985.CSI",
      codeSuff: "CSI",
      codePre: "000985",
      name: "中证全指",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 993315303.546,
      vol: 80167617600,
      yclose: 4771.6242,
      value: 4776.1769,
      high: 4793.2434,
      low: 4751.3878,
      iopv: null,
      open: 4767.2691,
      chgVal: 4.55,
      chg: 0.001,
      turnover: 0.0116,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "000016.SH",
      codeSuff: "SH",
      codePre: "000016",
      name: "上证50",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 59924577.686,
      vol: 3071338100,
      yclose: 2711.8524,
      value: 2699.4225,
      high: 2719.7011,
      low: 2692.6792,
      iopv: null,
      open: 2708.2166,
      chgVal: -12.43,
      chg: -0.0046,
      turnover: 0.0018,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "000300.SH",
      codeSuff: "SH",
      codePre: "000300",
      name: "沪深300",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 208876792.149,
      vol: 10960120700,
      yclose: 3882.2741,
      value: 3860.1067,
      high: 3884.537,
      low: 3849.0384,
      iopv: null,
      open: 3875.7891,
      chgVal: -22.17,
      chg: -0.0057,
      turnover: 0.0034,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "000852.SH",
      codeSuff: "SH",
      codePre: "000852",
      name: "中证1000",
      capitalOrIndex: "index_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 191925536.269,
      vol: 15598879400,
      yclose: 5989.6752,
      value: 6028.7861,
      high: 6038.8058,
      low: 5981.8422,
      iopv: null,
      open: 5991.8585,
      chgVal: 39.11,
      chg: 0.0065,
      turnover: 0.0159,
      adjFactor: 1,
      isStop: 0,
      time: "15:00:00",
    },
    {
      code: "HSI.HI",
      codeSuff: "HI",
      codePre: "HSI",
      name: "恒生指数",
      capitalOrIndex: "index_hk_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 223520328.6,
      vol: 14059289856,
      yclose: 23601.26,
      value: 23282.33,
      high: 23571.02,
      low: 23234.27,
      iopv: null,
      open: 23505.9,
      chgVal: -318.93,
      chg: -0.0135,
      turnover: 0.0138,
      adjFactor: 1,
      isStop: 0,
      time: null,
    },
    {
      code: "HSTECH.HI",
      codeSuff: "HI",
      codePre: "HSTECH",
      name: "恒生科技",
      capitalOrIndex: "index_hk_hs",
      date: "2025-05-25T16:00:00.000+0000",
      amount: 59224697.9,
      vol: 1590555456,
      yclose: 5246.87,
      value: 5157.65,
      high: 5233.97,
      low: 5138.85,
      iopv: null,
      open: 5229.96,
      chgVal: -89.22,
      chg: -0.017,
      turnover: 0.009,
      adjFactor: 1,
      isStop: 0,
      time: null,
    },
  ];

  const newsData = [
    {
      imgUrl: null,
      author: "证券时报网",
      ctime: 1748265769,
      id: 39235,
      title: "美团财报出炉！高频骑手收入环比增加！王兴回应京东外卖百亿补贴！",
    },
    {
      imgUrl: null,
      author: "券商中国",
      ctime: 1748261268,
      id: 39231,
      title: "利空突袭！财报不及预期 名创优品突然暴跌！",
    },
    {
      imgUrl:
        "https://cheesestock.oss-cn-qingdao.aliyuncs.com/cheese/news/2025-05-26/D25545448116681507940_w210h154.jpg",
      author: "人民财讯",
      ctime: 1748260900,
      id: 39232,
      title: "国务院国资委：加快培育启航企业、领军企业、独角兽企业",
    },
    {
      imgUrl: null,
      author: "第一财经",
      ctime: 1748260077,
      id: 39229,
      title: "美团王兴回应京东外卖百亿补贴：将不惜代价赢得竞争",
    },
    {
      imgUrl:
        "https://cheesestock.oss-cn-qingdao.aliyuncs.com/cheese/news/2025-05-26/D24985726624158496423_w210h154.jpg",
      author: "21世纪经济报道",
      ctime: 1748259656,
      id: 39230,
      title: "隆基绿能创始人李振国辞职 知情人士：系请辞、专注研发",
    },
    {
      imgUrl: null,
      author: "每日经济新闻",
      ctime: 1748258966,
      id: 39233,
      title:
        "英伟达在华市场份额大跌45%！黄仁勋最新专访 呼吁美国政府重新审视对华出口管制",
    },
    {
      imgUrl: null,
      author: "中国经营报",
      ctime: 1748257938,
      id: 39226,
      title: "视频疯传！余承东开车睡觉？最新回应",
    },
    {
      imgUrl: null,
      author: "新华网",
      ctime: 1748257417,
      id: 39227,
      title: "国务院、中央军委公布实施《重要军工设施保护条例》",
    },
    {
      imgUrl:
        "https://cheesestock.oss-cn-qingdao.aliyuncs.com/cheese/news/2025-05-26/D24759981447671767081_w210h154.jpg",
      author: "数据宝",
      ctime: 1748257037,
      id: 39228,
      title: "重组题材持续火爆！小市值国资重组潜力股出炉",
    },
    {
      imgUrl: null,
      author: "每日经济新闻",
      ctime: 1748256967,
      id: 39234,
      title:
        "结婚就发钱！韩国人结婚奖励至多2000万韩元 还能报销约会经费、蜜月旅行支出等",
    },
  ];

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
      <div className="layout pdt15px pdb15px">
        <div className="flex-heng w100 flex-align-center">
          {/* <a href="#" className="h70px mgr50px">
            <img src="/assets/images/6387574154819607883399431.gif" className="h70px" />
          </a> */}
          <div className="flex-grow-1 pdt10px flex-heng fs20 h40px fsb a_color_4d4d4d">
            <a className="navli navli_0" href="#">
              首页
            </a>

            <div className="flex-grow-1 navkg">|</div>
            <a className="navli navli_7" href="#">
              行情资讯
            </a>

            <div className="flex-grow-1 navkg">|</div>
            <a className="navli navli_9" href="#">
              深度解析
            </a>

            <div className="flex-grow-1 navkg">|</div>
            <a className="navli navli_10" href="#">
              早盘播报
            </a>

            <div className="flex-grow-1 navkg">|</div>
            <a className="navli navli_11" href="#">
              期权研究
            </a>
          </div>
        </div>
      </div>
      <div className="layout psr h42px">
        <div className="w100 navLine h42px bg_004588 fs17px flex-heng flex-align-center tac fsb">
          <a className="item iarrow item_a17 flex-grow-1" href="#">
            每日早盘
          </a>

          <a className="item iarrow item_a18 flex-grow-1" href="#">
            深度分析
          </a>

          <a className="item iarrow item_a22 flex-grow-1" href="#">
            最新动态
          </a>

          <a className="item iarrow item_a24 flex-grow-1" href="#">
            合作伙伴
          </a>
        </div>
        <div className="w100 navLin_emore h42px bg_004588_95 fs17px tac a_color_fff a_hv_color_EF9524 a_color_jb fsb">
          <div className="w100 flex-heng flex-align-center">
            <a className="flex-grow-1"></a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl w-full px-8 overflow-auto mt-5">
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
        <div>
          <h1 className="text-2xl font-bold text-slate-700 my-8">今日看点</h1>
          <ul className="flex flex-col justify-start gap-8">
            {newsData.map((item, index) => {
              return (
                <li key={"news" + index}>
                  <a
                    className="bg-white p-6 rounded-xl border-2 border-slate-50 shadow-lg hover:shadow-xl shadow-slate-50 duration-500 flex flex-row gap-6"
                    href="/article"
                    target="_blank"
                  >
                    <div className="flex flex-col justify-between">
                      <h1 className="text-lg font-bold text-slate-700">
                        {item.title}
                      </h1>
                      <div>
                        <p>{item.author}</p>
                        <div className="space-x-1">
                          <span>今天</span>
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
        <div className="layout pdt20px pdb20px flex-heng flex justify-center">
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
