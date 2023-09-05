<template>
  <section class="w-full flex flex-col gap-4">
    <Header>
      <template #pageTitle>
        <span class="text-2xl font-semibold text-gray-900">Витрати</span>
      </template>
    </Header>
    <div class="section">
      <DataTable :value="expenses" paginator :rows="10" class="p-datatable-sm">
        <template #header>
          <Dropdown
            v-model="selectedOption"
            :options="options"
            placeholder="Фільтрація"
          />
        </template>
        <Column field="date" header="Дата" />
        <Column header="Тип">
          <template #body="{ data }">
            <Tag
              :value="data.type"
              :style="{
                background: data.type === 'SMS' ? '#84cc16' : '#a855f7'
              }"
            />
          </template>
        </Column>
        <Column field="count" header="Кількість" />
      </DataTable>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const expenses = ref([
  { date: '2022-01-02', type: 'Viber-промо', count: 15, price: 42 },
  { date: '2022-01-03', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-04', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-05', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-06', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-01', type: 'Viber-шаблон', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-транзакційне', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-промо', count: 15, price: 42 },
  { date: '2022-01-03', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-04', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-05', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-06', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-01', type: 'Viber-шаблон', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-транзакційне', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-промо', count: 15, price: 42 },
  { date: '2022-01-03', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-04', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-05', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-06', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-01', type: 'Viber-шаблон', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-транзакційне', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-промо', count: 15, price: 42 },
  { date: '2022-01-03', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-04', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-05', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-06', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-01', type: 'Viber-шаблон', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-транзакційне', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-промо', count: 15, price: 42 },
  { date: '2022-01-03', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-04', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-05', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-06', type: 'SMS', count: 15, price: 42 },
  { date: '2022-01-01', type: 'Viber-шаблон', count: 15, price: 42 },
  { date: '2022-01-02', type: 'Viber-транзакційне', count: 15, price: 42 }
])

const selectedOption = ref('')
const options = [
  'Всі Vіber-promo за день',
  'Всі СМС за день',
  'Всі Viber-шаблони за день',
  'Всі Viber-транзакційне за день'
]
</script>

<style scoped></style>
