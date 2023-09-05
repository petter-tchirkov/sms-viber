<template>
  <section class="flex justify-center items-center w-full p-4">
    <div class="section flex flex-col gap-4 w-full max-w-md">
      <h1 class="text-5xl font-bold text-center text-gray-900">Вітаємо</h1>
      <InputText placeholder="Логін" />
      <Password placeholder="Пароль" toggle-mask :feedback="false" />
      <Button label="Увійти" @click="useRouter().push('/')" />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<style scoped></style>
