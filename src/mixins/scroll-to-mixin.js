export default {
  methods: {
    scrollToId(elementId) {
      document.getElementById(elementId).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
