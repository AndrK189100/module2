//import './css/style.css';

import './js/app.js';

// TODO: write your code in app.js

var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "./css/style.css";

var head = document.getElementsByTagName("HEAD")[0];
head.appendChild(link);
