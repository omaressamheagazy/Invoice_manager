<script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import SelectGroup from '@/components/Forms/SelectGroup/SelectGroupTwo.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref } from 'vue'
const invoice = {
  name: '',
  mobile: '',
  email: '',
  service: '',
  price_per_hour: '',
  working_hour: '',
  email_send_enabled: false
}
const pageTitle = ref('Create Invoice')
function createInvoice() {
  console.log(invoice)
}
</script>

<template>
  <!-- Breadcrumb Start -->
  <BreadcrumbDefault :pageTitle="pageTitle" />
  <!-- Breadcrumb End -->

  <!-- ====== Form Layout Section Start -->
  <!-- Contact Form Start -->
  <DefaultCard cardTitle="Invoice Form">
    <form @submit.prevent="createInvoice">
      <div class="p-6.5">
        <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <InputGroup  v-model="invoice.name" label="Name" type="text" placeholder="Enter the recipient name" customClasses="w-full xl:w-1/2"
            required />

          <InputGroup v-model="invoice.mobile" label="Moblie" type="text" placeholder="Enter the recipient mobile number"
            customClasses="w-full xl:w-1/2" required />
        </div>
        <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <InputGroup v-model="invoice.email" label="Email" type="email" placeholder="Enter the recipient email address"
            customClasses="w-full xl:w-1/2" required />

          <InputGroup v-model="invoice.service" label="Service" type="text" placeholder="Enter the service name" customClasses="w-full xl:w-1/2"
            required />
        </div>
        <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <InputGroup  v-model="invoice.price_per_hour" label="Price per hour" type="number" placeholder="Enter the price per hour"
            customClasses="w-full xl:w-1/2" required />

          <InputGroup v-model="invoice.working_hour" label="Working hour" type="number" placeholder="Enter the total hours" customClasses="w-full xl:w-1/2"
            required />
        </div>




        <div class="mt-5 mb-5.5 flex items-center justify-between">
          <label for="formCheckbox" class="flex cursor-pointer">
            <div class="relative pt-0.5">
              <input v-model="invoice.email_send_enabled"  
                   true-value="yes"
                   false-value="no"
                   type="checkbox" id="formCheckbox" class="taskCheckbox sr-only" />
              <div
                class="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-form-strokedark dark:bg-form-input">
                <span class="text-white opacity-0">
                  <svg class="fill-current" width="10" height="7" viewBox="0 0 10 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                      fill="" />
                  </svg>
                </span>
              </div>
            </div>
            <p>Send an email to the recipient</p>
          </label>


        </div>
        <button class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
          Create
        </button>
      </div>
    </form>
  </DefaultCard>
  <!-- Contact Form End -->
</template>
