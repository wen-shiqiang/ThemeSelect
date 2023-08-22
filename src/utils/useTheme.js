import { ref,watchEffect } from 'vue';
const LOCAL_KEY ='__theme__'
const theme = ref(localStorage.getItem(LOCAL_KEY) || 'light');
watchEffect(()=>{
    document.documentElement.dataset.theme = theme.value
    localStorage.setItem(LOCAL_KEY,theme.value)
})
export const useTheme = () => {
    return {
        theme,
    };
};
