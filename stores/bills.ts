import { defineStore } from 'pinia'
import { IBill } from '~/types/bill'

export const useBillsStore = defineStore('bills', () => {
  const bills: Ref<IBill[]> = ref([
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: { code: 0, name: 'Signed' },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    },
    {
      date: ['2022-01-02', '2022-01-03'],
      sum: 42,
      status: {
        code: 0,
        name: 'Signed'
      },
      type: 'Invoice',
      number: 42,
      link: 'google.com'
    }
  ])
  return { bills }
})
