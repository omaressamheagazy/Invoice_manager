<script setup lang="ts">
const props = defineProps({
  label: String,
  type: String,
  modelValue: String,
  placeholder: String,
  customClasses: String,
  required: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['update:modelValue'])


</script>

<template>
  <div :class="props.customClasses">
    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
      {{ props.label }}
      <span v-if="props.required" class="text-meta-1">*</span>
    </label>

    <input :value="modelValue" :type="props.type" :placeholder="props.placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
  </div>
</template>
