var hourEl = document.querySelector(".hour")
var minuteEl = document.querySelector(".minute")
var dayEl = document.querySelector(".day")
var weekdayEl = document.querySelector(".weekday")

setInterval(() => {
  // 1.获取各变量
  var date = new Date()
  var year = date.getFullYear() + ""
  var month = (date.getMonth() + 1 + "").padStart(2, "0")
  var day = (date.getDate() + "").padStart(2, "0")
  var weekday = date.getDay()
  var hour = (date.getHours() + "").padStart(2, "0")
  var minute = (date.getMinutes() + "").padStart(2, "0")
  var second = (date.getSeconds() + "").padStart(2, "0")

  hourEl.textContent = `${hour}`
  minuteEl.textContent = `${minute}`
  dayEl.textContent = `${year}-${month}-${day}`

  switch (weekday) {
    case 1:
      weekdayEl.textContent = `星期一`
      break
    case 2:
      weekdayEl.textContent = `星期二`
      break
    case 3:
      weekdayEl.textContent = `星期三`
      break
    case 4:
      weekdayEl.textContent = `星期四`
      break
    case 5:
      weekdayEl.textContent = `星期五`
      break
    case 6:
      weekdayEl.textContent = `星期六`
      break
    case 0:
      weekdayEl.textContent = `星期日`
      break
  }

}, 1000);
