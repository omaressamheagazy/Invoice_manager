<script setup lang="ts">
import { ref, provide } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import InvoiceTable from '@/components/Invoice/InvoiceTable.vue'
import invoiceApi from '@/services/API/invoice.api'
import { notify } from 'notiwind';
import { ACTION } from '@/Enums/Action';
import { useRouter } from 'vue-router';
const router = useRouter()
const invoices = ref([])
const pageTitle = ref('Invoices')
const handleAction = async (action: string, invoiceId: number) => {
  switch (action) {
    case ACTION.update:
      console.log('update pressed', invoiceId);
      router.push({ name: 'invoiceDetails', params: { id: invoiceId } })
      // const communitiesDirectChilder =  await communityService.getCommunityDirectChildren(communityId)
      break;
    case ACTION.delete:
      try {

        const response = await invoiceApi.deleteInvoice(invoiceId)
        if (response.status === 200) {
          notify({
            title: "Success",
            text: "Invoice deleted successfully",
            type: "success",
            group: "app",
          }, 4000)
          showAllInvoices()
        } else {
          notify({
            title: "Error",
            text: "Failed to delete the invoice, please try again later!",
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

      break;
    default:
      break
  }
};
provide('triggerAction', handleAction);
async function showAllInvoices() {
  try {
    const response = await invoiceApi.getAllInvoices()
    if (response.status === 200) {
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
