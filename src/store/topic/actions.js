import request from "../../network/request";
import {GET_TOPIC_CONTENT, LOAD_TOPIC_CONTENT} from "../type";

export default {
  [GET_TOPIC_CONTENT](context, data) {
    request({
      url: 'https://cnodejs.org/api/v1/topic/' + data.id + '?mdrender=false',
    }).then(res => context.commit(LOAD_TOPIC_CONTENT, res.data));
  }
}
