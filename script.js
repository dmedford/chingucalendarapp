const date = document.querySelectorAll('.calendar-date');
const dates = Array.from(date);
const addEvent = document.querySelector('.event-add-icon');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const newDate = new Date();
const monthsFull = [
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
  'December',
];
const monthsAbrv = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const year = newDate.getFullYear();
const month = newDate.getMonth();
const currentDate = newDate.getDate();
const day = newDate.getDay();

// Insert current and previous Months into the DOM plus the year
const thisMonth = document.querySelector('.cur-month');
const prevMonth = document.querySelector('.prev-month');
const nextMonth = document.querySelector('.next-month');

thisMonth.textContent = monthsFull[newDate.getMonth()];
prevMonth.textContent = monthsFull[newDate.getMonth() - 1];
nextMonth.textContent = monthsFull[newDate.getMonth() + 1];

// Create the first day of the month and insert days into the calendar
const firstDay = new Date(year, month).getDay();
const lastDay = new Date(year, month + 1, 0).getDate();
const isWeekend = day => day % 7 === 6 || day % 7 === 0;
let num = 1;
for (let i = firstDay; i < lastDay + firstDay; i++) {
  dates[i].textContent = num;
  num += 1;
  if (num === currentDate + 1) {
    dates[i].classList.add('current-day');
  }
}

for (let i = 0; i < dates.length; i++) {
  if (isWeekend(i)) {
    dates[i].style.color = '#7cc0c9';
  }
}

// Change color of weekend vs weekday

// Event Listeners

// Show Modal
addEvent.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide Modal

close.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', e =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);
