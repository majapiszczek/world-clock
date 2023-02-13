function displayTime() {
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = document.querySelector("#chicago .date");
  let chicagoTimeElement = document.querySelector("#chicago .time");

  chicagoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = moment()
    .tz("America/Chicago")
    .format(`h:mm:ss[<span>]A[</span>]`);

  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector("#london .date");
  let londonTimeElement = document.querySelector("#london .time");

  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format(`h:mm:ss[<span>]A[</span>]`);

  let romeElement = document.querySelector("#rome");
  let romeDateElement = document.querySelector("#rome .date");
  let romeTimeElement = document.querySelector("#rome .time");

  romeDateElement.innerHTML = moment().format("MMMM Do YYYY");
  romeTimeElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format(`h:mm:ss[<span>]A[</span>]`);

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");

  tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format(`h:mm:ss[<span>]A[</span>]`);
}

displayTime();
setInterval(displayTime, 1000);
