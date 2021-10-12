Vue.component("futerot", {
  template: `<div>
  <div style="text-align: center">
    <ul class="pagination" id="pages" style="display: none"></ul>
  </div>
  <div class="footer">

    <div  id="futer_tagas_div">
      <a class="TAGS_TILE_DIV">FEATURED TAGS</a>
      <hr />
      <div class="tags" style="margin-top: 10px" id="tags"></div>
    </div>

    <div id="spacer_mid"></div>

    <div id="futer_helpero_div">
      <a class="TAGS_TILE_DIV">HELPFUL LINKS</a>
      <hr />
      <div id="Links_futerot">
        <a title="https://united-store.pages.dev" onclick='window.open(this.title,"_blank")' >ofilcial website</a>
        <a title="https://united-store.pages.dev/FAQ" onclick='window.open(this.title,"_blank")' >FAQ</a>
        <a title="https://shop.united-store.pages.dev" onclick='window.open(this.title,"_blank")' >mylinks</a>
        <a title="https://faq.united-store.pages.dev" onclick='window.open(this.title,"_blank")' >google</a>
      </div>
    </div>
    </div>

    <div class="footer badge_end" style="text-align: center">
      <div id="icon"></div>
      <div id="footer"></div>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "futerot",
  },
});

var signqqee = new Vue({
  el: "#GLOBAL_FUTEROT",
  store: store,
});

EL_["GLOBAL_FUTEROT"] = {
  DIV: document.getElementById("GLOBAL_FUTEROT"),
  eqweqw: document.getElementById("AAsdas"),
};
