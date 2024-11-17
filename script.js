const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const day = document.getElementById('day')

var monthsName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const clock = setInterval(function myClock(){
let today = new Date()
let d = today.getDate()
let m = today.getMonth()
let y = today.getFullYear()
let h = today.getHours()
let min = today.getMinutes()
let sec = today.getSeconds()

day.innerHTML = `${d} ${monthsName[m]} ${y}`
hour.textContent = h
minutes.innerText = min
seconds.innerText = sec
})