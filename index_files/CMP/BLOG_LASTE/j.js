Vue.component("blog_laste", {
  template: `<div class="container">
  <div class="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1">
    <ul id="issue-list" class="main_content" style="padding-left: 0px; opacity: 1; transform: translateY(0px)">
      <br />
      <h4 class="title">内容加载中...</h4>
      <br />
    </ul>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "blog_laste",
  },
});

var signqqee = new Vue({
  el: "#BLOG_LASTE",
  store: store,
});

EL_["BLOG_LASTE"] = {
  DIV: document.getElementById("BLOG_LASTE"),
  eqweqw: document.getElementById("AAsdas"),
};
