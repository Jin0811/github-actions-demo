# GitHub Actions Demo

一个基于 Vue 3 + Vite 的前端项目，演示如何使用 GitHub Actions 实现自动化构建和部署到 GitHub Pages。

## 在线预览

[点击访问](https://jin0811.github.io/github-actions-demo/)

## 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite 7
- **包管理器**: Yarn
- **Node 版本**: 22.12.0

## 项目结构

```
├── .github/
│   └── workflows/
│       └── deploy-on-merge.yml    # GitHub Actions 工作流配置
├── .vscode/
│   └── extensions.json            # VSCode 推荐扩展
├── src/
│   ├── assets/                    # 静态资源
│   ├── components/                # Vue 组件
│   │   └── HelloWorld.vue
│   ├── App.vue                    # 根组件
│   ├── main.js                    # 入口文件
│   └── style.css                  # 全局样式
├── index.html                     # HTML 模板
├── package.json
└── README.md
```

## 本地开发

### 环境要求

- Node.js 22.12.0+
- Yarn

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn dev
```

### 构建生产版本

```bash
yarn build
```

### 本地预览生产构建

```bash
yarn preview
```

## 自动化部署

本项目配置了 GitHub Actions 工作流，实现代码提交后自动构建和部署。

### 触发条件

当代码推送到 `test` 分支时，自动触发构建和部署流程。

### 工作流程

1. **检出代码** - 获取最新代码
2. **设置 Node 环境** - 配置 Node.js 22.12.0
3. **缓存依赖** - 加速后续构建
4. **安装依赖** - 执行 `yarn install --frozen-lockfile`
5. **构建项目** - 执行 `yarn build`
6. **部署到 GitHub Pages** - 将 `dist` 目录部署到 `deploy` 分支
7. **邮件通知** - 构建成功或失败时发送邮件通知

### 工作流配置

详见 [.github/workflows/deploy-on-merge.yml](.github/workflows/deploy-on-merge.yml)

### 邮件通知

构建完成后，系统会自动向以下邮箱发送通知：
- 15797954826@163.com
- 1754551816@qq.com

## 配置说明

### Secrets 配置

在仓库的 **Settings > Secrets and variables > Actions** 中配置以下密钥：

| 密钥名 | 说明 |
|--------|------|
| `MAIL_USERNAME` | 163 邮箱账号 |
| `MAIL_PASSWORD` | 163 邮箱授权码（非登录密码）|

## 脚本命令

| 命令 | 说明 |
|------|------|
| `yarn dev` | 启动开发服务器 |
| `yarn build` | 构建生产版本 |
| `yarn preview` | 预览生产构建 |

## 部署分支说明

项目使用 `deploy` 分支作为 GitHub Pages 的部署分支。该分支仅包含构建产物，由 GitHub Actions 自动维护，**请勿手动修改**。

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request
