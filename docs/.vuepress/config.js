module.exports = {
  title: "Root_perm的技术博客",
  description: "网络安全学习笔记与技术分享",
  head: [
    ['meta', { name: 'keywords', content: '网络安全,渗透测试,DVWA,WLAN,防火墙,CTF' }],
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'https://github.com/G-lxh/root-perm-blog',
    repoLabel: 'GitHub',
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '更新时间',
    contributors: false,
    sidebarDepth: 3,
    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/' },
      { text: '关于', link: '/about.html' }
    ],
    sidebar: [
      {
        title: '网络安全',
        collapsible: true,
        children: [
          ['/网络安全/网络安全导论', '网络安全导论'],
          ['/网络安全/web渗透流程', 'Web渗透流程']
        ]
      },
      {
        title: 'DVWA漏洞测试',
        collapsible: true,
        children: [
          ['/DVWA/csrf', 'CSRF']
        ]
      },
      {
        title: 'WLAN配置',
        collapsible: true,
        children: [
          ['/WLAN/wlan定义', 'WLAN定义和架构']
        ]
      },
      {
        title: '防火墙管理',
        collapsible: true,
        children: [
          ['/防火墙/安全策略', '防火墙安全策略']
        ]
      },
      {
        title: '漏洞扫描与防护',
        collapsible: true,
        children: [
          ['/漏洞防护/cve分析', 'CVE漏洞分析']
        ]
      },
      {
        title: 'CTF竞赛',
        collapsible: true,
        children: [
          ['/CTF/web', 'Web方向']
        ]
      },
      {
        title: '信息安全管理',
        collapsible: true,
        children: [
          ['/信息安全/省赛复盘', '省赛复盘']
        ]
      }
    ]
  }
}
