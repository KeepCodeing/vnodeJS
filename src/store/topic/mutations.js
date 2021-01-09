import {LOAD_TOPIC_CONTENT} from "../type";

export default {
  [LOAD_TOPIC_CONTENT](state, res) {
    state.topic_content = res;
    console.log(res);
  }
}
