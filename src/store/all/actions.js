import request from "../../network/request";
import {GET_ALL_CONTENT, LOAD_ALL_CONTENT} from "../type";

export default {
  [GET_ALL_CONTENT](context, data) {
    request({
      url: 'https://cnodejs.org/api/v1/topics?page=' + data.page + '&mdrender=false&' + 'tab=' + data.type
    }).then(res => context.commit(LOAD_ALL_CONTENT, res.data));
  }
}
