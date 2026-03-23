<template>
  <div class="page-history transition-colors duration-1000 min-h-screen pb-32" :style="{ backgroundColor: currentBgColor }">
    <!-- 1. 标题区 -->
    <header class="py-40 text-center max-w-4xl mx-auto px-6 relative">
      <SectionTitle>剥落的文明</SectionTitle>
      <p class="text-xl md:text-2xl font-light tracking-[0.2em] text-[#8c4322] uppercase opacity-70">The Peeling Civilization: A Chronological Journey</p>
    </header>

    <!-- 2. 纵向非对称时间轴 -->
    <section class="max-w-7xl mx-auto px-6 relative">
      <!-- 隐藏的时间线轴线 (PC) -->
      <div class="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#8c4322]/10 -translate-x-1/2 hidden md:block"></div>
      
      <div class="space-y-40">
        <div v-for="(hist, index) in historyEvents" 
             :key="index" 
             class="history-item relative flex flex-col md:flex-row items-center gap-12 md:gap-0 opacity-0 transition-all duration-1000"
             :class="[index % 2 === 0 ? 'md:flex-row-reverse' : '', visibleIndices.has(index) ? 'is-visible' : '']"
             :ref="el => { if (el) eventRefs[index] = el }">
          
          <!-- 内容侧 -->
          <div class="w-full md:w-1/2 flex px-4 md:px-20" :class="index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'">
            <div class="bg-white/40 backdrop-blur-xl p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-[#8c4322]/5 transition-all duration-500 group max-w-lg">
              <span class="text-4xl font-serif text-[#8c4322] mb-4 block group-hover:tracking-widest transition-all">{{ hist.year }}</span>
              <h4 class="text-2xl font-bold mb-6 text-[#332c22]">{{ hist.title }}</h4>
              <p class="text-gray-700 leading-relaxed text-lg mb-8">{{ hist.desc }}</p>
              
              <!-- 石窟专题局部 -->
              <div v-if="hist.special" class="mt-8 pt-8 border-t border-[#8c4322]/10">
                <div class="flex items-center gap-4 mb-4">
                  <span class="w-2 h-2 bg-[#8c4322] rounded-full"></span>
                  <span class="text-xs font-bold text-[#8c4322] uppercase tracking-widest">代表性石窟遗址</span>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="cave in hist.special" :key="cave.name" class="group/cave cursor-pointer">
                    <img :src="cave.image" :alt="cave.name" class="w-full h-24 object-cover rounded-lg mb-2 opacity-80 group-hover/cave:opacity-100 transition">
                    <span class="text-xs font-bold text-[#332c22] group-hover/cave:text-[#8c4322]">{{ cave.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 中心圆点 -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#8c4322] border-8 border-white shadow-xl z-20 hidden md:block transition-all duration-500 scale-75 group-hover:scale-100"></div>

          <!-- 视觉侧 (残片展示) -->
          <div class="w-full md:w-1/2 px-4 md:px-20">
            <div class="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-700 grayscale hover:grayscale-0">
              <img :src="hist.image" :alt="hist.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 底部复兴总结 -->
    <section class="mt-40 text-center max-w-4xl mx-auto px-6 py-20 bg-white/30 backdrop-blur-md rounded-full border border-white/50 shadow-inner">
      <h3 class="text-3xl font-bold mb-6 text-[#332c22]">从“重彩”向“岩彩”的术语演变</h3>
      <p class="text-gray-600 leading-loose">
        当代岩彩复兴不仅是技法的回归，更是艺术主体性的觉醒。从作为工笔画的分支到确立为独立画种，岩彩完成了从“色彩技法”到“东方物质观”的跨越。
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SectionTitle from '../components/SectionTitle.vue';
import { historyData as historyEvents } from '../assets/data/historyData.js';

const currentBgColor = ref('#f4f1ea');
const eventRefs = ref([]);
const visibleIndices = ref(new Set());

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = eventRefs.value.indexOf(entry.target);
      if (entry.isIntersecting) {
        visibleIndices.value.add(index);
        currentBgColor.value = historyEvents[index].bgColor;
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
  });

  eventRefs.value.forEach(ref => {
    if (ref) observer.observe(ref);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.history-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.history-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
