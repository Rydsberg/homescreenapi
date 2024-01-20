var now = new Date();
var day = Math.floor(now/8.64e7);

var container12 = document.createElement("p");
container12.id = "quote-text";
document.scripts[document.scripts.length - 1].parentNode.appendChild(container12);

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", "/api/quote", true);
xhr.send();

function process()
{
  if (xhr.readyState == 4) {
    var resp = xhr.responseText;
    
    container12.innerHTML = resp;
  }
}