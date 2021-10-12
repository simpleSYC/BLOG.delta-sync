Vue.component("headerot", {
  template: `<div>
  <div class="page_header" ></div>
  <div class="author">
    <div class="head">
      <img src="./GLOBAL/MEDIA/avatar.jpg" class="img-responsive img-circle" />
    </div>
    <h3 class="name" id="title"></h3>
    <p class="name" id="instruction"></p>
    <p class="name">I am <text id="changerificwordspanid"></text> today!</p>
  </div>
  </div>`,
});

var store = new Vuex.Store({
  state: {
    view: "headerot",
  },
});

var signqqee = new Vue({
  el: "#HEADEROT",
  store: store,
});

EL_["HEADEROT"] = {
  DIV: document.getElementById("HEADEROT"),
  eqweqw: document.getElementById("AAsdas"),
};
