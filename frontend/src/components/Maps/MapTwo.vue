<script setup lang="ts">
// @ts-ignore
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world'
import { onMounted, ref } from 'vue'

onMounted(() => {
  new jsVectorMap({
    map: 'world',
    selector: '#mapTwo',
    zoomButtons: true,

    regionStyle: {
      initial: {
        fontFamily: 'Satoshi',
        fill: '#A9BDFF'
      },
      hover: {
        fillOpacity: 1,
        fill: '#3056D3'
      }
    },

    onRegionTooltipShow: function (tooltip: any, code: any) {
      if (code === 'EG') {
        tooltip.selector.innerHTML = tooltip.text() + ' <b>(Hello Russia)</b>'
      }
    }
  })
})

import countryOne from '@/assets/images/country/country-01.svg'
import countryTwo from '@/assets/images/country/country-02.svg'
import countryThree from '@/assets/images/country/country-03.svg'
import countryFour from '@/assets/images/country/country-04.svg'
import countryFive from '@/assets/images/country/country-05.svg'
import countrySix from '@/assets/images/country/country-06.svg'

const countryList = ref([
  {
    image: countryOne,
    name: 'United States',
    percent: 35
  },
  {
    image: countryTwo,
    name: 'Canada',
    percent: 26
  },
  {
    image: countryThree,
    name: 'France',
    percent: 18
  },
  {
    image: countryFour,
    name: 'Italy',
    percent: 14
  },
  {
    image: countryFive,
    name: 'Australia',
    percent: 10
  },
  {
    image: countrySix,
    name: 'India',
    percent: 7
  }
])
</script>

<template>
  <div
    class="col-span-12 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6"
  >
    <div class="p-4 md:p-6 xl:p-7.5">
      <div class="mb-7.5 justify-between sm:flex">
        <div class="mb-2">
          <h3 class="text-xl font-bold text-black dark:text-white">Sessions by country</h3>
        </div>
        <div class="mb-2">
          <div class="relative z-20 inline-block rounded bg-gray-2 dark:bg-boxdark">
            <select
              name=""
              id=""
              class="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark"
            >
              <option value="" class="dark:bg-boxdark">Last 7 days</option>
              <option value="" class="dark:bg-boxdark">Last 15 days</option>
            </select>
            <span class="absolute top-1/2 right-3 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div id="mapTwo" class="mapTwo map-btn !h-65 md:!h-95"></div>
    </div>

    <div class="space-y-2.5 border-t border-stroke p-4 dark:border-strokedark md:p-6 xl:p-7.5">
      <template v-for="(item, index) in countryList" :key="index">
        <div class="items-center sm:flex">
          <div class="flex w-full max-w-42.5 items-center gap-3.5">
            <img :src="item.image" :alt="item.name" />
            <p class="font-medium text-black dark:text-white">{{ item.name }}</p>
          </div>
          <div class="relative block h-4.5 w-full rounded bg-meta-9 dark:bg-meta-4">
            <div
              class="absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary text-xs font-medium text-white"
              :style="{ width: item.percent + `%` }"
            >
              {{ item.percent }}%
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
