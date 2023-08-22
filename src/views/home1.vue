
<script setup>
import ThemeSelect from '../components/ThemeSelect.vue'
import { useTheme } from '../utils/useTheme1.js';
const { theme } = useTheme();
import { ref } from 'vue';
// matchMedia 用于监听系统主题变化


</script>
<template>
    <div class="main">
        <p style="margin-top: 3em;">{{ theme }}</p>
        <ThemeSelect />
        <h1>主题色切换</h1>
        <p>你瞅啥，瞅你咋地，你再瞅一个试试.</p>
    </div>
</template>


<style scoped>
.main {
   height: 100vh;
   width: 100vw;
   font-family: serif;
   --webkit-font-smoothing: antialiased;
   background: linear-gradient(to bottom,var(--bg1),var(--bg2));
   color:var(--text-color);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    font-size: 2em;
    /* padding-top:1em; */
}
.main h1{
    margin-top: 1em;
}
</style>
