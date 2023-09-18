export default () => ({
  isLoading: true,
  entries: [
    {
      id: "1",
      date: new Date().toDateString(),
      text: "Due to using a single state tree, all states of our application are contained inside one big object. However, as our application grows in scale, the store can get really bloated.",
      picture: null,
    },
    {
      id: "2",
      date: new Date().toDateString(),
      text: "To help with that, Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules - it's fractal all the way down ",
      picture: null,
    },
    {
      id: "3",
      date: new Date().toDateString(),
      text: "Similarly, inside module actions, context.state will expose the local state, and root state will be exposed as context.rootState",
      picture: null,
    },
  ],
});
