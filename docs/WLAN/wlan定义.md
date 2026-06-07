---
title: WLAN定义和基本架构
date: 2024-01-12
tags: [WLAN, 网络配置]
---

# WLAN定义和基本架构

## WLAN概述

WLAN（Wireless Local Area Network）是无线局域网的简称，使用无线通信技术实现设备之间的连接。

## WLAN基本架构

### 1. 基础设施模式

```
    AP
   /|\
  / | \
 STA STA STA
```

### 2. 自组织模式（Ad-hoc）

```
STA --- STA --- STA
 \           /
  \---------/
```

## WLAN组成部分

### Access Point (AP)
无线接入点，负责连接无线客户端。

### Station (STA)
无线客户端设备，如手机、笔记本电脑等。

### Controller (AC)
无线控制器，管理多个AP。

## WLAN标准

| 标准 | 频率 | 最大速率 |
|------|------|----------|
| 802.11a | 5GHz | 54Mbps |
| 802.11b | 2.4GHz | 11Mbps |
| 802.11g | 2.4GHz | 54Mbps |
| 802.11n | 2.4/5GHz | 600Mbps |
| 802.11ac | 5GHz | 3.5Gbps |
| 802.11ax | 2.4/5GHz | 9.6Gbps |

## WLAN安全

- WEP（已过时）
- WPA/WPA2
- WPA3
- 802.1X认证