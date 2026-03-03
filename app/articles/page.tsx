import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-cyan-100">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-block">
            <h1 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
              {siteConfig.name}
            </h1>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.7 }}>
              文章列表
            </p>
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-5xl font-bold mb-12" style={{ color: 'var(--color-text)' }}>
            所有文章
          </h1>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map(category => (
              <a
                key={category}
                href={`#${category}`}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105"
                style={{ 
                  background: 'var(--color-primary)',
                  color: 'white',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {category}
              </a>
            ))}
          </div>

          {/* Articles by Category - Toolbox List Style */}
          {categories.map(category => {
            const categoryArticles = articles.filter(a => a.category === category)
            return (
              <div key={category} id={category} className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-2 h-8 rounded-full"
                    style={{ background: 'var(--color-primary)' }}
                  />
                  <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                    {category}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {categoryArticles.map(article => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group block bg-white rounded-2xl p-6 transition-all duration-200 cursor-pointer hover:scale-[1.01]"
                      style={{ boxShadow: 'var(--shadow-md)' }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 
                            className="text-xl font-semibold mb-2 transition-colors duration-200"
                            style={{ color: 'var(--color-text)' }}
                          >
                            {article.title}
                          </h3>
                          <p 
                            className="text-sm mb-3 leading-relaxed"
                            style={{ color: 'var(--color-text)', opacity: 0.7 }}
                          >
                            {article.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--color-text)', opacity: 0.5 }}>
                            <span>{article.date}</span>
                          </div>
                        </div>
                        
                        <svg 
                          className="w-6 h-6 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" 
                          style={{ color: 'var(--color-primary)' }}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer hover:scale-105"
              style={{ 
                background: 'var(--color-cta)',
                color: 'white',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
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
