// 双语文案。保留原始文本节点，让重复切换及动态项目排序可逆。
const EN_TEXT = {
  研究概览: "Overview",
  研究问题: "Problem",
  系统框架: "System Overview",
  关键结果: "Key Results",
  仿真实验: "Simulation Experiments",
  异常检测与恢复: "Anomaly Detection and Recovery",
  研究边界: "Scope and Limitations",
  华南理工大学自动化科学与工程学院:
    "School of Automation Science and Engineering, South China University of Technology",
  西安交通大学人工智能与机器人研究所:
    "Institute of Artificial Intelligence and Robotics, Xi’an Jiaotong University",
  "* 通讯作者：Yi Wang、Zhenyu Lu": "* Corresponding authors: Yi Wang and Zhenyu Lu",
  "长时序机器人操作中，动作被执行并不代表目标状态已经实现。物体滑落、方块被移动或目标容器位置变化，都可能让后续动作建立在错误状态上。VigiClaw 在每个原子动作完成后检查场景状态，在发现异常时触发规则引导的重规划。":
    "In long-horizon manipulation, executing an action does not guarantee that its intended post-condition has been achieved. Slipped grasps, displaced blocks or shifted target containers can invalidate subsequent actions. VigiClaw verifies the scene after each atomic action and triggers rule-guided replanning when an anomaly is detected.",
  "VigiClaw 将感知、决策和执行组织为闭环。感知层使用 YOLO 实例分割与 RGB-D 信息重建对象状态；决策层通过 OpenClaw 调用预定义技能，并使用 DMP 生成动作轨迹；执行层在 ManiSkill 中执行动作，再将新的视觉状态反馈给验证模块。":
    "VigiClaw forms a closed loop across perception, decision-making and execution. YOLO instance segmentation and RGB-D observations reconstruct object states. OpenClaw schedules predefined skills, DMPs generate trajectories, and the execution layer runs actions in ManiSkill before feeding updated visual states back to the verifier.",
  "系统工作流程：感知 → 技能调度 → 动作执行 → 状态验证 → 异常恢复。":
    "System workflow: perception → skill scheduling → action execution → state verification → anomaly recovery.",
  受扰动放置任务成功率: "Success on disturbed placement",
  受扰动堆叠任务成功率: "Success on disturbed stacking",
  标准桌面操作任务: "Standard tabletop tasks",
  "表中结果来自论文 Table II；每种配置下，每项任务执行 25 次。NVD 不进行视觉状态检测，VD 为完整 VigiClaw，SIM 使用仿真器提供的真实对象坐标。":
    "Results are from Table II of the paper, with 25 trials per task for each configuration. NVD omits visual state detection, VD is the full VigiClaw configuration, and SIM uses ground-truth object coordinates from the simulator.",
  配置: "Configuration",
  "方块放置（受扰动）": "Block placement (disturbed)",
  "方块堆叠（受扰动）": "Block stacking (disturbed)",
  "NVD · 无视觉检测": "NVD · No visual detection",
  "VD · VigiClaw": "VD · VigiClaw",
  "SIM · 仿真真实坐标": "SIM · Simulator ground truth",
  "论文在 ManiSkill 中评估了 8 项桌面任务，包括抓取、移动、推动、放置与堆叠。受扰动实验针对方块放置和堆叠任务：将已经放好的方块移回桌面，或将空碗移动 0.1 米，测试系统能否检测状态偏差并恢复执行。":
    "The paper evaluates eight tabletop tasks in ManiSkill, covering picking, moving, pushing, placing and stacking. Disturbed variants target placement and stacking: a placed block is moved back to the tabletop, or an empty bowl is shifted by 0.1 m, testing whether the system detects state deviations and recovers.",
  "论文 Fig. 5：8 项桌面操作任务与实验场景。":
    "Paper Fig. 5: the eight tabletop manipulation tasks and their experimental scenes.",
  "对被移走的方块，VigiClaw 触发重新抓取与放置；对发生位移的碗，系统使用最新检测坐标更新目标位置。该机制在原子动作结束时触发，无需持续调用视觉语言模型进行监控。":
    "For displaced blocks, VigiClaw initiates a re-grasp-and-place sequence. For shifted bowls, it updates the target pose using the latest detected coordinates. Verification is triggered after atomic actions, avoiding continuous vision-language-model monitoring.",
  "论文 Fig. 6：堆叠与放置任务中的异常检测及恢复过程。":
    "Paper Fig. 6: anomaly detection and recovery in stacking and placement tasks.",
  "论文报告的定量结果仅基于仿真实验。实际环境部署、多视角感知与更灵活的恢复策略是后续研究方向。":
    "The quantitative results reported in the paper are limited to simulation. Real-world deployment, multi-view perception and more flexible recovery strategies remain future directions.",
  "VigiClaw 系统工作流程图": "VigiClaw system workflow",
  "VigiClaw 八项仿真任务": "Eight VigiClaw simulation tasks",
  "VigiClaw 异常检测与恢复实验": "VigiClaw anomaly detection and recovery experiments",
  "阅读论文 PDF": "Read paper PDF",
  返回论文列表: "Back to publications",
  结果对比表: "Results comparison table",
  "VigiClaw 系统工作流程图": "VigiClaw system workflow",
  跳转至正文: "Skip to content",
  "让感知、推理与行动，连接真实世界。":
    "Connecting perception, reasoning and action to the real world.",
  我目前就读于: "I am currently studying at ",
  华南理工大学: "South China University of Technology",
  "自动化科学与工程学院，智能科学与技术专业（2023–2027）。2026 年 9 月，拟录取":
    " in Intelligent Science and Technology at the School of Automation Science and Engineering (2023–2027). In September 2026, I received a preliminary admission offer from ",
  南京大学: "Nanjing University",
  "智能科学与技术方向，人工智能专业。":
    " for the Artificial Intelligence program in Intelligent Science and Technology.",
  我的研究兴趣是: "My research interests lie in ",
  具身智能与机器人学习: "Embodied AI and Robot Learning",
  "，关注大语言模型驱动的机器人自主操作、Vision-Language-Action（VLA）模型，以及长时序任务中的记忆与鲁棒性。也喜欢从硬件与控制出发，让算法在真实系统中运行。":
    ", with a focus on LLM-driven autonomous manipulation, Vision-Language-Action (VLA) models, and memory and robustness in long-horizon tasks. I also enjoy bringing algorithms to real systems through hardware and control.",
  专业排名: "Class rank",
  拟录取: "Preliminary admission offer from ",
  完成我的第一篇文章: "Completed my first paper, ",
  "，探索长周期机器人操作中的状态验证与异常检测。":
    ", exploring state verification and anomaly detection for long-horizon manipulation.",
  获得第二十届全国大学生智能汽车竞赛:
    "In the 20th National College Student Intelligent Car Competition, won the ",
  全国一等奖: "National First Prize",
  入学: "Enrolled at ",
  "自动化科学与工程学院，智能科学与技术专业。":
    ", majoring in Intelligent Science and Technology at the School of Automation Science and Engineering.",
  "。": ".",
  "基于 OpenClaw 的机器人自主操作系统研究":
    "An OpenClaw-based system for autonomous robot manipulation",
  "卢鹏翔 · 第一作者": "Pengxiang Lu · First author",
  "通过动作触发式视觉状态验证，提升机器人在长周期任务与外部干扰下的操作鲁棒性。":
    "Improving robustness in long-horizon manipulation under external disturbances through action-triggered visual state verification.",
  "IEEE-CYBER 录用": "Accepted at IEEE-CYBER",
  "Best Poster Award 入围": "Best Poster Award finalist",
  精选: "Featured",
  最近: "Recent",
  国家奖学金: "National Scholarship",
  "2024–2025 学年 · 2025–2026 学年": "Academic years 2024–2025 and 2025–2026",
  "全国大学生智能汽车竞赛 · 全国一等奖":
    "National First Prize · National College Student Intelligent Car Competition",
  "第二十届 · 缩微光电组 · 主力队员":
    "20th edition · Miniature optoelectronic category · Core team member",
  "全国大学生数学竞赛 · 省一等奖": "Provincial First Prize · Chinese Mathematics Competitions",
  第十七届全国大学生数学竞赛: "17th Chinese Mathematics Competitions",
  "赛元杯嵌入式设计大赛 · 校一等奖":
    "University First Prize · Saiyuan Cup Embedded Design Competition",
  "保持好奇，把想法变成行动。": "Stay curious. Turn ideas into action.",
  "↓ CV / 简历": "↓ CV (Chinese PDF)",
  "返回首页 ↑": "Back to home ↑",
  "← 返回全部项目": "← All projects",
  "2023.09 – 2027.06（预计）": "Sep 2023 – Jun 2027 (expected)",
  "具身智能 · 机器人学习 · 嵌入式控制": "Embodied AI · Robot Learning · Embedded Control",
  "我目前就读于华南理工大学自动化科学与工程学院，智能科学与技术专业。我的研究兴趣是具身智能与机器人学习，关注大语言模型驱动的机器人自主操作、VLA 模型在长时序任务中的记忆能力，以及机器人系统的鲁棒性。":
    "I am an undergraduate in Intelligent Science and Technology at the School of Automation Science and Engineering, South China University of Technology. My research focuses on embodied AI and robot learning, particularly LLM-driven autonomous manipulation, memory in VLA models for long-horizon tasks, and robust robot systems.",
  "我喜欢把算法与工程实现结合起来，从视觉感知、动作规划到嵌入式控制，完成机器人在仿真与真实环境中的闭环验证。":
    "I enjoy combining algorithms with engineering, connecting visual perception, motion planning and embedded control to validate robot systems in simulation and the real world.",
  "智能科学与技术方向 · 人工智能专业":
    "Intelligent Science and Technology · Artificial Intelligence",
  "华南理工大学 · 自动化科学与工程学院":
    "South China University of Technology · School of Automation Science and Engineering",
  "智能科学与技术 · 本科在读": "Intelligent Science and Technology · Undergraduate",
  "GPA：3.96 / 4.0 · 专业排名：1 / 94 · CET-6：528":
    "GPA: 3.96 / 4.0 · Class rank: 1 / 94 · CET-6: 528",
  "核心课程：机器学习、数据结构与算法、机器人技术基础、控制理论、计算机视觉。":
    "Core courses: Machine Learning, Data Structures and Algorithms, Fundamentals of Robotics, Control Theory, and Computer Vision.",
  "编程与算法：": "Programming and algorithms: ",
  "Python、C / C++，算法开发与工程实现。":
    "Python and C / C++; algorithm development and engineering implementation.",
  "人工智能：": "Artificial intelligence: ",
  "PyTorch、计算机视觉、VLA 模型，大语言模型驱动的机器人系统。":
    "PyTorch, computer vision, VLA models, and LLM-driven robot systems.",
  "机器人：": "Robotics: ",
  "ROS、MuJoCo、SAPIEN，机械臂控制、运动规划与机器人学习。":
    "ROS, MuJoCo, SAPIEN, manipulator control, motion planning, and robot learning.",
  "嵌入式与硬件：": "Embedded systems and hardware: ",
  "单片机、PCB 电路设计、Qt 上位机、无刷电机驱动与 FOC 控制。":
    "Microcontrollers, PCB design, Qt interfaces, brushless motor drives, and FOC control.",
  "在 VigiClaw 项目中，作为第一作者负责自主操作框架与状态验证闭环；参与短记忆 VLA 模型的仿真数据与评测研究；在全国大学生智能汽车竞赛中负责电机驱动与控制算法。":
    "As first author of VigiClaw, I designed the autonomous manipulation framework and state-verification loop. I also contributed to simulation data and evaluation for VLA memory research, and developed motor drives and control algorithms for the National College Student Intelligent Car Competition.",
  "查看全部项目 →": "View all projects →",
  关于我: "About me",
  教育背景: "Education",
  技术能力: "Technical skills",
  研究与实践: "Research and projects",
  项目概述: "Overview",
  个人工作与成果: "Contributions and results",
  项目演示: "Demonstration",
  第一作者: "First author",
  项目成员: "Project member",
  主力队员: "Core team member",
  面向长周期任务的机器人自主操作: "Autonomous manipulation for long-horizon tasks",
  "将任务规划、视觉感知与动作执行连接成闭环，在原子动作执行后校验状态，应对长周期操作中的外部干扰。":
    "A closed-loop system connecting task planning, visual perception and action execution, with state checks after atomic actions to handle external disturbances in long-horizon tasks.",
  "提出并设计基于 OpenClaw 的机器人操作框架，融合 YOLO 视觉识别与 DMP 示教。":
    "Proposed an OpenClaw-based manipulation framework integrating YOLO perception and DMP-based learning from demonstrations.",
  "通过动作触发式视觉状态验证，实现轻量化异常检测。":
    "Implemented lightweight anomaly detection through action-triggered visual state verification.",
  "负责框架设计、任务规划与执行闭环，以及论文撰写；完成仿真实验与自制机械臂验证。":
    "Designed the framework and planning-execution loop, wrote the paper, and validated the system in simulation and on a custom robot arm.",
  "论文被 IEEE-CYBER 录用，入围 Best Poster Award。":
    "The paper was accepted at IEEE-CYBER and selected as a Best Poster Award finalist.",
  历史事件驱动的机器人记忆评测: "History-driven evaluation of robot memory",
  "面向长时序双臂操作，研究模型如何利用历史交互信息，参与构建历史事件驱动的数据与评测流程。":
    "Investigated how models use interaction history in long-horizon bimanual manipulation, contributing to history-driven data and evaluation pipelines.",
  "针对 VLA 模型在长时序机器人操作中难以利用历史信息的问题，参与记忆能力研究。":
    "Contributed to research on memory in VLA models to address their difficulty using history in long-horizon manipulation.",
  "负责仿真框架调研选型、仿真数据采集与仿真实验。":
    "Evaluated simulation frameworks and conducted simulation data collection and experiments.",
  "参与构建机器人历史事件理解评测流程；论文初稿投稿至 ICRA。":
    "Contributed to an evaluation pipeline for understanding robot interaction history; the manuscript was submitted to ICRA.",
  双臂操作: "Bimanual manipulation",
  状态验证: "State verification",
  嵌入式控制: "Embedded control",
  "基于 Infineon TRAVEO MCU 开发智能车控制系统，负责无刷电机驱动与控制算法，实现高速稳定运行。":
    "Developed an intelligent car control system using an Infineon TRAVEO MCU, focusing on brushless motor drives and control algorithms for stable high-speed operation.",
  "负责无刷电机驱动硬件开发与电机控制方案设计。":
    "Developed brushless motor drive hardware and designed the motor control system.",
  "开发 FOC 及六步换向算法，实现电机转矩与速度控制。":
    "Implemented FOC and six-step commutation for motor torque and speed control.",
  "参与视觉循迹与转向控制算法联调，获得缩微光电组全国一等奖。":
    "Integrated visual line following and steering control algorithms; won the National First Prize in the miniature optoelectronic category.",
  查看项目详情: "View project",
  待补充: "Coming soon",
  项目演示视频: "Project demo video",
  "观看项目视频 ↗": "Watch project video ↗",
  切换浅色主题: "Switch to light theme",
  切换深色主题: "Switch to dark theme",
  切换主题: "Toggle theme",
  页面导航: "Page navigation",
  项目排序: "Project sorting",
  项目封面: " project cover",
  个人照片: " portrait",
  竞赛与荣誉: "Awards and honors",
  成长时间线: "Timeline",
  其他项目: "Other projects",
  论文: "Publications",
  卢鹏翔: "卢鹏翔",
};
const ZH_TEXT = {
  "Overview ↗": "研究概览 ↗",
  About: "关于我",
  News: "动态",
  Publications: "论文",
  Projects: "项目",
  Awards: "荣誉",
  Home: "首页",
  "More about me →": "更多关于我 →",
  "More projects": "其他项目",
  "Back to top ↑": "返回顶部 ↑",
  "Undergraduate Student": "本科在读",
  "Incoming Master's Student": "拟录取硕士生",
  "ROBOTICS & EMBODIED AI": "机器人与具身智能",
  "ABOUT ME": "关于我",
  "RESEARCH & ENGINEERING": "研究与工程实践",
  MILESTONE: "里程碑",
  RESEARCH: "科研",
  AWARD: "获奖",
  EDUCATION: "教育",
  "↗ Email": "↗ 邮箱",
  Paper: "论文",
  Code: "代码",
};
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = "zh";
try {
  if (localStorage.getItem("language") === "en") currentLanguage = "en";
} catch {}
const enFragments = Object.keys(EN_TEXT).sort((a, b) => b.length - a.length);
function translated(original) {
  // HTML formatting may wrap a sentence across multiple source lines.
  original = original.replace(/\s+/g, " ").trim();
  if (currentLanguage === "zh")
    return ZH_TEXT[original] ?? original.replace(/^Paper ·/, "论文 ·").replace(/^Code ·/, "代码 ·");
  if (/^查看 (.+) 项目详情$/.test(original))
    return "View " + original.match(/^查看 (.+) 项目详情$/)[1] + " project";
  if (EN_TEXT[original] !== undefined) return EN_TEXT[original];
  // Combined metadata and accessible labels include project names and dates.
  let result = original;
  for (const key of enFragments) {
    if (/[\u3400-\u9fff]/.test(key)) result = result.split(key).join(EN_TEXT[key]);
  }
  return result;
}
function applyLanguage() {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      node.parentElement.closest("script, style, svg, #language")
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const original = originalText.get(node),
      trimmed = original.trim();
    node.nodeValue = trimmed ? original.replace(trimmed, translated(trimmed)) : original;
  }
  document.querySelectorAll("[aria-label], [title], img[alt]").forEach((element) => {
    if (element.id === "language" || element.id === "theme") return;
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const originals = originalAttributes.get(element);
    for (const attr of ["aria-label", "title", "alt"]) {
      if (!element.hasAttribute(attr)) continue;
      if (!(attr in originals)) originals[attr] = element.getAttribute(attr);
      element.setAttribute(attr, translated(originals[attr]));
    }
  });
  const button = document.getElementById("language");
  button.textContent = currentLanguage === "en" ? "中文" : "EN";
  button.setAttribute("aria-label", currentLanguage === "en" ? "切换为中文" : "Switch to English");
  button.title = button.getAttribute("aria-label");
  button.setAttribute("lang", currentLanguage === "en" ? "zh-CN" : "en");
  const light = document.body.classList.contains("light");
  document
    .getElementById("theme")
    .setAttribute(
      "aria-label",
      currentLanguage === "en"
        ? light
          ? "Switch to dark theme"
          : "Switch to light theme"
        : light
          ? "切换深色主题"
          : "切换浅色主题",
    );
  document.getElementById("theme").title = currentLanguage === "en" ? "Toggle theme" : "切换主题";
  document.querySelectorAll('meta[name="description"]').forEach((meta) => {
    if (!meta.dataset.original) meta.dataset.original = meta.content;
    meta.content =
      currentLanguage === "en"
        ? "Pengxiang Lu — Embodied AI, robot learning, research and projects."
        : meta.dataset.original;
  });
}
document.getElementById("language").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  try {
    localStorage.setItem("language", currentLanguage);
  } catch {}
  applyLanguage();
});
// Rendered project cards are rebuilt by the existing sort control before this listener runs.
document.addEventListener("click", (event) => {
  if (event.target.closest("[data-sort], #theme")) applyLanguage();
});
applyLanguage();
