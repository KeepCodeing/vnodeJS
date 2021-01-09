import request from "../../network/request";
import {GET_TAB_LIST, LOAD_TAB_LIST} from "../type";

export default {
  [GET_TAB_LIST](context) {
    request({
      url: '/data/tab_list.json'
    }).then(res => context.commit(LOAD_TAB_LIST, res.data));
  }
}
