import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Holmit的观察所",
  description: "在短视频时代，保持独立思考",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:  [
  { text: '首页', link: '/' },
  { text: '技术笔记', link: '/tech/first-blog' },
  {text:'关于我',link:'/about'}
],

    sidebar: [
  {
    text: '技术笔记',
    items: [
      { text: '第一篇文章', link: '/tech/first-blog' },
      {text:'踩坑复盘',link:'tech/post2'},
      {text:'项目说明',link:'/tech/project-summary'}
    ]
  }
],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
