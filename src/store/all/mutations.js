import {LOAD_ALL_CONTENT} from "../type";

export default {
  [LOAD_ALL_CONTENT](state, res) {
    state.all_content = res;
  }
}
