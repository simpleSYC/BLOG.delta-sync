const EL_ = {
  SVG: {
    Project: "delta-sync",
    SET_LOGO: function () {
      setTimeout(() => {
        let logo_svg = document.getElementById("futer_logo_svg");
        if (!logo_svg.innerHTML) {
          if (EL_["SVG"][this.Project]) {
            logo_svg.innerHTML = EL_["SVG"][this.Project];
            clearInterval(EL_["SVG"].SET_LOGO());
          }
        }
      }, 333);
    },
  },
};

Load_Css();
function Load_Css() {
  let CSS_files = {
    0: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min",
    1: "./GLOBAL/CSS/common",
  };
  for (c in CSS_files) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = CSS_files[c] + ".css";
    document.getElementsByTagName("HEAD")[0].appendChild(link);
  }

  let BROWESE_FTO = document.createElement("link");
  BROWESE_FTO.rel = "icon";
  BROWESE_FTO.type = "image/x-icon";
  BROWESE_FTO.href = "./GLOBAL/MEDIA/favicon.ico";
  document.getElementsByTagName("HEAD")[0].appendChild(BROWESE_FTO);

  LOAD_GLOBAL();
}
function LOAD_GLOBAL() {
  let CMP = {
    GLOBAL_SIDE_MENY: { id: "side_meny", file: "SIDE_MENY" },
    GLOBAL_FUTEROT: { id: "futerot", file: "FUTEROT" },
  };
  let CSS = ['<link rel="stylesheet" href="./GLOBAL/CMP/', '/c.css" />'];
  let JS = ['<script type="text/javascript" src="./GLOBAL/CMP/', '/j.js"></script>'];
  for (i in CMP) {
    EL_[i] = {};
    document.getElementById(i).innerHTML = "<" + CMP[i]["id"] + " />";
    $("#" + i).append(CSS[0] + CMP[i]["file"] + CSS[1]);
    $("#" + i).append(JS[0] + CMP[i]["file"] + JS[1]);
  }
  Load_CMP();
}
///
function Load_CMP() {
  let CMP = {
    CONTENT_404: { id: "content_404", file: "CONTENT_404" },

    HEADEROT: { id: "headerot", file: "HEADEROT" },
    BLOG_LASTE: { id: "blog_laste", file: "BLOG_LASTE" },
  };
  let CSS = ['<link rel="stylesheet" href="./404_files/CMP/', '/c.css" />'];
  let JS = ['<script type="text/javascript" src="./404_files/CMP/', '/j.js"></script>'];
  for (i in CMP) {
    EL_[i] = {};
    document.getElementById(i).innerHTML = "<" + CMP[i]["id"] + " />";
    $("#" + i).append(CSS[0] + CMP[i]["file"] + CSS[1]);
    $("#" + i).append(JS[0] + CMP[i]["file"] + JS[1]);
  }
  Load_Dodatok();
}

function Load_Dodatok() {
  let O = {
    FILE: {
      0: "./GLOBAL/JS/gitblog",
      1: "https://static-data.pages.dev/media/" + EL_["SVG"]["Project"] + "/svg",
    },
    JS: {
      0: '<script type="text/javascript" src="',
      1: '.js"></script>',
    },
  };
  for (j in O["FILE"]) {
    $("body").append(O["JS"][0] + O["FILE"][j] + O["JS"][1]);
  }
  EL_["SVG"].SET_LOGO();
  setTimeout(() => {
    $(".main").remove();
  }, 500);
}
