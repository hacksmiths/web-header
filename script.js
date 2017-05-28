var hacksmithsData = [
  {
    name: "Hacksmiths",
    url: "http://goldsmiths.tech"
  },
  {
    name: "Anvil Hack",
    url: "http://anvil.goldsmiths.tech"
  },
  {
    name: "Sex Tech Hack",
    url: "http://sexhack.tech"
  },
  {
    name: "Non Binary in Tech",
    url: "http://nonbinary.tech"
  },
  {
    name: "UKGovHack",
    url: "http://ukgovhack.com"
  }
];

function runAfterLoad() {
  $("body").prepend("<div id='hacksmiths-banner'></div>");
  $(hacksmithsData).each(function() {
    $("#hacksmiths-banner").append("<a href='"+this.url+"'>"+this.name+"</a>")
  });
  $("head").append("<style>body{padding-top:2em;font-size:1rem;}#hacksmiths-banner{position:absolute;top:0;left:0;width:100%;background:#37474F;padding:0.5rem;}#hacksmiths-banner a{color:white !important; font-family:'Open Sans',sans-serif;text-decoration:none !important;margin-right:1em !important;}#hacksmiths-banner a:first-child{font-weight:bold;}@media screen and (max-width:800px){body{padding-top:0;} #hacksmiths-banner{display:none;}}</style>");
}

(function() {
  function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { //IE
      script.onreadystatechange = function() {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { //Others
      script.onload = function() {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", function() {
    runAfterLoad();
  });
})();
