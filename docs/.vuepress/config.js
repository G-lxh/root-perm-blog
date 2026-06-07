const { defaultTheme } = require('vuepress')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  base: '/root-perm-blog/',
  title: "Root_perm的技术博客",
  description: "网络安全学习笔记与技术分享",
  head: [
    ['meta', { name: 'keywords', content: '网络安全,渗透测试,DVWA,WLAN,防火墙,CTF' }],
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/root-perm/root-perm-blog',
    repoLabel: 'GitHub',
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '更新时间',
    contributors: false,
    sidebarDepth: 3,
    navbar: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/docs/' },
      { text: '关于', link: '/about.html' }
    ],
    sidebar: {
      '/docs/': [
        {
          text: '网络安全',
          collapsible: true,
          children: [
            { text: '网安基础', link: '/docs/网络安全/网安基础.md' },
            { text: '网安进阶', link: '/docs/网络安全/网安进阶.md' },
            { text: '网安高级', link: '/docs/网络安全/网安高级.md' },
            { text: 'Web渗透流程', link: '/docs/网络安全/web渗透流程.md' },
            { text: '情报收集', link: '/docs/网络安全/情报收集.md' },
            { text: '网络安全导论', link: '/docs/网络安全/网络安全导论.md' },
            { text: 'Windows与Linux命令', link: '/docs/网络安全/windows-linux命令.md' },
            { text: 'Kali常用命令', link: '/docs/网络安全/kali命令.md' },
            { text: '网络基础协议', link: '/docs/网络安全/网络协议.md' },
            { text: 'Web基础-HTML', link: '/docs/网络安全/web-html.md' },
            { text: 'Web基础-CSS&JS', link: '/docs/网络安全/web-css-js.md' },
            { text: '数据库基础', link: '/docs/网络安全/数据库基础.md' },
            { text: '数据库进阶', link: '/docs/网络安全/数据库进阶.md' },
            { text: 'PHP基础', link: '/docs/网络安全/php基础.md' }
          ]
        },
        {
          text: 'DVWA漏洞测试',
          collapsible: true,
          children: [
            { text: '模板', link: '/docs/DVWA/模板.md' },
            { text: 'Brute Force爆破', link: '/docs/DVWA/brute-force.md' },
            { text: '命令注入', link: '/docs/DVWA/command-injection.md' },
            { text: 'CSRF', link: '/docs/DVWA/csrf.md' },
            { text: '文件包含', link: '/docs/DVWA/file-inclusion.md' },
            { text: '文件上传', link: '/docs/DVWA/file-upload.md' },
            { text: '不安全验证流程', link: '/docs/DVWA/insecure-captcha.md' }
          ]
        },
        {
          text: 'WLAN配置',
          collapsible: true,
          children: [
            { text: 'WLAN定义和架构', link: '/docs/WLAN/wlan定义.md' },
            { text: 'WLAN射频和信道', link: '/docs/WLAN/wlan射频.md' },
            { text: '二层组网配置', link: '/docs/WLAN/二层组网.md' },
            { text: '三层组网配置', link: '/docs/WLAN/三层组网.md' },
            { text: '隧道转发配置', link: '/docs/WLAN/隧道转发.md' },
            { text: '混合转发配置', link: '/docs/WLAN/混合转发.md' },
            { text: '大型WLAN配置', link: '/docs/WLAN/大型wlan.md' },
            { text: '射频资源管理', link: '/docs/WLAN/射频管理.md' },
            { text: 'AC间漫游配置', link: '/docs/WLAN/ac漫游.md' },
            { text: '负载分担配置', link: '/docs/WLAN/负载分担.md' },
            { text: '故障诊断', link: '/docs/WLAN/故障诊断.md' }
          ]
        },
        {
          text: '防火墙管理',
          collapsible: true,
          children: [
            { text: '信息安全概念', link: '/docs/防火墙/信息安全概念.md' },
            { text: '网络基础知识', link: '/docs/防火墙/网络基础.md' },
            { text: '网络安全威胁', link: '/docs/防火墙/安全威胁.md' },
            { text: '防火墙安全策略', link: '/docs/防火墙/安全策略.md' },
            { text: '网络地址转换', link: '/docs/防火墙/nat配置.md' },
            { text: '双机热备技术', link: '/docs/防火墙/双机热备.md' },
            { text: '实操记录汇总', link: '/docs/防火墙/实操记录.md' }
          ]
        },
        {
          text: '漏洞扫描与防护',
          collapsible: true,
          children: [
            { text: 'CVE漏洞分析', link: '/docs/漏洞防护/cve分析.md' },
            { text: 'Meterpreter使用', link: '/docs/漏洞防护/meterpreter.md' },
            { text: 'Acunetix指南', link: '/docs/漏洞防护/acunetix.md' },
            { text: '服务路径漏洞', link: '/docs/漏洞防护/unquoted-path.md' }
          ]
        },
        {
          text: 'CTF竞赛',
          collapsible: true,
          children: [
            { text: 'Web方向', link: '/docs/CTF/web.md' },
            { text: 'Crypto方向', link: '/docs/CTF/crypto.md' },
            { text: '题目练习', link: '/docs/CTF/练习题.md' }
          ]
        },
        {
          text: '信息安全管理',
          collapsible: true,
          children: [
            { text: '省赛复盘', link: '/docs/信息安全/省赛复盘.md' },
            { text: '流量分析', link: '/docs/信息安全/流量分析.md' },
            { text: 'Windows安全', link: '/docs/信息安全/windows安全.md' },
            { text: '做题思路', link: '/docs/信息安全/做题思路.md' }
          ]
        }
      ]
    }
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档'
        }
      }
    }),
    docsearchPlugin({
      appId: '',
      apiKey: '',
      indexName: ''
    })
  ]
}