const mutations = {
  WebFromEnd(state) {
    state.shows = !state.shows
  },
  changMarkdownName(state,title) {
    state.markDownName = title
  },
}
export { mutations }
