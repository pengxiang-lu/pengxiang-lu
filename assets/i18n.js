// 双语文案。保留原始文本节点，让重复切换及动态项目排序可逆。
const EN_TEXT = {
  个人介绍: "Introduction",
  科研与工程经历: "Research and Engineering Experience",
  学业表现: "Academic Profile",
  华南理工大学校徽: "South China University of Technology emblem",
  南京大学校徽: "Nanjing University emblem",
  "南京大学 · 拟录取": "Nanjing University · Preliminary admission",
  "2026.09 · 获得拟录取资格": "Sep 2026 · Preliminary admission offer",
  "人工智能专业 · 智能科学与技术方向":
    "Artificial Intelligence · Intelligent Science and Technology",
  "VigiClaw · 机器人自主操作": "VigiClaw · Autonomous Robot Manipulation",
  "第一作者 · 2026.02–2026.05": "First author · Feb–May 2026",
  "设计基于 OpenClaw 的机器人自主操作框架，融合视觉感知、DMP 示教与动作触发式状态验证。负责框架设计、规划–执行闭环与论文撰写；论文被 IEEE-CYBER 录用，并入围 Best Poster Award。":
    "Designed an OpenClaw-based autonomous manipulation framework integrating visual perception, DMP demonstrations and action-triggered state verification. Responsible for the framework, planning–execution loop and paper writing. The paper was accepted at IEEE-CYBER and selected as a Best Poster Award finalist.",
  "短记忆 VLA 模型研究": "Short-Term Memory in VLA Models",
  "项目成员 · 2026.01–2026.07": "Project member · Jan–Jul 2026",
  "面向长时序双臂操作参与 VLA 记忆能力研究，负责仿真框架调研选型、数据采集与仿真实验，参与构建历史事件驱动的评测流程。论文初稿投稿至 ICRA。":
    "Contributed to VLA memory research for long-horizon bimanual manipulation, including simulation framework evaluation, data collection, experiments and history-driven evaluation pipelines. The manuscript was submitted to ICRA.",
  "CH32V203 DOUBLE-FOC · 电机驱动": "CH32V203 DOUBLE-FOC · Motor Drive",
  "开源项目 · 嵌入式与硬件开发": "Open-source project · Embedded Systems and Hardware",
  "围绕双路无刷电机驱动，开展电路与 PCB 设计、磁编码器反馈、电流采样以及 FOC 闭环控制固件开发，结合串口数据回传进行系统联调。":
    "Developed hardware and firmware for a dual brushless-motor drive, covering circuits and PCB design, magnetic encoder feedback, current sensing and FOC control, with serial telemetry for system debugging.",
  全国大学生智能汽车竞赛: "National College Student Intelligent Car Competition",
  "主力队员 · 2024.12–2025.08": "Core team member · Dec 2024–Aug 2025",
  "负责无刷电机驱动硬件与控制算法，实现 FOC 和六步换向，参与视觉循迹与转向控制联调。获第二十届全国大学生智能汽车竞赛缩微光电组全国一等奖。":
    "Developed brushless motor drive hardware, FOC and six-step commutation algorithms, and integrated visual line following and steering control. Won the National First Prize in the miniature optoelectronic category of the 20th National College Student Intelligent Car Competition.",
  "项目详情 →": "Project details →",
  返回首页: "Back to homepage",
  项目概述: "Project Overview",
  "这是一个覆盖电路设计、PCB、底层驱动与控制算法的双路无刷电机驱动项目。以 CH32V203 为主控，将磁编码器反馈、电流采样、FOC 运算、PWM 输出和串口调试整合到同一套嵌入式系统中。":
    "This dual brushless-motor drive project spans circuit design, PCB layout, peripheral drivers and control algorithms. A CH32V203 controller integrates magnetic encoder feedback, current sensing, FOC computation, PWM generation and serial debugging.",
  "系统面向新西达 A2212 电机，支持两路电机独立使能，以及速度、位置、电流和多种串级闭环控制。仓库同时提供 MounRiver Studio 固件工程、硬件原理图与 PCB 文件。":
    "The system targets A2212 brushless motors, with independently enabled motor channels and speed, position, current and cascaded closed-loop control modes. The repository includes the MounRiver Studio firmware project, schematics and PCB files.",
  硬件设计: "Hardware Design",
  "双路 FOC 驱动板正面": "Front of the dual FOC driver board",
  "驱动板正面：双路功率级、采样与接线端。":
    "Driver-board front: dual power stages, sensing and wiring connections.",
  "双路 FOC 驱动板背面": "Back of the dual FOC driver board",
  "驱动板背面：CH32V203 主控与左右电机接口。":
    "Driver-board back: CH32V203 controller and left/right motor interfaces.",
  模块: "Module",
  方案与参数: "Design and parameters",
  主控: "Controller",
  "CH32V203；采用 RISC-V 核心及 CH32V20x 外设库。":
    "CH32V203 with a RISC-V core and the CH32V20x peripheral library.",
  位置反馈: "Position feedback",
  "MT6701 磁编码器，固件按 14 位角度计数处理，一圈为 0–16383。":
    "MT6701 magnetic encoders; firmware uses 14-bit angular counts, 0–16383 per revolution.",
  栅极与功率级: "Gate and power stage",
  "EG2133 栅极驱动搭配双 N 沟道 MOS 器件，每路使用 3 个双管封装。":
    "EG2133 gate drivers with dual N-channel MOSFET packages; three dual packages per motor channel.",
  电流采样: "Current sensing",
  "固件配置 A/C 两相电流采样，分流电阻 0.01 Ω、放大增益 20。":
    "Firmware configures A/C phase current sensing with 0.01 Ω shunts and a gain of 20.",
  供电设计: "Power design",
  "额定设计电压 12 V；README 标注输入电压范围为 4.5–17 V。":
    "Nominal design voltage: 12 V. The README lists an input range of 4.5–17 V.",
  "选择 EG2133 的设计出发点是使用普通定时器的 3PWM 信号驱动桥臂，减少对高级定时器互补输出和引脚数量的需求。双管封装降低了焊接数量，但紧凑布局也带来了后续硬件调试问题。":
    "The EG2133 design uses ordinary-timer 3PWM signals to drive the bridges, reducing dependence on advanced-timer complementary outputs and pin count. Dual MOSFET packages reduce assembly effort, while the compact layout also introduced hardware debugging challenges.",
  双电机磁编码器板设计: "Dual-motor magnetic encoder board design",
  "A2212 双电机磁编码器板布局，图片来自项目仓库。":
    "Magnetic encoder board layout for two A2212 motors, from the repository.",
  控制模式与固件架构: "Control Modes and Firmware Architecture",
  "固件提供开环、速度环、角度环、角度–速度串级环，以及电流环、速度–电流环、角度–电流环和角度–速度–电流三环。调制方式包括 SPWM、七段式 SVPWM 和五段式 SVPWM；当前配置选择速度–电流模式与七段式 SVPWM。":
    "The firmware includes open-loop, speed, position, position–speed cascade, current, speed–current, position–current, and position–speed–current control. Modulation options include SPWM, seven-segment SVPWM and five-segment SVPWM. The inspected configuration selects speed–current control and seven-segment SVPWM.",
  "driver_config.h 将 FOC 控制基准频率配置为 20 kHz，速度环为 2 kHz，角度环为 500 Hz。这些是固件配置值，并非本页面额外测量的性能结果。":
    "driver_config.h sets the FOC control base frequency to 20 kHz, the speed loop to 2 kHz and the position loop to 500 Hz. These are firmware configuration values, rather than additional performance measurements.",
  "外围驱动负责采样与输出，控制层完成角度与速度反馈、坐标变换和 PID 调节，协议层将串口目标值转换为对应模式下的电机指令。":
    "Peripheral drivers handle sampling and output. The control layer processes angle/speed feedback, coordinate transforms and PID regulation, while the protocol layer converts serial targets into mode-specific motor commands.",
  串口控制与数据可视化: "Serial Control and Telemetry",
  "串口采用 460800 baud、8-N-1。控制帧固定为 6 字节：帧头 0xA5、左电机目标值 2 字节、右电机目标值 2 字节、1 字节校验和。目标值按有符号 16 位整数解释，高字节在前。":
    "The serial link uses 460800 baud, 8-N-1. Each six-byte command contains header 0xA5, a two-byte left-motor target, a two-byte right-motor target and a one-byte checksum. Targets are signed 16-bit integers in big-endian order.",
  "在速度模式中，上述指令表示左电机 +1000 RPM、右电机 −1000 RPM。校验和为前 5 字节求和后保留低 8 位；角度模式使用编码器计数，电流模式使用 mA，不能把不同模式的目标值混用。":
    "In speed mode, the example commands +1000 RPM on the left and −1000 RPM on the right. The checksum is the low eight bits of the sum of the first five bytes. Position modes use encoder counts and current modes use mA, so target units depend on the selected mode.",
  "状态回传为逗号分隔的 ASCII 数据，可按宏配置输出角度、速度、相电流、dq 电流和电池电压，配合 Vofa+ 观察调参过程。CAN 通信仍属于待扩展功能。":
    "Telemetry is comma-separated ASCII, with configurable angle, speed, phase current, dq current and battery voltage fields. Vofa+ can visualize the tuning process. CAN communication remains a planned extension.",
  "Vofa+ 调试波形示例": "Example Vofa+ debugging traces",
  "仓库中的数据回传与波形可视化示例。": "Example telemetry visualization from the repository.",
  工程迭代与调试: "Engineering Iteration and Debugging",
  "仓库记录了数值运算、采样时序、PWM 更新和通信解析方面的排查与修正，目标是提升采样数据与控制链路的一致性。":
    "The repository documents fixes to numerical operations, sampling order, PWM updates and protocol parsing, focusing on consistency across the sensing and control pipeline.",
  "修正有符号圆限幅、dq 电流归一化和 PI 积分小数截断问题，降低数值误差与正负方向不一致的影响。":
    "Corrected signed circular limiting, dq-current normalization and fractional PI integration to reduce numerical errors and directional asymmetry.",
  "ADC 扫描完成后发布独立 DMA 快照，控制环使用已完成的采样结果；PWM 硬件同步仍待完善。":
    "Publishes independent DMA snapshots after ADC scan completion, so the control loop uses completed samples; hardware-synchronized PWM sampling still needs refinement.",
  "PWM 比较值改为直接更新并启用三相预装载，使整组三相输出在后续更新事件统一生效。":
    "Updates PWM compare values directly and enables three-phase preload so the complete phase set takes effect together at a subsequent update event.",
  "修复串口负目标值解析、三环角度模式目标更新、速度方向定义和低速滤波精度问题。":
    "Fixed signed serial target parsing, target updates in triple-loop position mode, speed direction consistency and low-speed filtering precision.",
  当前进展与后续优化: "Current Status and Next Steps",
  "README 记录左路电机运行正常，右路在较高占空比下仍可能导致主控复位或卡死。当前可通过降低占空比或仅使用左路开展调试，不能据此认定全部双路控制模式已完成硬件验证。":
    "The README reports normal operation on the left channel, while the right may reset or hang the controller at higher duty cycles. Lower duty limits or left-channel-only operation can support debugging; this does not establish validation of every dual-channel control mode.",
  "后续重点是优化 PCB 布局、功率器件与栅极驱动选型，继续改善采样和 FOC 执行效率，并补齐经过硬件验证的电压、电流、散热和接线资料。保护功能通过宏配置启停，具体启用状态以固件版本为准。":
    "Next steps include refining PCB layout and power/gate-driver choices, improving sampling and FOC execution efficiency, and documenting hardware-verified voltage/current limits, cooling and wiring. Protection features are compile-time configurable; their enabled state depends on the firmware version.",
  "本页内容和实物图片整理自项目开源仓库；详细代码、配置与最新调试状态请参阅仓库。":
    "This page summarizes the open-source repository and uses its hardware photographs. Refer to the repository for detailed code, configuration and the latest debugging status.",
  "仿真视频：任务异常恢复": "Simulation Videos: Task Recovery",
  "方块放入对应碗：异常检测与恢复": "Matching-Bowl Placement: Anomaly Detection and Recovery",
  "仿真任务：将方块放入对应碗；视频展示执行中的异常检测与恢复过程。":
    "Simulation task: placing blocks into the corresponding bowls, demonstrating anomaly detection and recovery during execution.",
  "方块堆叠：异常检测与恢复": "Block Stacking: Anomaly Detection and Recovery",
  "仿真任务：方块堆叠；视频展示堆叠过程中的异常检测与恢复。":
    "Simulation task: block stacking, demonstrating anomaly detection and recovery during stacking.",
  "SCARA 真机实验：堆叠方块": "SCARA Real-Robot Experiment: Block Stacking",
  "真机任务：使用自制 SCARA 机械臂执行桌面方块堆叠。":
    "Real-robot task: tabletop block stacking with the custom SCARA arm.",
  "HARDWARE & MOTOR CONTROL": "HARDWARE & MOTOR CONTROL",
  "自制三轴 SCARA 机械臂实物照片": "Photograph of the custom three-axis SCARA robot arm",
  "真机平台：自制三轴 SCARA 机械臂，末端采用气泵吸取工具。":
    "Real-robot platform: a custom three-axis SCARA arm with a pneumatic suction end effector.",
  功能与实现: "Features and implementation",
  "双路磁编码器 FOC 电机驱动": "Dual-motor FOC drive with magnetic encoder feedback",
  "基于 CH32V203 的双路有感 FOC 驱动，集成磁编码器反馈、电流采样和多种闭环控制模式，提供硬件 PCB 与嵌入式固件。":
    "A CH32V203-based dual-motor FOC drive integrating magnetic encoder feedback, current sensing and multiple closed-loop control modes, with PCB designs and embedded firmware.",
  开源项目: "Open-source project",
  硬件设计与嵌入式固件: "Hardware design and embedded firmware",
  "以 CH32V203 为主控，使用 MT6701 磁编码器反馈，支持左右两路电机独立使能。":
    "Uses a CH32V203 controller and MT6701 magnetic encoders, with independently enabled left and right motor channels.",
  "固件提供速度、角度、电流及其组合闭环控制，支持 SPWM、七段式 SVPWM 和五段式 SVPWM。":
    "The firmware implements speed, position, current and cascaded control modes, with SPWM, seven-segment SVPWM and five-segment SVPWM modulation.",
  "硬件采用 EG2133 栅极驱动与双 N 沟道 MOS 器件，仓库提供原理图、PCB 和编码器板资料。":
    "The hardware uses EG2133 gate drivers and dual N-channel MOSFET packages; schematics, PCB files and encoder-board documentation are included in the repository.",
  "通过 460800 baud 的 USART 接收双电机目标值，支持数据回传，可配合 Vofa+ 观察控制状态。":
    "Accepts dual-motor targets over USART at 460800 baud and streams telemetry for inspection with tools such as Vofa+.",
  "支持电池电压检测、欠压保护、堵转保护和磁编码器错误保护。":
    "Includes battery voltage monitoring, undervoltage protection, stall protection and magnetic encoder error protection.",
  "当前调试状态：仓库记录左路运行正常；右路在较高占空比下可能导致控制器复位或卡死，硬件仍待优化。各控制模式的板上验证状态以仓库说明为准。":
    "Current status: the repository reports normal operation on the left channel. The right channel may reset or hang the controller at higher duty cycles, and the hardware requires further refinement. Refer to the repository for board-level validation status of each control mode.",
  项目封面视频: " project cover video",
  机械臂配置: "Robot Arm Configuration",
  "真机平台采用自主搭建的三轴 SCARA 机械臂。以下配置依据机械臂开源仓库的系统说明与固件参数整理。":
    "The real-robot platform is a custom-built three-axis SCARA arm. The specifications below are based on the open-source repository documentation and firmware parameters.",
  组件: "Component",
  配置说明: "Specification",
  "机械臂开源仓库 ↗": "Robot arm repository ↗",
  "固件参数文件 ↗": "Firmware parameters ↗",
  机械臂配置表: "Robot arm specifications",
  机械结构: "Mechanical structure",
  "三轴 SCARA：平面双连杆运动与 Z 轴升降；主臂、副臂长度均为 177 mm。":
    "Three-axis SCARA with planar two-link motion and vertical Z-axis travel; both arm links are 177 mm long.",
  下位机控制: "Embedded controller",
  "STM32F103C8，基于 STM32F10x 标准外设库；负责运动学解算、串口协议及步进电机和末端工具控制。":
    "STM32F103C8 with the STM32F10x Standard Peripheral Library, handling kinematics, serial commands, stepper motors and the end effector.",
  运动参数: "Motion parameters",
  "固件配置为 1.8° 步进角、32 细分，Z 轴丝杆导程为 2 mm。":
    "Firmware settings: 1.8° step angle, 32 microsteps, and a 2 mm Z-axis screw lead.",
  末端执行器: "End effector",
  "气泵吸取与释放，用于桌面物块取放；固件当前选择 AIRPUMP 工具配置。":
    "Pneumatic suction and release for tabletop pick-and-place; the firmware selects the AIRPUMP tool configuration.",
  上位机: "Host interface",
  "Qt Widgets / C++ 桌面程序，使用 Qt SerialPort，支持串口连接、末端坐标与工具控制。":
    "Qt Widgets / C++ desktop application using Qt SerialPort for serial connection, end-effector coordinates and tool control.",
  通信接口: "Communication",
  "串口通信：115200 baud、8 数据位、无校验、1 停止位、无流控。":
    "Serial connection: 115200 baud, 8 data bits, no parity, 1 stop bit, and no flow control.",
  真机测试: "Real-Robot Testing",
  "将 VigiClaw 框架部署到自制机械臂平台，展示自然语言指令驱动的桌面方块操作。演示包含上位机交互与机械臂执行过程，呈现从任务指令到真实动作的系统联调。":
    "VigiClaw is deployed on a custom robot arm to demonstrate language-guided tabletop block manipulation. The demo shows host-side interaction and robot execution, illustrating system integration from task instructions to physical actions.",
  "真机测试演示：自然语言交互与自制机械臂桌面操作。":
    "Real-robot demo: natural-language interaction and tabletop manipulation with a custom robot arm.",
  "论文中的定量成功率来自 ManiSkill 仿真实验；真机演示用于展示硬件部署与执行流程。多视角感知和更灵活的恢复策略仍是后续研究方向。":
    "The quantitative success rates in the paper come from ManiSkill simulation experiments. The real-robot demo illustrates hardware deployment and execution. Multi-view perception and more flexible recovery strategies remain future directions.",
  自然语言指令: "Natural-language instructions",
  自制机械臂: "Custom robot arm",
  桌面方块操作: "Tabletop block manipulation",
  "VigiClaw 真机测试动图": "VigiClaw real-robot testing animation",
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
  "2024–2025 学年": "Academic year 2024–2025",
  "2025–2026 学年": "Academic year 2025–2026",
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
