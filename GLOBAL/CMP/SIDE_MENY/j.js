Vue.component("side_meny", {
  template: `<div>
  <label class="navi-button">MENU</label>
  <input type="text" class="search-input" />
  <img src="./GLOBAL/MEDIA/search.svg" class="search" />
  <ul class="main-navication">
    <ul id="menu"></ul>
    <hr>
    <ul id="friends"></ul>
  </ul>
  </div>`,
});

var store = new Vuex.Store({
  state: {
    view: "side_meny",
  },
});

var signqqee = new Vue({
  el: "#GLOBAL_SIDE_MENY",
  store: store,
});

EL_["GLOBAL_SIDE_MENY"] = {
  DIV: document.getElementById("GLOBAL_SIDE_MENY"),
  eqweqw: document.getElementById("AAsdas"),
};
