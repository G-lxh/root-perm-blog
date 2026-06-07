---
title: CTF Web方向入门
date: 2024-01-14
tags: [CTF, Web安全]
---

# CTF Web方向入门

## CTF概述

CTF（Capture The Flag）是一种网络安全竞赛形式，参赛者需要解决各种安全挑战来获取flag。

## Web方向常见题型

### 1. SQL注入
```sql
UNION SELECT 1,2,3 FROM users
```

### 2. XSS跨站脚本
```javascript
<script>alert(document.cookie)</script>
```

### 3. 文件上传
- 绕过文件类型检查
- 解析漏洞利用

### 4. 代码审计
- PHP代码分析
- 逻辑漏洞挖掘

### 5. 密码破解
- 弱密码爆破
- 哈希破解

## 常用工具

- Burp Suite
- SQLMap
- Nikto
- Wfuzz
- Gobuster

## 学习资源

- OWASP Top 10
- Hack The Box
- VulnHub
- 国内CTF平台

## 解题思路

1. 信息收集
2. 漏洞发现
3. 漏洞利用
4. 获取flag