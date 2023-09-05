<template>
  <div class="transition-all section" :class="[toggled ? 'w-fit' : 'w-24']">
    <div
      class="w-full flex justify-center mb-10 hover:bg-gray-100 p-4 rounded-lg cursor-pointer transition-all"
      @click="toggled = !toggled"
    >
      <Icon
        class="w-6 h-6 transition-all"
        :class="[toggled ? 'rotate-180' : '']"
        name="carbon:arrow-right"
      />
    </div>

    <div class="flext flex-col">
      <NuxtLink
        v-for="page in pages"
        :to="page.path"
        :key="page.path"
        class="flex items-center p-4 text-gray-900 rounded-lg hover:bg-gray-100 gap-3 group"
      >
        <Icon
          :name="page.icon"
          class="w-6 h-6 text-gray-600 group-hover:text-gray-900"
        />
        <span
          v-if="toggled"
          class="font-semibold text-gray-600 group-hover:text-gray-900"
          >{{ page.name }}</span
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const toggled = ref(true)

const pages = [
  {
    name: 'Витрати',
    path: '/',
    icon: 'icon-park-outline:buy'
  },
  {
    name: 'Рахунки',
    path: '/bills',
    icon: 'ic:baseline-money'
  },
  {
    name: 'Профіль',
    path: '/profile',
    icon: 'material-symbols:settings-account-box-outline'
  },
  {
    name: 'Вийти',
    path: '/auth/login',
    icon: 'material-symbols:logout-rounded'
  }
]
</script>

<style scoped></style>
