# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Next.js 14 + Tailwind CSS 的个人博客网站，使用 Contentlayer 管理 MDX 内容。项目基于 timlrx/tailwind-nextjs-starter-blog 模板。

## 常用命令

### 开发
```bash
# 启动开发服务器
yarn dev
# 或
npm run dev

# 构建项目
yarn build
# 或
npm run build

# 启动生产服务器
yarn serve
# 或
npm run serve
```

### 代码质量
```bash
# 运行 ESLint 检查并自动修复
yarn lint
# 或
npm run lint

# 分析包大小
yarn analyze
# 或
npm run analyze
```

## 项目架构

### 目录结构
- `data/` - 内容源目录
  - `blog/` - 博客文章（MDX 格式）
  - `authors/` - 作者信息
  - `siteMetadata.js` - 网站元数据配置
  - `projectsData.ts` - 项目页面数据
  - `headerNavLinks.ts` - 导航链接配置
- `app/` - Next.js App Router 页面
- `components/` - React 组件
- `layouts/` - 页面布局组件
- `public/` - 静态资源
- `contentlayer.config.ts` - Contentlayer 配置

### 内容管理
- 使用 Contentlayer 处理 MDX 内容
- 支持的文章前置字段：title, date, tags, lastmod, draft, summary, images, authors, layout, canonicalUrl
- 自动生成标签计数和搜索索引
- 支持三种文章布局：PostLayout, PostSimple, PostBanner

### 关键特性
- 支持明暗主题切换
- 集成多种分析工具（Umami, Plausible 等）
- 评论系统（Giscus, Utterances, Disqus）
- 搜索功能（Kbar 或 Algolia）
- 语法高亮和数学公式支持
- 响应式设计
- SEO 优化（RSS, sitemap 等）

## 开发注意事项

### 内容创作
- 博客文章放在 `data/blog/` 目录下
- 使用 MDX 格式，支持 React 组件
- 图片使用 `next/image` 优化
- 代码块支持语法高亮和行号

### 样式定制
- 使用 Tailwind CSS
- 主题色通过 `siteMetadata.js` 配置
- 支持自定义 CSS 在 `css/` 目录下

### 部署
- 支持多种部署方式：Vercel, Netlify, GitHub Pages
- 静态导出：`EXPORT=1 UNOPTIMIZED=1 yarn build`
- 需要配置 CSP 头以支持第三方服务

## 环境变量

需要配置的环境变量（根据使用的服务）：
- `NEXT_UMAMI_ID` - Umami 分析
- `NEXT_PUBLIC_GISCUS_REPO` - Giscus 评论
- `NEXT_PUBLIC_GISCUS_REPOSITORY_ID`
- `NEXT_PUBLIC_GISCUS_CATEGORY`
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`