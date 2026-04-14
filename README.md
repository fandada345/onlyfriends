# 球探报告

一个移动端优先、可直接静态部署的篮球球员模板测试 Web 项目，基于 Next.js 和 Tailwind CSS 构建。

## 本地运行

```bash
npm install
npm run dev
```

默认访问 [http://localhost:3000](http://localhost:3000)。

## 打包构建

```bash
npm run build
```

构建完成后会输出到 `out/`，适合直接部署到 Vercel 等静态托管平台。

## 当前实现

- 首页、题目页、结果页均为纯前端页面
- 15 道题目、球员资料、结果优先级全部放在本地数据文件中
- 结果页展示球员图片、本地计分结果和中文球探文案
- 已启用静态导出配置，不依赖后端、数据库或登录系统

## 域名与上线

- 主域名：`onlyfriendsclub.com`
- 跳转域名：`onlyfriendsclub.cn`
- Vercel 部署说明见 [DEPLOY_VERCEL.md](/Users/fanenda/Desktop/onlyfriends/DEPLOY_VERCEL.md)
