// function ajax() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById(aja).innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "./ajax.txt", true);
//     xhttp.send();
//   }

function ajax_example() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  document.getElementById("ajax_demo").innerHTML = this.responseText;
  }
  };
  xhttp.open("GET", "./ajax.txt", true);
  xhttp.send();
  }
