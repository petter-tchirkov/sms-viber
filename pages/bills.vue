<template>
  <section class="w-full flex flex-col gap-4">
    <Header>
      <template #pageTitle>
        <span class="text-2xl font-semibold text-gray-900">Рахунки</span>
      </template>
    </Header>
    <div class="section">
      <DataTable
        ref="billsTable"
        v-model:editing-rows="editingRows"
        class="p-datatable-sm"
        paginator
        :rows="14"
        :value="bills"
        edit-mode="row"
        data-key="number"
        @row-edit-save="onRowEditSave"
      >
        <template #header>
          <div class="flex gap-4">
            <Button
              label="Додати рахунок"
              icon="pi pi-plus"
              @click="isAddBillModalShow = true"
            />
            <Button
              icon="pi pi-external-link"
              label="Експорт в CSV"
              @click="exportCSV()"
            />
          </div>
        </template>
        <Column header="Дата">
          <template #body="{ data }">
            {{ data.date[0] }} - {{ data.date[1] }}
          </template>
        </Column>
        <Column
          header="Сума"
          field="sum"
        >
          <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" />
          </template>
        </Column>
        <Column
          header="Статус"
          field="status"
        >
          <template #body="{ data }">
            {{ data.status.name }}
          </template>
          <template #editor="{ data, field }">
            <Dropdown
              v-model="data[field]"
              :options="statuses"
              option-label="name"
            >
              <template #value="{ value }">
                {{ value.name }}
              </template>
            </Dropdown>
          </template>
        </Column>
        <Column header="Тип">
          <template #body="{ data }">
            <Tag
              :value="data.type"
              :severity="data.type === 'Invoice' ? 'success' : 'warning'"
            />
          </template>
        </Column>
        <Column
          header="Номер"
          field="number"
        />
        <Column header="Посилання">
          <template #body="{ data }">
            <NuxtLink :to="`https://${data.link}`">
              <Icon
                class="w-6 h-6"
                name="material-symbols:attachment-rounded"
              />
            </NuxtLink>
          </template>
        </Column>
        <Column
          :row-editor="true"
          style="width: 10%; min-width: 8rem"
          body-style="text-align:center"
        />
      </DataTable>
      <Dialog
        ref="dialog"
        v-model:visible="isAddBillModalShow"
        header="Додати рахунок"
        modal
      >
        <div class="flex flex-col gap-4">
          <label class="flex flex-col">
            Оберіть період
            <Calendar
              v-model="newBill.dates"
              selection-mode="range"
            />
          </label>
          <label class="flex flex-col">
            Введіть суму
            <InputNumber v-model="newBill.sum" />
          </label>
          <label class="flex flex-col">
            Оберіть статус
            <Dropdown
              v-model="newBill.status"
              :options="statuses"
              option-label="name"
              option-value="code"
            />
          </label>
          <label class="flex flex-col">
            Оберіть тип
            <Dropdown
              v-model="newBill.type"
              :options="types"
              option-label="name"
              option-value="code"
            />
          </label>
          <label class="flex flex-col">
            Введіть номер
            <InputNumber v-model="newBill.number" />
          </label>
          <label class="flex flex-col">
            Введіть посилання на рахунок
            <InputText v-model="newBill.link" />
          </label>
          <Button
            label="Додати"
            @click="isAddBillModalShow = false"
          />
        </div>
      </Dialog>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DataTableRowEditInitEvent } from 'primevue/datatable'
import { useNow, onClickOutside } from '@vueuse/core'
import { useBillsStore } from '~/stores/bills'
import { IBill } from '~/types/bill'

const bills: IBill[] = useBillsStore().bills
const statuses = ref([
  { code: 0, name: 'Signed' },
  { code: 1, name: 'Non-signed' }
])
const types = ref([
  { code: 0, name: 'Invoice' },
  { code: 1, name: 'Act' }
])
const editingRows = ref([])
const isAddBillModalShow = ref(false)
const dialog = ref(null)
const billsTable = ref(null)

onClickOutside(dialog, () => (isAddBillModalShow.value = false))

const onRowEditSave = (event: DataTableRowEditInitEvent) => {
  const { newData, index } = event

  bills.value[index] = newData
}

const newBill = ref({
  dates: [useNow().value, useNow().value],
  sum: 0,
  status: null,
  type: null,
  number: null,
  link: null
})

const exportCSV = () => {
  billsTable.value.exportCSV()
}
</script>

<style scoped></style>
