# Root_perm的技术博客

一个基于 VuePress 2 的网络安全技术博客。

## 技术栈

- VuePress 2
- VuePress Search Plugin
- GitHub Pages

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 部署到 GitHub Pages

```bash
npm run deploy
```

## 项目结构

```
root-perm-blog/
├── docs/
│   ├── .vuepress/
│   │   ├── config.js
│   │   └── public/
│   │       └── images/
│   ├── 网络安全/
│   ├── DVWA/
│   ├── WLAN/
│   ├── 防火墙/
│   ├── 漏洞防护/
│   ├── CTF/
│   ├── 信息安全/
│   ├── index.md
│   └── about.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
└── README.md
```

## 配置说明

### 修改网站配置

编辑 `docs/.vuepress/config.js` 文件：

- `title`: 网站标题
- `description`: 网站描述
- `base`: GitHub Pages 路径
- `sidebar`: 侧边栏配置

### 添加新文档

1. 在 `docs/` 目录下创建新的 Markdown 文件
2. 在 `docs/.vuepress/config.js` 中添加侧边栏链接

## 主题功能

- ✅ 响应式设计
- ✅ 代码高亮
- ✅ 全文搜索
- ✅ 深色/浅色模式
- ✅ 最近更新时间
- ✅ 面包屑导航

## License

MIT