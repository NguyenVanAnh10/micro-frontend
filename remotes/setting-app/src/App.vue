<template>
  <a-card :class="{ 'dark-theme': mode === 'dark' }" :style="{ backgroundColor: mode === 'dark' ? '#141414' : '#fff' }">
    <a-typography-title :level="3" type="danger">Micro App</a-typography-title>
    <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item ref="chartTitle" label="Activity chartTitle" name="chartTitle">
        <a-input v-model:value="formState.chartTitle" />
      </a-form-item>
      <a-form-item label="Chart type" name="chartType">
        <a-select v-model:value="formState.chartType" placeholder="please select your zone">
          <a-select-option value="line">Line</a-select-option>
          <a-select-option value="area">Area</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Submit</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<style>
.dark-theme label {
  color: #fff !important;
}

.dark-theme {
  border: 1px solid #3d3b3b !important;
}
</style>
<script setup>
import { reactive, ref, toRaw } from "vue";
const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  chartTitle: "Chart Demo",
  chartType: "area",
  date1: undefined,
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});


const props = defineProps({
  onSubmit: {
    type: Function,
    required: true,
  },
  mode: {
    type: String,
    required: true
  }
});
const { mode } = props;
console.log('vue', { mode });

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log("values", formState, toRaw(formState));
      props.onSubmit({ ...toRaw(formState) });
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>
