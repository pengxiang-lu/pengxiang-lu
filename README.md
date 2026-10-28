# 卢鹏翔 · 个人学术主页

无需安装依赖，纯 HTML / CSS / JavaScript，兼容 GitHub Pages。内容来自提供的简历及时间线。论文仅使用已知名称 VigiClaw；未编造完整英文标题或作者名单。原始简历作为 assets/cv.pdf 提供下载。

## 本地查看
直接用浏览器打开 index.html，或在本目录运行 `python3 -m http.server 8000` 后访问 http://localhost:8000。

## 发布到 GitHub Pages
1. 创建公开仓库 `pengxiang-lu.github.io`（与实际 GitHub 用户名一致）。
2. 上传本目录内的所有文件，保持 index.html 在仓库根目录；不要多套一层文件夹。
3. Settings → Pages → Deploy from a branch → main → / (root) → Save。
4. 部署后访问 https://pengxiang-lu.github.io/ 。
如已有此仓库，先备份现有内容再合并。当前交付未上传或发布到 GitHub。

## 添加论文、视频、图片
所有媒体链接集中在 `content.js`，无需修改页面结构。空字符串显示待补充；添加路径后自动启用。

例如，把文件放入 assets/ 后修改：
```js
paper: { url: "assets/vigiclaw.pdf", code: "https://github.com/你的用户名/仓库" }
```
在对应项目对象中修改：
```js
video: "assets/vigiclaw.mp4", // 也支持外部视频页面链接，作为新标签页打开
image: "assets/vigiclaw-cover.jpg",
paper: "assets/vigiclaw.pdf",
code: "https://github.com/你的用户名/仓库"
```
本地 mp4 / webm / ogg 文件会在项目弹窗中显示视频播放器；Bilibili / YouTube 等页面链接会显示 Video 按钮。视频不会自动播放。

建议封面比例约 16:9。当前封面为示意图，不代表项目实拍。头像来自简历，可替换 assets/portrait.jpg。添加真实实验图片后，将对应 image 字段设为文件路径。

## 修改内容
- 个人介绍、教育时间线、论文展示、荣誉、邮箱与 GitHub 链接：index.html。
- 项目文案、详情、媒体路径和排序日期：content.js。
- 主题、字体、尺寸：style.css。
- 简历下载：替换 assets/cv.pdf。该 PDF 为原始文件，含手机号和出生年月；发布前可按需换成公开版。

功能：深浅主题切换及记忆、响应式布局、精选/最近项目排序、可用 Escape 关闭的项目详情弹窗、原始简历下载、锚点导航。
