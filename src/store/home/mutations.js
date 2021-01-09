import {LOAD_TAB_LIST} from "../type";

export default {
  [LOAD_TAB_LIST](state, res) {
    state.tab_list = res;
  }
}
