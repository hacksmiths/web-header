var hacksmithsData = [
  {
    name: "Hacksmiths - Goldsmiths Tech Society",
    url: "http://goldsmiths.tech"
  },
  {
    name: "Weekly Events",
    url: "http://facebook.com/hacksmiths/events"
  },
  {
    name: "Anvil Hack",
    url: "http://anvil.goldsmiths.tech"
  },
  {
    name: "Sex Tech Hack",
    url: "http://sexhack.tech"
  }
];

var hacksmithsCont = document.createElement("div");
hacksmithsCont.setAttribute("id", "hacksmiths-banner");
for(var i=0; i<hacksmithsData.length; i++) {
  var a = document.createElement("a");
  a.setAttribute("href", hacksmithsData[i].url);
  a.appendChild(document.createTextNode(hacksmithsData[i].name));
  hacksmithsCont.appendChild(a);
}
document.body.prepend(hacksmithsCont);
document.write("<style>body{padding-top:2em;}#hacksmiths-banner{position:absolute;top:0;left:0; width:100%;background:#37474F;padding:0.5rem;}#hacksmiths-banner a{color:white; font-family:'Open Sans',sans-serif;text-decoration:none;margin-right:1em;}#hacksmiths-banner a:first-child{font-weight:bold;}@media screen and (max-width:800px){body{padding-top:0;} #hacksmiths-banner{display:none;}}</style>");