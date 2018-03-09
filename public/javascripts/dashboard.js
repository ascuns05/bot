var date = new Date(new Date().getTime() + 2 * 60 * 60 * 24 * 1000);
document.cookie = "uid=test; path=/; expires=" + date.toUTCString();


document.querySelector('.save-btn').addEventListener('click', function() {
  var src = document.querySelectorAll('.controls-wrapper .control.card');
  var data = serialize(src);
  POST(data, '/update');
});



function POST(data, url) {
  var xhr = new XMLHttpRequest()
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(data);
  
}


function serialize(elem) {
  var json = {};
  for (var i = 0; i < elem.length; i++) {
    var type = elem[i].children[0].children[0].innerHTML;
    var value = elem[i].children[1].children[0].value;
    console.log(type+'='+value);
    json[type] = value;
  }
  return JSON.stringify(json);
}
