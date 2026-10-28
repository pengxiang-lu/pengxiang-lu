# Pengxiang Lu | 卢鹏翔

个人学术主页。采用与 tofour.github.io 相同形式的多页面静态目录：根目录首页、about 介绍页、project 项目详情页及附件目录。内容、样式和资源属于本个人主页。

## 目录

```text
pengxiang-homepage/
├── index.html                 # 首页
├── about/
│   └── index.html             # 完整个人介绍
├── project/
│   ├── vigiclaw/
│   │   ├── index.html         # VigiClaw 项目详情
│   │   └── attachments/       # 论文、图片、视频等项目附件
│   ├── vla-memory/
│   │   ├── index.html
│   │   └── attachments/
│   └── smart-car/
│       ├── index.html
│       └── attachments/
├── assets/
│   ├── avatar.jpg             # 个人照片
│   ├── cv.pdf                 # 简历
│   ├── favicon.svg
│   ├── style.css              # 共享样式
│   ├── content.js             # 项目内容和媒体路径
│   └── script.js              # 主题、排序和项目内容加载
├── .nojekyll
└── README.md
```

## 添加论文、视频和封面

以 VigiClaw 为例，将文件放到 `project/vigiclaw/attachments/`，再编辑 `assets/content.js`：

```js
// 首页论文链接
paper: { url: "project/vigiclaw/attachments/paper.pdf", code: "https://github.com/你的用户名/仓库" }
// 对应项目的媒体字段
paper: "project/vigiclaw/attachments/paper.pdf",
video: "project/vigiclaw/attachments/demo.mp4",
image: "project/vigiclaw/attachments/cover.jpg",
code: "https://github.com/你的用户名/仓库"
```

所有媒体路径都相对于网站根目录，在首页和项目子页面通用。空路径显示待补充；mp4/webm/ogg 使用播放器，外部视频页面链接显示按钮。共享资源放 assets/，项目专属资源放对应 attachments/。

个人信息和首页时间线编辑 index.html；完整介绍编辑 about/index.html；项目文案编辑 assets/content.js，项目页的静态标题、概述等编辑对应 project/项目名/index.html。

## 本地查看

在本目录运行 `python3 -m http.server 8000`，打开 http://localhost:8000/ 。本地服务器支持 `about/` 与 `project/项目名/` 形式的目录网址。

## GitHub Pages

上传本目录内容至仓库根目录。Settings → Pages → Deploy from a branch → main → / (root) → Save。

目前仓库为 pengxiang-lu/pengxiang-lu，启用后网站地址为 https://pengxiang-lu.github.io/pengxiang-lu/ 。相对链接同时兼容该子路径和独立用户主页根路径。
