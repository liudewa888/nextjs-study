import Link from "next/link";
export default function Home() {
  return (
    <div className="pcHtml">
      <div></div>
      <div></div>
      {/* <div className="layout h40px lh40px">
        <div className="flex-heng w100">
          <div className="flex-grow-1"></div>
          <a
            className="mgl50px hx_text_decoration color_6A6A6A fs15px"
            href="#"
          >
            <i className="fa fa-info-circle mgr5px"></i>关于我们
          </a>
          <a
            className="mgl50px hx_text_decoration color_6A6A6A fs15px"
            href="#"
          >
            <i className="fa fa-bars mgr5px"></i>网站声明
          </a>
          <a
            className="mgl50px hx_text_decoration color_6A6A6A fs15px"
            href="#"
          >
            <i className="fa fa-phone mgr5px"></i>联系方式
          </a>
          <a
            className="mgl50px hx_text_decoration color_6A6A6A fs15px"
            href="#"
          >
            <i className="fa fa-map mgr5px"></i>网站地图
          </a>
        </div>
      </div> */}
      {/* <div className="layout">
        <div className="w100 boxsz ovh ggwDiv" data-wz="1">
          <div className="ggwbox flex-heng" style={{ width: "100%" }}>
            <div className="item">
              <a href=""  className="aimg dpbk w100">
                <img
                  src="/assets/images/6387506091350289455385024.jpg"
                  className="dpbk w100"
                />
              </a>
            </div>
          </div>
          <div className="ggwcircle"></div>
        </div>
      </div> */}
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

      <div className="layout ggw_2">
        <div className="w100 boxsz ovh ggwDiv" data-wz="2">
          <div className="ggwbox flex-heng" style={{ width: 0 }}></div>
          <div className="ggwcircle"></div>
        </div>
      </div>
      <div className="layout maPaiban mgt20px psr indexPb">
        <div className="nrContent">
          <div className="w100 boxsz paiban_4 paiban_mrys">
            <div className="item">
              <a href="#" className="aimg">
                <img
                  src="/assets/images/6388350616212510747966261.jpeg"
                  className="flexImg_cover"
                />
              </a>
              <a href="#" className="ahvbg bgjb">
                &nbsp;
              </a>
              <a href="#" className="abtn br50">
                &nbsp;
              </a>
            </div>

            <div className="item">
              <a href="#" className="aimg">
                <img
                  src="/assets/images/6388350627800882532495041.jpeg"
                  className="flexImg_cover"
                />
              </a>
              <a href="#" className="ahvbg bgjb">
                &nbsp;
              </a>
              <a href="#" className="abtn br50">
                &nbsp;
              </a>
            </div>
          </div>
        </div>
        <div className="nrContent">
          <div className="w100 boxsz paiban_3 paiban_mrys">
            <div className="item">
              <a
                href="#"
                className="atitle cljb"
                title="AT&T斥57.5亿美元收购Lumen旗下零售光纤业务"
              >
                AT&T斥57.5亿美元收购Lumen旗下零售光...
              </a>
              <a
                href="#"
                className="articleinfo"
                title="AT&T斥57.5亿美元收购Lumen旗下零售光纤业务"
              >
                <span>30分钟前</span>
              </a>
            </div>
            <div className="item">
              <a
                href="#"
                className="atitle cljb"
                title="算法推荐乱象凸显 中央网信办督导抖音、小红书等平台优化调整"
              >
                算法推荐乱象凸显 中央网信办督导抖音、小红书等平...
              </a>

              <a href="#" className="atitle cljb" title="格隆汇快讯">
                格隆汇快讯
              </a>

              <a href="#" className="atitle cljb" title="格隆汇快讯">
                格隆汇快讯
              </a>

              <a href="#" className="atitle cljb" title="格隆汇快讯">
                格隆汇快讯
              </a>

              <a
                href="#"
                className="atitle cljb"
                title="新湖期货：美豆及连粕反弹仍可能持续 等待阿根廷产量损失明朗"
              >
                新湖期货：美豆及连粕反弹仍可能持续 等待阿根廷产...
              </a>
            </div>
            <div className="item !pt-0">
              <a href="#" className="atitle cljb" title="格隆汇快讯">
                格隆汇快讯
              </a>
              <a href="#" className="articleinfo">
                <span>30分钟前</span>
              </a>
            </div>
            <div className="item">
              <a
                href="#"
                className="atitle cljb"
                title="加拿大最大退休基金增加对美资产配置 比重增至47%"
              >
                加拿大最大退休基金增加对美资产配置 比重增至47...
              </a>

              <a
                href="#"
                className="atitle cljb"
                title="A股宠物经济概念股集体回调：源飞宠物跌超6%，路斯股份跌超4%"
              >
                A股宠物经济概念股集体回调：源飞宠物跌超6%，路...
              </a>

              <a
                href="#"
                className="atitle cljb"
                title="金砖国家第十五次经贸部长会议在巴西首都巴西利亚举行"
              >
                金砖国家第十五次经贸部长会议在巴西首都巴西利亚举...
              </a>

              <a href="#" className="atitle cljb" title="格隆汇快讯">
                格隆汇快讯
              </a>

              <a href="#" className="atitle cljb" title="格隆汇快讯">
                格隆汇快讯
              </a>
            </div>
          </div>
        </div>
        <div className="nrContent">
          <div className="w100 boxsz paiban_2 paiban_mrys index_banner">
            <div
              className="index_banner_box h410px flex-heng"
              style={{ width: "46rem" }}
            >
              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input
        type="hidden"
        name="ctl00$ContentPlaceHolder1$uc_index$Rep_FangAn$ctl00$Hid_mxid"
        id="ctl00_ContentPlaceHolder1_uc_index_Rep_FangAn_ctl00_Hid_mxid"
        value="1"
      />

      <div className="layout indexpb nrPaiban mgt20px psr">
        <div className="nrContent">
          <div className="w100 boxsz paiban_6">
            <div className="lmitem">
              <a href="#" className="lmtitle">
                行情资讯
              </a>
            </div>
            <div className="w100 boxsz">
              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350616212510747966261.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>A股异动</i>
                  A股异动丨金价重新走强，莱绅通灵涨超6%，萃华珠宝涨超4%
                </a>
                <a href="#" className="articleinfo">
                  <span>A股异动</span> <span>47分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>公司信息</i>
                  香港股票分析师协会主席邓声兴：癌症疫苗申专利或有利长江生科价值提升
                </a>
                <a href="#" className="articleinfo">
                  <span>公司信息</span> <span>50分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>A股异动</i>
                  港股异动丨黄金概念股逆势走强，招金矿业涨近3%，金价连涨4日重上3340美元
                </a>
                <a href="#" className="articleinfo">
                  <span>A股异动</span> <span>52分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>市场综述</i>A股早评：沪指低开0.17% 高位股盘初调整
                </a>
                <a href="#" className="articleinfo">
                  <span>市场综述</span> <span>1小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>港股异动</i>港股异动丨小鹏汽车绩后高开近10%
                </a>
                <a href="#" className="articleinfo">
                  <span>港股异动</span> <span>1小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>公司信息</i>
                  险资入市加速，阳光保险(06963.HK)拟设立200亿私募证券基金
                </a>
                <a href="#" className="articleinfo">
                  <span>公司信息</span> <span>1小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nrContent">
          <div className="w100 boxsz paiban_6">
            <div className="lmitem">
              <a href="#" className="lmtitle">
                早盘播报
              </a>
            </div>
            <div className="w100 boxsz">
              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/live-cover1.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  AT&T斥57.5亿美元收购Lumen旗下零售光纤业务
                </a>
                <a href="#" className="articleinfo">
                  <span>30分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/live-cover5.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  格隆汇快讯
                </a>
                <a href="#" className="articleinfo">
                  <span>30分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/live-cover4.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  算法推荐乱象凸显 中央网信办督导抖音、小红书等平台优化调整
                </a>
                <a href="#" className="articleinfo">
                  <span>32分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/live-cover2.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  格隆汇快讯
                </a>
                <a href="#" className="articleinfo">
                  <span>32分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/live-cover1.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  格隆汇快讯
                </a>
                <a href="#" className="articleinfo">
                  <span>33分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/live-cover5.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  格隆汇快讯
                </a>
                <a href="#" className="articleinfo">
                  <span>34分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nrContent">
          <div className="w100 boxsz paiban_6">
            <div className="lmitem">
              <a href="#" className="lmtitle">
                深度解析
              </a>
            </div>
            <div className="w100 boxsz">
              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>
                  誓要打造全新AI硬件！OpenAI斥资65亿美元，拿下初创公司io
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span> <span>1小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  24小时环球政经要闻全览 | 5月22日
                </a>
                <a href="#" className="articleinfo">
                  <span>2小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>音频 |
                  格隆汇5.22盘前要点—港A美股你需要关注的大事都在这
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span> <span>2小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350681223846184026083.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>隔夜美股全复盘(5.22) |
                  纳微半导体盘后暴涨超200%，和英伟达共同开发数据中心供电架构
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span> <span>3小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>今起停牌！百亿芯片股重大资产重组，A股并购重组潮涌！
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span> <span>10小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350683114138863782994.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>65亿美元债务压顶！碳化硅巨头濒临破产，股价闪崩70%
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                  <span>美股</span> <span>2025-05-21</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cf"></div>

      <input
        type="hidden"
        name="ctl00$ContentPlaceHolder1$uc_index$Rep_FangAn$ctl01$Hid_mxid"
        id="ctl00_ContentPlaceHolder1_uc_index_Rep_FangAn_ctl01_Hid_mxid"
        value="3"
      />

      <div className="layout indexpb nrPaiban mgt20px psr">
        <div className="nrContent">
          <div className="w100 boxsz paiban_8">
            <div className="lmitem">
              <a href="#" className="lmtitle">
                最新动态
              </a>
            </div>
            <div className="w100 boxsz">
              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350616212510747966261.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>A股异动</i>
                  A股异动丨金价重新走强，莱绅通灵涨超6%，萃华珠宝涨超4%
                </a>
                <a href="#" className="articleinfo">
                  <span>A股异动</span> <span>47分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>公司信息</i>
                  香港股票分析师协会主席邓声兴：癌症疫苗申专利或有利长江生科价值提升
                </a>
                <a href="#" className="articleinfo">
                  <span>公司信息</span> <span>50分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>A股异动</i>
                  港股异动丨黄金概念股逆势走强，招金矿业涨近3%，金价连涨4日重上3340美元
                </a>
                <a href="#" className="articleinfo">
                  <span>A股异动</span> <span>52分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>市场综述</i>A股早评：沪指低开0.17% 高位股盘初调整
                </a>
                <a href="#" className="articleinfo">
                  <span>市场综述</span> <span>1小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nrContent">
          <div className="w100 boxsz paiban_8">
            <div className="lmitem">
              <a href="#" className="lmtitle">
                每日早盘
              </a>
            </div>
            <div className="w100 boxsz">
              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350616212510747966261.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>A股异动</i>
                  A股异动丨金价重新走强，莱绅通灵涨超6%，萃华珠宝涨超4%
                </a>
                <a href="#" className="articleinfo">
                  <span>A股异动</span> <span>47分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>公司信息</i>
                  香港股票分析师协会主席邓声兴：癌症疫苗申专利或有利长江生科价值提升
                </a>
                <a href="#" className="articleinfo">
                  <span>公司信息</span> <span>50分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>A股异动</i>
                  港股异动丨黄金概念股逆势走强，招金矿业涨近3%，金价连涨4日重上3340美元
                </a>
                <a href="#" className="articleinfo">
                  <span>A股异动</span> <span>52分钟前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>市场综述</i>A股早评：沪指低开0.17% 高位股盘初调整
                </a>
                <a href="#" className="articleinfo">
                  <span>市场综述</span> <span>1小时前</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nrContent">
          <div className="w100 boxsz paiban_10">
            <div className="lmitem">
              <a href="#" className="lmtitle">
                深度解析
              </a>
            </div>
            <div className="w100 boxsz">
              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>
                  誓要打造全新AI硬件！OpenAI斥资65亿美元，拿下初创公司io
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  24小时环球政经要闻全览 | 5月22日
                </a>
                <a href="#" className="articleinfo"></a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>音频 |
                  格隆汇5.22盘前要点—港A美股你需要关注的大事都在这
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350681223846184026083.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>隔夜美股全复盘(5.22) |
                  纳微半导体盘后暴涨超200%，和英伟达共同开发数据中心供电架构
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350627800882532495041.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>今起停牌！百亿芯片股重大资产重组，A股并购重组潮涌！
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350683114138863782994.jpeg"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>65亿美元债务压顶！碳化硅巨头濒临破产，股价闪崩70%
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                  <span>美股</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350684463060212931251.png"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>
                  5月22日A股投资避雷针︱青木科技：股东孙建龙拟减持不超3.00%股份；中航产融：于5月27日股票终止上市暨摘牌
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350685705536738036526.png"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>公告精选︱迈普医学：拟购买易介医疗不低于51%的股权
                  5月22日起停牌；丽人丽妆：销售的含有“麦角硫因”成分的产品销售收入整体占比不到1%
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350687649122672464013.png"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  美股盘前要点 |
                  对冲基金Q1削减美股科技七巨头仓位！谷歌发布AI全家桶
                </a>
                <a href="#" className="articleinfo"></a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350688682931892171063.png"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>资金动向 |
                  北水抛售腾讯超13亿港元，连续7日加仓建设银行
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                  <span>港股</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350690294281778915540.png"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>一边狂涨40倍，一边暴跌80%！“医美茅”急了
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>

              <div className="item">
                <a href="#" className="aimg">
                  <img
                    src="/assets/images/6388350691779906612077059.png"
                    className="flexImg_cover"
                  />
                </a>
                <a href="#" className="ahvbg bgjb">
                  &nbsp;
                </a>
                <a href="#" className="atitle cljb" title="">
                  <i>推荐</i>龙虎榜 |
                  国轩高科遭深股通疯狂抛售2.49亿元，机构、游资扎堆地天板王子新材
                </a>
                <a href="#" className="articleinfo">
                  <span>推荐</span>
                  <span>A股</span>
                </a>
                <a href="#" className="axh">
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cf"></div>

      <div className="layout ggw_3">
        <div className="w100 boxsz ovh ggwDiv" data-wz="3">
          <div className="ggwbox flex-heng" style={{ width: "0%" }}></div>
          <div className="ggwcircle"></div>
        </div>
      </div>
      {/* <div className="layout pdt20px">
        <div className="b_color_222 b_top_2">
          <div className="pdl20px fs16px fsb pdt20px pdb10px">友情链接</div>
        </div>
        <div className="grid grid_8 indexLink">
          <a href="https://www.gelonghui.com/" >
            <img
              src="/assets/images/6385010311026948488641961.jpg"
              className="flexImg_cover"
            />
          </a>

          <a href="https://www.zhitongcaijing.com/" >
            <img
              src="/assets/images/6385010313614784936437003.jpg"
              className="flexImg_cover"
            />
          </a>
        </div>
      </div> */}

      <div className="layout ggw_4">
        <div className="w100 boxsz ovh ggwDiv" data-wz="4">
          <div className="ggwbox flex-heng" style={{ width: "100%" }}>
            <div className="item">
              <a href="" className="aimg dpbk w100">
                <img
                  src="/assets/images/6387506099786721507878742.jpg"
                  className="dpbk w100"
                />
              </a>
            </div>
          </div>
          <div className="ggwcircle"></div>
        </div>
      </div>
      <div className="mgt20px bg_222222">
        <div className="layout pdt20px pdb20px flex-heng">
          <div className="flex-grow-1"></div>
          <div className="flex-grow-0">
            <div className="w100 a_color_5f5f6a color_5f5f6a a_hv_color_cbcbcb a_color_jb">
              <Link href="/about" target="_blank">深圳周喜珠宝产业服务有限公司</Link>
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
          <div className="flex-grow-1"></div>
        </div>
      </div>
    </div>
  );
}
