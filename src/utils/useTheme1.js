import { ref, watchEffect } from 'vue';
const LOCAL_KEY = '__theme__';
const theme = ref(localStorage.getItem(LOCAL_KEY) || 'light');
const followOS = () => {
    if (match.matches) {
        document.documentElement.dataset.theme = 'dark';
        return;
    }
    document.documentElement.dataset.theme = 'light';
};
const match = matchMedia('(prefers-color-scheme: dark)');
watchEffect(() => {
    localStorage.setItem(LOCAL_KEY, theme.value);
    if (theme.value === 'OS') {
        followOS();
        match.addEventListener('change',followOS)
        return;
    }
    document.documentElement.dataset.theme = theme.value;
    match.removeEventListener('change',followOS)
});
export const useTheme = () => {
    return {
        theme,
    };
};
