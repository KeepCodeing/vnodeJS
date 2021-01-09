import {LOAD_MENU_LIST} from "../type";

export default {
  [LOAD_MENU_LIST](state, res) {
    state.menu_list = res;
  }
}
