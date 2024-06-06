<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import InvoiceTable from '@/components/Invoice/InvoiceTable.vue'
import invoiceApi from '@/services/API/invoice.api'
import { notify } from 'notiwind';
const invoices = ref([])
const pageTitle = ref('Invoices')
async function showAllInvoices() {
  try {
    const response = await invoiceApi.getAllInvoices()
    if(response.status === 200) {
      invoices.value = response.data?.data || []
    } else {
      notify({
        title: "Error",
        text: "Failed to fetch invoices, please try again later!",
        type: "error",
        group: "app",
      }, 4000)
    }
    
  } catch (error) {
      notify({
        title: "Error",
        text: error.response?.data?.message || 'An error occurred',
        type: "error",
        group: "app",
      }, 4000)
    }
  
}
showAllInvoices()
</script>

<template>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <InvoiceTable :invoices="invoices" />
    </div>
</template>
