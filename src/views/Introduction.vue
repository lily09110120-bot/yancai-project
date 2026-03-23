<template>
  <div class="page-intro pb-32">
    <!-- 1. 定义板块 -->
    <header class="py-32 bg-[#ede7d5] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div class="md:w-1/2 space-y-10">
          <div class="inline-block px-4 py-1 bg-[#8c4322] text-white text-xs tracking-widest uppercase rounded">什么是岩彩</div>
          <h2 class="text-5xl md:text-7xl font-bold tracking-[0.2em] text-[#332c22]">以胶固色<br/>以石为彩</h2>
          <p class="text-xl text-gray-700 leading-loose border-l-4 border-[#8c4322] pl-8">
            岩彩（Yancai）是以天然矿石为颜料，以动物胶为粘合剂，层层堆垒、相互渗透而形成的绘画艺术。它是大地与时间的结晶，是中国绘画史中极具“物质感”的篇章。
          </p>
        </div>
        <div class="md:w-1/2 relative group">
          <div class="absolute -inset-8 bg-white/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <img :src="img7" alt="岩彩矿石" class="rounded-3xl shadow-2xl border-8 border-white group-hover:rotate-2 transition-transform duration-700">
        </div>
      </div>
    </header>

    <!-- 2. 对比滑块 (Image Comparison) -->
    <section class="py-32 max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h3 class="text-3xl font-bold mb-4">材质的视觉叙事</h3>
        <p class="text-gray-500">左：传统水墨（空灵质感） | 右：岩彩艺术（厚重颗粒）</p>
      </div>
      
      <div class="relative aspect-[3/2] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-white" 
           @mousemove="handleMove" 
           @touchmove="handleMove"
           @mousedown="isDragging = true"
           @mouseup="isDragging = false"
           @mouseleave="isDragging = false"
           ref="sliderRef">
        <!-- 背景层 (右侧图片：岩彩) -->
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${img8})` }"></div>
        
        <!-- 覆盖层 (左侧图片：水墨) -->
        <div class="absolute inset-0 bg-cover bg-center grayscale-[0.3] opacity-90"
             :style="{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)`, backgroundImage: `url(${img9})` }"></div>
        
        <!-- 分隔线 -->
        <div class="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none" 
             :style="{ left: `${sliderPos}%` }">
          <!-- 修复后的箭头图标 -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-[3px] border-[#8c4322]">
            <svg class="w-7 h-7 text-[#8c4322]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 12h10M7 12l3-3m-3 3l3 3m7-3l-3-3m3 3l-3 3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 关联性 (Radar/Venn Component) -->
    <section class="py-32 bg-[#f4f1ea]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-20 items-center">
          <div class="space-y-8 order-2 md:order-1">
            <h3 class="text-4xl font-bold text-[#332c22]">岩彩的血缘坐标</h3>
            <p class="text-gray-600 leading-relaxed text-lg">
              岩彩艺术并非孤立存在，它与敦煌壁画、西藏唐卡以及中国传统工笔重彩有着深厚的历史渊源。通过对“胶”与“石”的共同探索，岩彩连接了跨越千年的丝路文明。
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div v-for="item in relations" :key="item.name" class="p-8 bg-white rounded-2xl shadow-sm border-t-4 border-[#8c4322] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group/item">
                <h4 class="font-bold text-[#8c4322] mb-3 text-lg group-hover/item:tracking-wider transition-all">{{ item.name }}</h4>
                <p class="text-sm text-gray-500 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
          
          <div class="order-1 md:order-2 flex justify-center">
            <!-- 岩彩血缘坐标图 -->
            <div class="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500">
              <img :src="img10" alt="岩彩的血缘坐标" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';

const sliderPos = ref(50);
const isDragging = ref(false);
const sliderRef = ref(null);

const handleMove = (e) => {
  if (!isDragging.value && e.type !== 'touchmove') return;
  const rect = sliderRef.value.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  sliderPos.value = Math.max(0, Math.min(100, (x / rect.width) * 100));
};

const relations = [
  { name: '敦煌壁画', desc: '岩彩的母体，贡献了最核心的矿物色彩体系。' },
  { name: '西藏唐卡', desc: '保留了极高纯度的天然颜料调胶与绘制技法。' },
  { name: '传统工笔', desc: '在勾勒与渲染技巧上提供了细腻的笔墨基础。' },
  { name: '当代重彩', desc: '术语的演变见证了从技法到独立画种的回归。' }
];
</script>

<style scoped>
.grayscale-50 {
  filter: grayscale(0.5);
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

.writing-vertical {
  writing-mode: vertical-rl;
}
</style>
