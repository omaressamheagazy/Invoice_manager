<script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import MailSuccessCard from '@/components/MailSuccessCard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref } from 'vue'

const pageTitle = ref('Email verification')
</script>

<template>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <!-- Mail Success Card Start -->
    <MailSuccessCard >
        <div class="mt-7.5 text-center">
        <h2 class="mb-3 text-2xl font-bold text-black dark:text-white">
          You need to verfiy your email!
        </h2>
        <p class="font-medium">
          Thank you so much for your registration. Please check your mail inbox for verification.
        </p>
      </div>
    </MailSuccessCard>
    <!-- Mail Success Card -->
</template>
