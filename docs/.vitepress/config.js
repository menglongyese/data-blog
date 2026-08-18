import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的笔记",
  description: "个人知识库",
  base: '/data-blog/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/first' }
    ],
    sidebar: [
      {
        text: '笔记列表',
        items: [
          { text: '第一篇笔记', link: '/first' }
        ]
      }
    ]
  }
})