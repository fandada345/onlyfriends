import { Question } from "@/types/quiz";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "开场第一回合，你更像哪种处理方式？",
    options: [
      { key: "A", text: "先观察站位，再决定由谁发起", archetype: "P" },
      { key: "B", text: "直接冲击防线，把强度先提起来", archetype: "D" },
      { key: "C", text: "先跑到舒服的位置，按体系执行", archetype: "S" },
      { key: "D", text: "先稳住阵型，优先保证回合质量", archetype: "F" }
    ]
  },
  {
    id: 2,
    title: "当一个回合突然停住时，你最自然的反应是？",
    options: [
      { key: "A", text: "重新组织，给队友更清晰的路线", archetype: "P" },
      { key: "B", text: "自己持球打掉，先把局面破开", archetype: "D" },
      { key: "C", text: "继续执行跑位，等机会自然出来", archetype: "S" },
      { key: "D", text: "主动拉开空间，让回合重新舒展", archetype: "O" }
    ]
  },
  {
    id: 3,
    title: "关于比赛节奏，你更偏向哪一类？",
    options: [
      { key: "A", text: "控住节奏，把每个回合打清楚", archetype: "P" },
      { key: "B", text: "提速推进，让对手来不及落位", archetype: "D" },
      { key: "C", text: "顺着场上走势走，保证执行稳定", archetype: "S" },
      { key: "D", text: "宁可慢一点，也要先把风险压住", archetype: "F" }
    ]
  },
  {
    id: 4,
    title: "如果把你放进一套阵容，你最像哪种定位？",
    options: [
      { key: "A", text: "负责持球调度的发起点", archetype: "P" },
      { key: "B", text: "最直接的第一终结点", archetype: "D" },
      { key: "C", text: "稳定衔接攻防的拼图位", archetype: "S" },
      { key: "D", text: "能持续拉开空间的威胁点", archetype: "O" }
    ]
  },
  {
    id: 5,
    title: "队友连续失误时，你通常会怎么处理？",
    options: [
      { key: "A", text: "主动控一下节奏，先把队伍稳住", archetype: "P" },
      { key: "B", text: "自己上强度，把气势顶回来", archetype: "D" },
      { key: "C", text: "补位和协防先做到位，不让问题扩大", archetype: "S" },
      { key: "D", text: "收紧防线，优先把失分风险压下来", archetype: "F" }
    ]
  },
  {
    id: 6,
    title: "当球权持续集中到你手里时，你会怎么打？",
    options: [
      { key: "A", text: "继续读比赛，但会更注意分球时机", archetype: "P" },
      { key: "B", text: "直接接管，靠个人能力解决问题", archetype: "D" },
      { key: "C", text: "按既定职责继续稳定输出", archetype: "S" },
      { key: "D", text: "通过跑动和站位分担压力", archetype: "O" }
    ]
  },
  {
    id: 7,
    title: "你最不希望自己的比赛出现什么问题？",
    options: [
      { key: "A", text: "局面失控，没人能把比赛重新理顺", archetype: "P" },
      { key: "B", text: "节奏太拖，整队没有压迫感", archetype: "D" },
      { key: "C", text: "配合断掉，大家各打各的", archetype: "S" },
      { key: "D", text: "空间被压缩，回合打得很拥挤", archetype: "O" }
    ]
  },
  {
    id: 8,
    title: "面对陌生对手的第一节，你更喜欢怎么试探？",
    options: [
      { key: "A", text: "先跑几套战术，摸清对方轮转", archetype: "P" },
      { key: "B", text: "先打身体和冲击，看看对方能不能顶住", archetype: "D" },
      { key: "C", text: "先按体系走，边打边找感觉", archetype: "S" },
      { key: "D", text: "多做变速和假动作，逼对方先露破绽", archetype: "W" }
    ]
  },
  {
    id: 9,
    title: "遇到不确定局面时，你更相信哪种方式？",
    options: [
      { key: "A", text: "先把回合理清，再决定怎么打", archetype: "P" },
      { key: "B", text: "机会不等人，先冲出一个优势", archetype: "D" },
      { key: "C", text: "看队友位置和轮转，再做衔接", archetype: "S" },
      { key: "D", text: "保持变化和流动，让对手更难判断", archetype: "W" }
    ]
  },
  {
    id: 10,
    title: "如果自己做一份球探自评，你最认同哪一句？",
    options: [
      { key: "A", text: "我最擅长把整队带进正确节奏", archetype: "P" },
      { key: "B", text: "我最擅长持续制造篮下威胁", archetype: "D" },
      { key: "C", text: "我最擅长把细节和执行稳定下来", archetype: "S" },
      { key: "D", text: "我最擅长用空间和投射改变防守", archetype: "O" }
    ]
  },
  {
    id: 11,
    title: "当对手开始收缩、降低回合强度时，你会怎么应对？",
    options: [
      { key: "A", text: "调整战术细节，重新把主动权拿回来", archetype: "P" },
      { key: "B", text: "继续上身体和突破，不让对手舒服", archetype: "D" },
      { key: "C", text: "先检查执行，把简单回合打扎实", archetype: "S" },
      { key: "D", text: "回到防守和对位，先把局势卡住", archetype: "F" }
    ]
  },
  {
    id: 12,
    title: "你最喜欢哪种比赛观感？",
    options: [
      { key: "A", text: "像导演一样把阵地战一层层铺开", archetype: "P" },
      { key: "B", text: "高对抗高速度，回合直接见胜负", archetype: "D" },
      { key: "C", text: "每个人都在体系里稳定兑现价值", archetype: "S" },
      { key: "D", text: "留有变化空间，随时能打出非常规处理", archetype: "W" }
    ]
  },
  {
    id: 13,
    title: "到了常规轮换阶段，你最看重什么？",
    options: [
      { key: "A", text: "持续把球队节奏和回合质量控住", archetype: "P" },
      { key: "B", text: "火力不能断，得一直给对面压力", archetype: "D" },
      { key: "C", text: "每场都交出稳定且可预期的贡献", archetype: "S" },
      { key: "D", text: "阵地不能拥堵，空间必须一直在线", archetype: "O" }
    ]
  },
  {
    id: 14,
    title: "进入关键回合时，你更信哪种赢法？",
    options: [
      { key: "A", text: "把战术执行到最细，赢在判断", archetype: "P" },
      { key: "B", text: "直接强打，赢在硬解能力", archetype: "D" },
      { key: "C", text: "把团队协作打出来，赢在整体", archetype: "S" },
      { key: "D", text: "先守住这一回合，赢在纪律和防守", archetype: "F" }
    ]
  },
  {
    id: 15,
    title: "你理想中的比赛版本，更接近下面哪一种？",
    options: [
      { key: "A", text: "战术层次清晰，关键回合有人能控住", archetype: "P" },
      { key: "B", text: "强度拉满，靠冲击和终结压垮对手", archetype: "D" },
      { key: "C", text: "轮转严谨，每个人都知道该做什么", archetype: "S" },
      { key: "D", text: "空间开阔，球和人始终在流动", archetype: "O" }
    ]
  }
];
