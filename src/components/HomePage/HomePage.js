import { defineComponent, onBeforeMount, ref, reactive } from "vue";

export default defineComponent({
  name: "HomePage",
  props: ["tittle"],
  setup(props) {
    return {
      props,
    };
  },
});
