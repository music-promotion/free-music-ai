import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-emerald-600">{siteConfig.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{siteConfig.description}</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* 简洁标题区 */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              免费创作你的音乐
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              精选最实用的免费AI音乐工具，从入门到精通，让每个人都能成为音乐创作者
            </p>
            
            {/* CTA */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
            >
              开始创作 →
            </a>
          </div>

          {/* 分类导航 - 极简卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {siteConfig.theme.categories.map((category) => (
              <Link
                key={category}
                href="/articles"
                className="group bg-gray-50 p-8 rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {category}
                </h3>
                <p className="text-sm text-gray-400 mt-2 group-hover:text-emerald-500 transition-colors">
                  查看内容 →
                </p>
              </Link>
            ))}
          </div>

          {/* 文章入口 */}
          <div className="text-center mb-20">
            <Link
              href="/articles"
              className="inline-block text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-lg"
            >
              浏览所有文章 →
            </Link>
          </div>

          {/* 产品推荐区 - 极简设计 */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white mb-20">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">推荐工具</h3>
              <p className="text-emerald-50 mb-6 text-lg leading-relaxed">
                {siteConfig.targetProduct.description}
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                立即体验
              </a>
            </div>
          </div>

          {/* 相关推荐 - 极简列表 */}
          <div className="border-t border-gray-100 pt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">相关站点</h3>
            <div className="space-y-3">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <span className="text-gray-900 font-medium group-hover:text-emerald-600 transition-colors">
                    {site.name}
                  </span>
                  <span className="text-gray-400 ml-2 group-hover:text-emerald-500 transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>{siteConfig.name} © 2025</p>
        </div>
      </footer>
    </div>
  )
}
