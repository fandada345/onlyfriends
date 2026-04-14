import { ArchetypeCode, ArchetypeProfile } from "@/types/quiz";

export const PLAYERS: Record<ArchetypeCode, ArchetypeProfile> = {
  P: {
    code: "P",
    name: "持球大核",
    playerName: "勒布朗·詹姆斯",
    image: "/archetypes/chibi-lebron-james-in-lakers-uniform.png",
    headline: "你最强的地方不是单点爆破，而是把整场比赛梳理出层次。",
    tags: ["阅读比赛", "控场稳定", "带动队友", "关键球判断"],
    scoutingReport: "你的回合处理成熟，擅长先读防守再做决定。无论是推进节奏、分配球权，还是临场调整，你都像球队里那个让每个人站到正确位置的人。",
    playerStyle: "比赛气质偏全能指挥官。你不一定每回合都要自己终结，但你能持续制造更好的出手机会，也能在局势混乱时把队伍重新拉回正轨。",
    advice: "继续保持视野和节奏感，同时别过度保守。该接管比赛的时候果断一点，你的上限会更高。",
    accent: "from-sky-500 to-blue-700",
    softAccent: "bg-sky-100 text-sky-700"
  },
  D: {
    code: "D",
    name: "冲框王牌",
    playerName: "扬尼斯·阿德托昆博",
    image: "/archetypes/chibi-giannis-in-bucks-gear.png",
    headline: "你是那种能靠持续压迫感改变比赛走势的强攻型核心。",
    tags: ["爆发力", "冲击篮筐", "侵略性", "转换推进"],
    scoutingReport: "你的优势是制造杀伤和直接改变防守阵型。只要节奏被你带起来，对手就很难舒舒服服地落位。你擅长把犹豫打成压力，把空档打成终结。",
    playerStyle: "比赛风格偏持球突破与纵向冲击。你的存在会天然提升回合强度，也能让球队在乱战和转换中迅速建立优势。",
    advice: "保持侵略性的同时，注意回合分配和体能节奏。把冲击力和阅读结合起来，会让你更难被针对。",
    accent: "from-orange-400 to-rose-500",
    softAccent: "bg-orange-100 text-orange-700"
  },
  S: {
    code: "S",
    name: "稳定拼图",
    playerName: "克莱·汤普森",
    image: "/archetypes/chibi-klay-thompson-ready-to-shoot.png",
    headline: "你不是最喧闹的球员，但往往是体系最离不开的那块拼图。",
    tags: ["稳定执行", "跑位纪律", "战术适配", "无球价值"],
    scoutingReport: "你能稳定兑现自己的职责，不抢戏却持续产生价值。无论是拉开空间、执行轮转，还是在关键节点做出正确选择，你都让阵容更完整。",
    playerStyle: "比赛风格偏成熟型功能核心。你擅长在团队框架中放大整体效率，属于教练最放心、队友最愿意一起打球的类型。",
    advice: "保持稳定输出的同时，也可以适当展示自己的主动性。让对手知道你不只是拼图，会提升你的威胁等级。",
    accent: "from-emerald-400 to-teal-600",
    softAccent: "bg-emerald-100 text-emerald-700"
  },
  O: {
    code: "O",
    name: "空间引擎",
    playerName: "斯蒂芬·库里",
    image: "/archetypes/chibi-stephen-curry-mid-shot.png",
    headline: "你最大的价值，是让整片半场因为你的站位和牵制力而被重新打开。",
    tags: ["空间牵制", "外线火力", "跑动威胁", "节奏拉扯"],
    scoutingReport: "你对空间的理解很强，知道什么时候拉开、什么时候牵扯、什么时候把对手防线拽出裂缝。你不只是投得进，更重要的是你能改变防守的站位逻辑。",
    playerStyle: "比赛风格偏空间创造者。你让阵容更舒展，也让持球人更轻松。你的影响力不一定都写在数据栏里，但会真实体现在每个回合的质量上。",
    advice: "继续放大无球价值，同时别忽视身体对抗和稳定性细节。把基础回合做厚，你的火力会更可持续。",
    accent: "from-amber-300 to-orange-500",
    softAccent: "bg-amber-100 text-amber-700"
  },
  F: {
    code: "F",
    name: "锁防核心",
    playerName: "科怀·伦纳德",
    image: "/archetypes/kawhi-leonard-in-chibi-basketball-action.png",
    headline: "你的比赛气质是冷静、克制，而且总能在关键对位里给出高强度回应。",
    tags: ["对位压制", "判断冷静", "风险控制", "关键回合"],
    scoutingReport: "你擅长看清回合风险，再用足够准确的动作终结对手的第一选择。你的价值不只是单防能力，还包括稳定局势、降低失误和提升阵容下限。",
    playerStyle: "比赛风格偏高等级防守核心。你不会轻易乱动，但一旦出手就很有针对性。你能让球队在高压回合里保持秩序，也能守住最后一道门。",
    advice: "继续保持防守专注度，同时增加一些主动进攻回合。攻守两端都能稳定输出时，你会更接近真正的建队级球员。",
    accent: "from-slate-500 to-slate-800",
    softAccent: "bg-slate-200 text-slate-700"
  },
  W: {
    code: "W",
    name: "自由变招",
    playerName: "凯里·欧文",
    image: "/archetypes/chibi-kyrie-irving-dribbling-basketball.png",
    headline: "你不太按标准脚本打球，但正因为如此，你总能提供最难复制的回合创造力。",
    tags: ["节奏变化", "单打创造", "手感爆点", "非常规处理"],
    scoutingReport: "你的优势在于变化和想象力。你能在常规战术之外打出临场解法，也能在僵持阶段靠个人处理把回合重新激活。",
    playerStyle: "比赛风格偏高难度创造者。你的天赋在于把不完整的回合处理成精彩终结，但也需要体系对你保持足够包容，才能放大全部价值。",
    advice: "继续保留个人创造力，同时注意降低高难度选择的波动。当天赋和稳定性靠得更近，你的杀伤力会非常可怕。",
    accent: "from-fuchsia-500 to-violet-600",
    softAccent: "bg-fuchsia-100 text-fuchsia-700"
  }
};
