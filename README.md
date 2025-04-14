# @karinjs/axios

## 简介

@karinjs/axios 是一个对 axios 进行重新打包的优化版本，显著减小了体积。这个项目使用 Vite 对原始的 axios 库进行了重新构建，使其更加轻量级，同时保留了 axios 的核心功能。

## 特点

- **极小的体积**：从原始的 2.7MB ([数据来源](https://pkg-size.dev/axios)) 缩减到仅 96KB，减少了约 96.4% 的体积
- **零依赖**：没有额外依赖，更加纯净
- **完全类型支持**：提供完整的 TypeScript 类型定义
- **与原始 API 兼容**：保持与原始 axios API 的兼容性

## 系统要求

- Node.js >= 18.0.0
- 仅支持 ESM 模块
- 仅支持 Node 环境

## 安装

```bash
# 使用 npm
npm install @karinjs/axios

# 使用 yarn
yarn add @karinjs/axios

# 使用 pnpm
pnpm add @karinjs/axios
```

### 使用别名安装

如果您想要使用别名安装，可以使用以下方式：

```bash
# 使用 npm 安装并指定别名
npm install axios@npm:@karinjs/axios

# 使用 yarn 安装并指定别名
yarn add axios@npm:@karinjs/axios

# 使用 pnpm 安装并指定别名
pnpm add axios@npm:@karinjs/axios
```

然后在您的代码中可以这样导入：

```javascript
// 使用别名导入
import axios from "axios";
```

## 使用方法

与原始的 axios 库使用方式相同：

```javascript
import axios from "@karinjs/axios";

// 发起 GET 请求
axios
  .get("/api/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// 发起 POST 请求
axios
  .post("/api/submit", {
    name: "user",
    email: "user@example.com",
  })
  .then((response) => {
    console.log(response.data);
  });
```

## 版本信息映射

| 原始版本 | @karinjs/axios | 备注 |
| -------- | -------------- | ---- |
| 1.8.4    | 1.0.0          |      |
