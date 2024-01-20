// @ts-check
var containerskol = document.createElement("div");
containerskol.className = "feed";
// @ts-ignore
document.scripts[document.scripts.length - 1].parentNode.appendChild(containerskol);

var xhrskol = new XMLHttpRequest();
xhrskol.onreadystatechange = process;
xhrskol.open("GET", "/api/skolmaten", true);
xhrskol.send();

function process() {
  if (xhrskol.readyState == 4) {
    console.log(xhrskol.responseText);
    /** @type {import('../app/api/skolmaten/route').SkolmatenType} */
    var resp = JSON.parse(xhrskol.responseText);
    // var titlecont = document.createElement("h3");
    // titlecont.className = "feed-title";
    // titlecont.innerHTML = 'Skolmaten';
    // containerskol.appendChild(titlecont);

    for (var i = 0; i < resp.length; i++) {
      var day = resp[i];

      var dayName = document.createElement("h2");
      dayName.className = "feed-title";
      dayName.innerHTML = day.title; // + ' ' + day.subtitle;
      containerskol.appendChild(dayName);

      var itemcont = document.createElement("div");
      itemcont.className = "feed-item";
      containerskol.appendChild(itemcont);

      // var itemtitle = document.createElement("h4");
      // itemtitle.className = "feed-item-title";
      // itemtitle.innerHTML = day.title + ' ' + day.subtitle;

      var itemdesc = document.createElement("p");
      itemdesc.className = "feed-item-desc";
      itemdesc.innerHTML = day.text;

      // itemcont.appendChild(itemtitle);
      itemcont.appendChild(itemdesc);
    }
    // container12.innerHTML = resp;
  }
}
