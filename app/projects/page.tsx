// 导入项目数据和Card组件
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
// 导入生成页面元数据的函数
import { genPageMetadata } from 'app/seo'

// 生成页面的元数据
export const metadata = genPageMetadata({ title: 'Projects' })

// Projects页面组件
export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* 页面标题和描述部分 */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        {/* 项目卡片列表部分 */}
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {/* 遍历projectsData数组,为每个项目创建一个Card组件 */}
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
