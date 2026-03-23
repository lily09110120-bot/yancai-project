import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'

export const homeData = {
  carousel: [
    {
      id: 1,
      image: img1,
      title: '大地之色',
      subtitle: '取自自然的矿石，凝结千年的光辉',
      tags: ['天然矿石', '敦煌色彩', '物质美学']
    },
    {
      id: 2,
      image: img2,
      title: '岁月无声',
      subtitle: '在时间的磨砺中，见证永恒的璀璨',
      tags: ['千年传承', '壁画瑰宝', '工匠精神']
    },
    {
      id: 3,
      image: img3,
      title: '岩彩复兴',
      subtitle: '现代视角下的传统重生，连接过去与未来',
      tags: ['当代艺术', '重彩复兴', '数字化保护']
    }
  ],
  keywords: [
    { name: '材质', desc: '以天然矿物为色相，强调物质的物理存在感与颗粒质感。' },
    { name: '时间', desc: '跨越千年的丝路文明，在壁画剥落中沉淀的厚重历史。' },
    { name: '空间', desc: '利用颗粒粗细产生的折射光线，构建超越二维的视觉空间。' }
  ],
  news: [
    {
      date: '2026.04.15',
      title: '“大地回响”——当代岩彩艺术大展在京开幕',
      category: '展览信息',
      image: img4
    },
    {
      date: '2026.03.20',
      title: '敦煌研究院启动“数字化岩彩实验室”二期工程',
      category: '项目动态',
      image: img5
    },
    {
      date: '2026.02.10',
      title: '岩彩画技法：从原石研磨到层叠绘制的完整流程解析',
      category: '学术研究',
      image: img6
    }
  ]
}
