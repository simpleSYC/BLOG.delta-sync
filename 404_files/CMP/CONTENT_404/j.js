Vue.component("content_404", {
  template: `<div style="text-align: center; margin-top: 50px;margin-bottom: 50px">
      <p>
        <storng><h2>That content wassnt found..</h2></storng>
        <img src="./404_files/MEDIA/404.jpg" style="display: block; margin-left: auto; margin-right: auto; border-radius: 20px; max-width: 500px; width: 50%" />
      </p>

      <input
        type="text"
        id="src"
        class="search-inpu_t"
        placeholder="Try search agean"
        style="text-align: center; width: 300px; height: 42px; padding-left: 15px; border-radius: 42px; border: 1px solid rgba(127, 140, 141, 0.6); background: white; outline: none"
      />
      <img src="./GLOBAL/MEDIA/search.svg" style="position: relative; right: 5px; cursor: pointer; width: 40px" />
      <p>Or</p>
      <a href="./" style="color: #666666; font-weight: 200; font-size: 20px; text-decoration-line: underline">Go to Home Page</a>
    </div>`,
});

var store = new Vuex.Store({
  state: {
    view: "content_404",
  },
});

var signqqee = new Vue({
  el: "#CONTENT_404",
  store: store,
});

EL_["CONTENT_404"] = {
  DIV: document.getElementById("CONTENT_404"),
  eqweqw: document.getElementById("AAsdas"),
};

$("#src").bind("keypress", function (event) {
  if (event.keyCode == "13" && $("#src").val() != "") {
    window.location.href = "./issue_per_label.html?q=" + $("#src").val();
  }
});
