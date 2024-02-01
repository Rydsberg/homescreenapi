var vastContainer = document.getElementById("vasttrafik");
var shouldTestEmpty = false;
// window.hrMin = "15:30";
// window.daDate = "2019-12-10";

function update() {
  var xhr_v = new XMLHttpRequest();

  xhr_v.onreadystatechange = process_new;
  xhr_v.open("GET", "/api/vasttrafik", true);
  xhr_v.send();

  function process_new() {
    if (xhr_v.readyState == 4) {
      vastContainer.innerHTML = "";
      var json = JSON.parse(xhr_v.responseText);
      if (shouldTestEmpty) json = null;
      var busses = [];
      // console.log(json);
      if (json && json.length > 0) {
        for (var i = 0; i < json.length; i++) {
          var bus = json[i];
          if (bus.time === bus.estTime) {
            bus.estTime = undefined;
          }
          var checkApp = bus.booking ? true : false;
          busses.push({ line: bus.line, direction: bus.direction, time: bus.time, newTime: bus.estTime, color: bus.background, checkApp: checkApp });
        }
        console.log(busses);
      } else {
        vastContainer.innerHTML = "<nobusses>Inga avgångar</nobusses>";
        return;
      }
      for (var j = 0; j < busses.length; j++) {
        var curr_bus = busses[j];
        vastContainer.innerHTML +=
          '<div class="bus">' +
          (curr_bus.checkApp ? "<infoicon></infoicon>" : "") +
          '<linebadge style="background-color: ' +
          curr_bus.color +
          ';">' +
          curr_bus.line +
          "</linebadge>" +
          curr_bus.direction +
          "<span" +
          (curr_bus.newTime ? ' class="vast-late" ' : "") +
          ">" +
          curr_bus.time +
          "</span>" +
          (curr_bus.newTime ? '<span style="color:red; margin-right: 10px;">' + curr_bus.newTime + "</span>" : "") +
          "</div>";
      }
    }
  }
}

update();
setInterval(update, 60000);
