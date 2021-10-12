Vue.component("topic_header", {
  template: `<div class="jumbotron" style="text-align: center; background-color: #ecf0f1; margin-bottom: 0">
  <h1 id="title"></h1>
  <br />
  <text id="instruction"></text>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "topic_header",
  },
});

var signqqee = new Vue({
  el: "#TOPIC_HEADER",
  store: store,
});

EL_["TOPIC_HEADER"] = {
  DIV: document.getElementById("TOPIC_HEADER"),
  eqweqw: document.getElementById("AAsdas"),
};
