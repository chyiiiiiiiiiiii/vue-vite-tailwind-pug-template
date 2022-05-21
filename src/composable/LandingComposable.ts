import { ref } from "vue";
import { ElMessage } from "element-plus";

export const count = ref(0);
export const useCounter = () => {

  const add = async () => {
    count.value++
  };

  return {
    add,
  };
};
