import { ref } from "vue";

// 打乱数组
export function shuffleArray(array: any): Array<any> {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        const end = len - 1;
        const index = (Math.random() * (end + 1)) >> 0;
        const t = array[end];
        array[end] = array[index];
        array[index] = t;
    }
    return array;
}
