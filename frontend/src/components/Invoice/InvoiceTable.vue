<script setup lang="ts">
import { ref } from 'vue'
import DropdownFour from '@/components/Dropdowns/DropdownFour.vue'
const props = defineProps(['invoices'])
const users = ref([
  {
    name: 'Musharof Chowdhury',
    position: 'Multidisciplinary Web Entrepreneur',
    email: 'musharof@example.com',
    role: 'Owner'
  },
  {
    name: 'Naimur Rahman',
    position: 'Website Front-end Developer',
    email: 'naimurrahman@example.com',
    role: 'Member'
  },
  {
    name: 'Shafiq Hammad',
    position: 'Regional Paradigm Technician',
    email: 'shafiq.hd@example.com',
    role: 'Moderator'
  },
  {
    name: 'Alex Semuyel',
    position: 'Applications Engineer',
    email: 'alex.semuel@example.com',
    role: 'Admin'
  }
])
</script>

<template>
  <div class="max-w-full overflow-x-auto">
    <div class="min-w-[1170px]">
      <!-- table header start -->
      <div class="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
        <div class="col-span-2">
          <h5 class="font-medium text-white">reference number</h5>
        </div>

        <div class="col-span-2">
          <h5 class="font-medium text-white">Name</h5>
        </div>

        <div class="col-span-3">
          <h5 class="font-medium text-white">Email</h5>
        </div>
        <div class="col-span-2">
          <h5 class="font-medium text-white">Service</h5>
        </div>

        <div class="col-span-2">
          <h5 class="font-medium text-white">Total price</h5>
        </div>

        <div class="col-span-1">
          <h5 class="text-right font-medium text-white">Edit</h5>
        </div>
      </div>
      <!-- table header end -->

      <!-- table body start -->
      <div class="bg-white dark:bg-boxdark rounded-b-[10px]">
        <template v-for="(invoice, index) in invoices" :key="index">
          <!-- table row item -->
          <div class="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
            <div class="col-span-2">
              <p class="text-[#637381] dark:text-bodydark">{{ invoice.reference }}</p>
            </div>

            <div class="col-span-2">
              <p class="text-[#637381] dark:text-bodydark">{{ invoice.name }}</p>
            </div>

            <div class="col-span-3">
              <p class="text-[#637381] dark:text-bodydark">{{ invoice.email }}</p>
            </div>

            <div class="col-span-2">
              <p class="text-[#637381] dark:text-bodydark">{{ invoice.service }}</p>
            </div>


            <div class="col-span-2">
              <p class="text-[#637381] dark:text-bodydark">RM {{ invoice.total_price }}</p>
            </div>

            <div class="col-span-1">
              <DropdownFour :id="invoice.reference" />
            </div>
          </div>
        </template>
      </div>
      <!-- table body end -->
    </div>
  </div>
</template>
