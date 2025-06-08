export default function Home() {
  return (
    <div className="flex-auto pl-2 pt-4 overflow-auto scroll-smooth">
      <ul className="flex flex-col justify-start">
        <li>
          <div className="flex flex-row border-l-2 border-slate-200 border-dashed gap-2">
            <div className="flex-none h-4 w-4 rounded-full border-2 border-solid border-slate-200 bg-white mt-1.5 -translate-x-[0.5625rem]"></div>
            <div className="flex-none w-16 pt-0.5 pb-8 -translate-x-1">
              <div className="flex flex-col items-center ">
                <span>今天</span>
                <span>22:23</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-medium text-slate-700 tracking-wide text-justify">
                2025粤港澳大湾区车展预定成交金额破100亿元
              </h1>
              <p className="pb-8 text-xl  tracking-wide leading-relaxed text-justify break-words text-[#666]">
                6月8日，2025粤港澳大湾区车展正式闭幕。本届车展在9天展期内吸引约89万人次观展，预定成交车辆42823辆，预定成交金额约100.7亿元。据悉，本届车展规模约26万平方米。其中，8万平方米空间为互动体验区，集中展示了产业创新技术应用，并提供试乘试驾等体验。（上证报）
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
