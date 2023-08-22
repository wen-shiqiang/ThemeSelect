<script setup>
import VueMultiselect from 'vue-multiselect';
import { useTheme } from '../utils/useTheme1.js';
// import 'element-plus/es/components/switch/style/css';
// import { ElSwitch } from 'element-plus';
const { theme } = useTheme();
const options = ['light', 'dark', 'OS'];
</script>

<template>
    <div class="box">
        <VueMultiselect
            v-model="theme"
            :options="options"
            :searchable="false"
            :allow-empty="false"
        >
        </VueMultiselect>
    </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
.box {
    width: 300px;
}
:deep(.multiselect__option) {
    background-color: var(--bg1);
    color: var(--text-color);
}
:deep(.multiselect) {
    color: var(--text-color);
}
:deep(.multiselect__tags) {
    background-color: var(--bg1);
}
:deep(.multiselect__single) {
    background-color: var(--bg1);
}
</style>
