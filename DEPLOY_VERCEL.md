# OnlyFriends Club 上线清单

这份项目已经整理成适合直接部署到 Vercel 的静态站版本，目标是尽快正式上线，并把 `onlyfriendsclub.com` 作为唯一主域名。

## 为什么这样部署

- 当前项目是纯前端静态站，Vercel 可以直接构建并全球分发，省掉服务器运维。
- `onlyfriendsclub.com` 作为主域名，利于后续品牌统一和 SEO 收口。
- `onlyfriendsclub.cn` 只做 301 跳转，避免双域名内容重复。
- HTTPS 由 Vercel 自动签发和续期，无需单独买证书。

## 项目当前部署方式

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: 留空，使用 Vercel 自动检测

## Vercel 里要添加的域名

- `onlyfriendsclub.com` 作为 Production 主域名
- `onlyfriendsclub.cn` 作为跳转域名
- 可选：`www.onlyfriendsclub.com`
- 可选：`www.onlyfriendsclub.cn`

项目内已经通过 `vercel.json` 配好了：

- `onlyfriendsclub.cn` -> `https://onlyfriendsclub.com`
- `www.onlyfriendsclub.cn` -> `https://onlyfriendsclub.com`
- `www.onlyfriendsclub.com` -> `https://onlyfriendsclub.com`

同时已经提供：

- `robots.txt`
- `sitemap.xml`

## 腾讯云 DNS 记录

先在 Vercel 项目里添加域名，再按 Vercel Domains 页面显示的记录填写腾讯云 DNS。

Vercel 官方文档当前给出的通用外部 DNS 参考值是：

- 主域名 Apex 记录通常使用 `A -> 76.76.21.21`
- 子域名 `www` 通常使用 `CNAME -> cname.vercel-dns-0.com`

如果 Vercel 页面显示了不同值，以 Vercel 页面显示值为准。

建议添加：

1. `onlyfriendsclub.com`
   - 主机记录：`@`
   - 记录类型：`A`
   - 记录值：按 Vercel Domains 页面显示填写，常见为 `76.76.21.21`

2. `onlyfriendsclub.cn`
   - 主机记录：`@`
   - 记录类型：`A`
   - 记录值：按 Vercel Domains 页面显示填写，常见为 `76.76.21.21`

3. 可选 `www.onlyfriendsclub.com`
   - 主机记录：`www`
   - 记录类型：`CNAME`
   - 记录值：按 Vercel Domains 页面显示填写，常见为 `cname.vercel-dns-0.com`

4. 可选 `www.onlyfriendsclub.cn`
   - 主机记录：`www`
   - 记录类型：`CNAME`
   - 记录值：按 Vercel Domains 页面显示填写，常见为 `cname.vercel-dns-0.com`

## GitHub 最短步骤

当前目录还不是 Git 仓库，也没有 GitHub 远程仓库。

最短做法：

```bash
git init
git add .
git commit -m "Prepare project for Vercel deployment"
```

然后去 GitHub 新建一个空仓库，再执行 GitHub 页面给你的两条命令：

```bash
git remote add origin <你的 GitHub 仓库地址>
git push -u origin main
```

如果默认分支不是 `main`，按 GitHub 页面提示执行即可。

## 小白操作顺序

1. 把当前项目上传到 GitHub。
2. 登录 Vercel，点击 `Add New...` -> `Project`。
3. 选择你刚上传的 GitHub 仓库，点击 `Import`。
4. 保持 `Framework Preset = Next.js`，其他构建参数默认即可。
5. 点 `Deploy`，先拿到一个 `*.vercel.app` 临时地址。
6. 进入项目 `Settings` -> `Domains`。
7. 添加 `onlyfriendsclub.com`，复制 Vercel 提示的 DNS 记录去腾讯云填写。
8. 再添加 `onlyfriendsclub.cn`，同样按提示去腾讯云填写。
9. 等 Vercel Domains 页面状态变成 `Valid Configuration`。
10. 确认 `onlyfriendsclub.com` 被设置为主域名。
11. 访问 `onlyfriendsclub.cn`，确认会自动跳到 `https://onlyfriendsclub.com`。

## 上线后检查

- 打开 `https://onlyfriendsclub.com`
- 打开 `https://onlyfriendsclub.cn`，确认跳转
- 打开 `https://onlyfriendsclub.com/quiz/`
- 做完一轮测试，确认结果页可正常展示
