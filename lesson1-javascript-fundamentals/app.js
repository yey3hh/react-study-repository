// app.js
import ApiKey from "./util.js";
console.log(ApiKey);    // util.js에서 export한 ApiKey를 import해서 사용
document.querySelector("#KeyInfo").innerHTML = ApiKey;