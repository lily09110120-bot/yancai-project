import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/13.jpg'
import img14 from '../images/14.jpg'
import img15 from '../images/15.jpg'
import img16 from '../images/16.jpg'
import img17 from '../images/17.jpg'
import img18 from '../images/18.jpg'
import img19 from '../images/19.jpg'
import img20 from '../images/20.jpg'
import img21 from '../images/21.jpg'
import img22 from '../images/22.jpg'

export const historyData = [
  { 
    year: '先秦/汉', 
    title: '色彩萌芽', 
    desc: '早期的矿物颜料在帛画与墓室壁画中初现，以朱砂、石青、石绿为主。',
    bgColor: '#f4f1ea',
    image: img11,
    special: [
      { name: '马王堆帛画', image: img12 },
      { name: '打虎亭汉墓', image: img13 }
    ]
  },
  { 
    year: '隋唐', 
    title: '敦煌盛世', 
    desc: '岩彩艺术在石窟壁画中达到巅峰，色彩明丽璀璨，金碧辉煌。',
    bgColor: '#fdf3d8',
    image: img14,
    special: [
      { name: '敦煌莫高窟', image: img15 },
      { name: '克孜尔石窟', image: img16 }
    ]
  },
  { 
    year: '近代', 
    title: '技法断层', 
    desc: '文人画兴起，水墨占据主流，岩彩转入民间与边疆，传统色彩技法一度式微。',
    bgColor: '#ede7d5',
    image: img17,
    special: [
      { name: '法海寺壁画', image: img18 },
      { name: '永乐宫壁画', image: img19 }
    ]
  },
  { 
    year: '当代', 
    title: '重彩复兴', 
    desc: '结合现代媒介，岩彩作为独立画种重新回归主流视野，强调材质的东方观。',
    bgColor: '#e2dcc8',
    image: img20,
    special: [
      { name: '中央美院工坊', image: img21 },
      { name: '岩彩艺术中心', image: img22 }
    ]
  }
];
