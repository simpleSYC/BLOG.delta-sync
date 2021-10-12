Vue.component("selected_tag", {
  template: `<div class="jumbotron" style="text-align: center;background-color:#ecf0f1;margin-bottom:0;">
  <h1 id="title"></h1>
  <br>
  <text id="instruction"></text>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "selected_tag",
  },
});

var signqqee = new Vue({
  el: "#SELECTED_TAG",
  store: store,
});

EL_["SELECTED_TAG"] = {
  DIV: document.getElementById("SELECTED_TAG"),
  eqweqw: document.getElementById("AAsdas"),
};
