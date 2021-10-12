Vue.component("adds", {
  template: `<div class="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0  col-sm-3 col-sm-offset-0 visible-lg visible-md visible-sm" id="ADDS_right">
  <a style="line-height: 1.1; font-weight: 700; cursor: pointer; color: #808080; text-decoration: none">ADDS DIV</a>
  <hr />
  <div id="adds_reklama">
  <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/Hae1NrAQWyKA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/spam-Hae1NrAQWyKA">via GIPHY</a></p>  
  </div>
  <hr />
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "adds",
  },
});

var signqqee = new Vue({
  el: "#GLOBAL_ADDS",
  store: store,
});

EL_["GLOBAL_ADDS"] = {
  DIV: document.getElementById("GLOBAL_ADDS"),
  eqweqw: document.getElementById("AAsdas"),
};
