<template>
  <div class="page-process min-h-screen bg-[#fdfbf7] pb-32">
    <!-- 1. 顶部标题 -->
    <header class="py-32 text-center max-w-4xl mx-auto px-6">
      <SectionTitle>匠心工坊：研磨时光</SectionTitle>
      <p class="text-gray-500 tracking-widest uppercase text-sm">Interactive Tutorial: The Alchemy of Mineral Colors</p>
    </header>

    <!-- 2. 横向滚动步骤 -->
    <section class="relative">
      <div class="flex overflow-x-auto pb-20 px-[10vw] gap-12 no-scrollbar snap-x snap-mandatory">
        <div v-for="(step, index) in steps" :key="index" 
             class="flex-shrink-0 w-[80vw] md:w-[600px] snap-center group">
          <div class="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <!-- 步骤头部 -->
            <div class="flex justify-between items-start mb-10">
              <span class="text-7xl font-black text-[#8c4322]/10 group-hover:text-[#8c4322]/20 transition-colors">0{{ index + 1 }}</span>
              <div class="w-16 h-16 bg-[#8c4322] text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <component :is="step.icon" class="w-8 h-8" />
              </div>
            </div>

            <!-- 步骤内容 -->
            <h3 class="text-3xl font-bold mb-6 text-[#332c22]">{{ step.name }}</h3>
            <p class="text-gray-600 leading-loose text-lg mb-10">{{ step.detail }}</p>

            <!-- 交互区域 -->
            <div class="bg-[#f4f1ea] rounded-2xl p-6 relative overflow-hidden">
              <div v-if="step.type === 'ore'" class="grid grid-cols-3 gap-4">
                <div v-for="ore in step.ores" :key="ore.name" 
                     @click="activeOre = ore"
                     class="cursor-pointer text-center group/ore">
                  <div class="aspect-square bg-white rounded-xl mb-2 overflow-hidden shadow-sm group-hover/ore:shadow-md transition">
                    <img :src="ore.image" :alt="ore.name" class="w-full h-full object-cover">
                  </div>
                  <span class="text-xs font-bold text-gray-500 group-hover/ore:text-[#8c4322]">{{ ore.name }}</span>
                </div>
              </div>

              <div v-if="step.type === 'grind'" class="flex flex-col items-center py-6">
                <div class="w-full h-3 bg-white/50 rounded-full mb-8 overflow-hidden shadow-inner border border-[#8c4322]/10">
                  <div class="h-full bg-gradient-to-r from-[#8c4322] to-[#a65430] transition-all duration-300 relative" :style="{ width: `${grindProgress}%` }">
                    <div class="absolute top-0 right-0 h-full w-2 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                <button @mousedown="startGrinding" @mouseup="stopGrinding" @mouseleave="stopGrinding"
                        @touchstart.prevent="startGrinding" @touchend.prevent="stopGrinding"
                        class="group/btn relative px-10 py-4 bg-[#332c22] text-white rounded-full text-sm font-bold active:scale-95 transition-all select-none overflow-hidden shadow-xl">
                  <span class="relative z-10">{{ grindProgress < 100 ? '按住模拟手工研磨' : '研磨完成，色相纯净' }}</span>
                  <div v-if="isGrinding" class="absolute inset-0 bg-[#8c4322] animate-pulse"></div>
                </button>
                <div class="mt-6 flex gap-8 text-[10px] font-bold tracking-widest text-[#8c4322]/60 uppercase">
                  <span>目数：{{ Math.floor(grindProgress * 12) }}</span>
                  <span>质感：{{ grindProgress < 40 ? '粗目' : grindProgress < 80 ? '中目' : '细目' }}</span>
                </div>
              </div>

              <div v-if="step.type === 'glue'" class="space-y-4">
                <div class="flex justify-between text-xs font-bold uppercase tracking-widest text-[#8c4322]">
                  <span>矿粉</span>
                  <span>10 : 3</span>
                  <span>胶液</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="flex-1 h-12 bg-white rounded-lg border-2 border-[#8c4322]/20 flex items-center justify-center text-xs font-bold">三千本胶</div>
                  <div class="text-[#8c4322]">+</div>
                  <div class="flex-1 h-12 bg-[#332c22] text-white rounded-lg flex items-center justify-center text-xs font-bold">矿物粉末</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  Ore Modal -->
      <transition name="fade">
        <div v-if="activeOre" class="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md" @click="activeOre = null">
          <div class="bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl" @click.stop>
            <div class="flex gap-8 mb-8">
              <div class="w-32 h-32 bg-[#f4f1ea] rounded-2xl flex items-center justify-center">
                <img :src="activeOre.image" :alt="activeOre.name" class="w-20 h-20 object-contain">
              </div>
              <div>
                <h4 class="text-3xl font-bold text-[#332c22] mb-2">{{ activeOre.name }}</h4>
                <div class="px-3 py-1 bg-[#8c4322]/10 text-[#8c4322] text-xs font-bold rounded-full inline-block">{{ activeOre.chemical }}</div>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed mb-8">{{ activeOre.desc }}</p>
            <button @click="activeOre = null" class="w-full py-4 bg-[#332c22] text-white rounded-xl font-bold">了解并关闭</button>
          </div>
        </div>
      </transition>
    </section>

    <!-- 3. 工具展示区 -->
    <section class="max-w-7xl mx-auto px-6 py-32">
      <div class="bg-[#332c22] rounded-[3rem] p-16 text-white overflow-hidden relative">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#8c4322] rounded-full blur-[120px] opacity-20"></div>
        <div class="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 class="text-4xl font-bold mb-8 tracking-widest">工欲善其事</h3>
            <div class="space-y-6">
              <div v-for="tool in tools" :key="tool.name" class="flex gap-6 items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition">
                <div class="w-12 h-12 bg-[#8c4322] rounded-xl flex items-center justify-center text-2xl">{{ tool.icon }}</div>
                <div>
                  <h4 class="font-bold text-lg">{{ tool.name }}</h4>
                  <p class="text-sm opacity-50">{{ tool.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="aspect-square bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl group/photo">
            <img :src="img26" alt="工具展示摄影图" class="w-full h-full object-cover opacity-80 group-hover/photo:opacity-100 transition-opacity duration-700">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, markRaw } from 'vue';
import SectionTitle from '../components/SectionTitle.vue';
import img23 from '../assets/images/23.jpg';
import img24 from '../assets/images/24.jpg';
import img25 from '../assets/images/25.jpg';
import img26 from '../assets/images/26.jpg';

// 模拟图标
const IconOre = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' };
const IconGrind = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>' };
const IconGlue = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>' };
const IconDraw = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>' };

const steps = [
  { 
    name: '采集原石', 
    detail: '岩彩的生命始于大地。我们需要在深山或矿脉中寻找高纯度的天然矿石。', 
    icon: markRaw(IconOre),
    type: 'ore',
    ores: [
      { name: '孔雀石', chemical: 'Cu2(OH)2CO3', desc: '产出极其稳定的石绿色，是敦煌壁画中最常用的绿色来源。', image: img23 },
      { name: '蓝铜矿', chemical: 'Cu3(CO3)2(OH)2', desc: '石青色的源泉，随颗粒粗细呈现从深邃宝蓝到浅天蓝的层次。', image: img24 },
      { name: '朱砂', chemical: 'HgS', desc: '中国红的极致代表，具有极强的覆盖力和色彩饱和度。', image: img25 }
    ]
  },
  { 
    name: '手工研磨', 
    detail: '利用乳钵将矿石破碎并研磨。颗粒的粗细直接决定了最终画面的反光率和肌理感。', 
    icon: markRaw(IconGrind),
    type: 'grind'
  },
  { 
    name: '三千本胶', 
    detail: '将矿粉与特制的动物胶液按比例调配。胶的浓度需根据颗粒粗细精确控制。', 
    icon: markRaw(IconGlue),
    type: 'glue'
  },
  { 
    name: '层叠绘制', 
    detail: '遵循“从粗到细，由浅入深”的原则。利用颗粒间的缝隙产生独特的物理折射。', 
    icon: markRaw(IconDraw),
    type: 'draw'
  }
];

const tools = [
  { name: '陶瓷乳钵', desc: '用于精细研磨矿石，不损伤色彩纯度。', icon: '🥣' },
  { name: '鹿胶/牛胶', desc: '传统的固色剂，具有良好的透明度与柔韧性。', icon: '🧪' },
  { name: '贝壳碟', desc: '盛放调配好的小量颜料，便于随时取用。', icon: '🐚' },
  { name: '排笔', desc: '用于大面积铺设底色或刷胶固色。', icon: '🖌️' }
];

const activeOre = ref(null);
const grindProgress = ref(0);
const isGrinding = ref(false);
let grindInterval = null;

const startGrinding = () => {
  if (grindProgress.value >= 100) return;
  isGrinding.value = true;
  grindInterval = setInterval(() => {
    if (grindProgress.value < 100) {
      grindProgress.value += 1;
    } else {
      stopGrinding();
    }
  }, 50);
};

const stopGrinding = () => {
  isGrinding.value = false;
  clearInterval(grindInterval);
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
