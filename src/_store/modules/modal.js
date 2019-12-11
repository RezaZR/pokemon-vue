export const modal = {
  state: {
    isOpen: false,
    contentFor: null,
    data: null
  },
  getters: {},
  actions: {},
  mutations: {
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
    setContentFor(state, value) {
      state.contentFor = value;
    },
    setData(state, value) {
      state.data = value;
    }
  }
};
