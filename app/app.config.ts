export default defineAppConfig({
  title: 'sURL',
  email: 'chinapmcc@gmail.com',
  github: 'https://github.com/liyaoxu/Sink',
  twitter: 'https://surl.chinapmcc.com',
  telegram: 'https://t.me/chinapmcc',
  mastodon: 'https://surl.chinapmcc.com',
  blog: 'https://www.chinapmcc.com',
  description: '一个简单 / 快速 / 安全的短链接生成器，带统计功能，完全运行在 Cloudflare 平台上。',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
