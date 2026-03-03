import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-cyan-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
              {siteConfig.name}
            </h1>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.7 }}>
              {siteConfig.description}
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden md:block px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer"
            style={{ 
              background: 'var(--color-primary)',
              color: 'white'
            }}
          >
            浏览文章
          </Link>
        </div>
      </header>

      {/* Hero Section - Single Column Minimal */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Hero Headline */}
          <div className="text-center mb-16">
            <h2 
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-text)' }}
            >
              免费创作<br />你的音乐
            </h2>
            <p 
              className="text-xl md:text-2xl mb-12 leading-relaxed"
              style={{ color: 'var(--color-text)', opacity: 0.8 }}
            >
              精选最实用的免费AI音乐工具<br />
              让每个人都能成为音乐创作者
            </p>
            
            {/* Large CTA */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-200 cursor-pointer hover:scale-105"
              style={{ 
                background: 'var(--color-cta)',
                color: 'white',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              开始创作 →
            </a>
          </div>

          {/* Benefit Bullets - Toolbox Style */}
          <div className="mb-20 space-y-4">
            {[
              { icon: '🎵', title: '工具推荐', desc: '精选最好用的免费AI音乐工具' },
              { icon: '📚', title: '使用教程', desc: '从入门到精通的完整指南' },
              { icon: '💡', title: '技巧分享', desc: '创作技巧与实战经验' }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-6 p-6 bg-white rounded-2xl transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl text-3xl"
                  style={{ background: 'var(--color-background)' }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text)', opacity: 0.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories - List Style */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              内容分类
            </h3>
            <div className="space-y-3">
              {siteConfig.theme.categories.map((category) => (
                <Link
                  key={category}
                  href="/articles"
                  className="group flex items-center justify-between p-5 bg-white rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.01]"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                >
                  <span className="text-lg font-medium" style={{ color: 'var(--color-text)' }}>
                    {category}
                  </span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
                    style={{ color: 'var(--color-primary)' }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Recommendation - Bold Block */}
          <div 
            className="rounded-3xl p-12 mb-20 text-white"
            style={{ 
              background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              推荐工具
            </h3>
            <p className="text-lg mb-8 leading-relaxed opacity-95">
              {siteConfig.targetProduct.description}
            </p>
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer hover:scale-105"
              style={{ 
                color: 'var(--color-primary)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              立即体验 →
            </a>
          </div>

          {/* Related Sites - Minimal List */}
          <div className="border-t pt-12" style={{ borderColor: 'var(--color-primary)', opacity: 0.2 }}>
            <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-text)' }}>
              相关站点
            </h3>
            <div className="space-y-2">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg transition-all duration-200 cursor-pointer"
                  style={{ 
                    background: 'transparent',
                  }}
                >
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                    {site.name}
                  </span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                    style={{ color: 'var(--color-primary)' }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8" style={{ borderColor: 'var(--color-primary)', opacity: 0.2 }}>
        <div className="container mx-auto px-4 text-center text-sm" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
          <p>{siteConfig.name} © 2025</p>
        </div>
      </footer>
    </div>
  )
}
