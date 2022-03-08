Date.prototype.getWeekOfMonth = function() {
	let firstWeekday = new Date(this.getFullYear(), this.getMonth(), 1).getDay() - 1;
  	if (firstWeekday < 0) firstWeekday = 6;

  	const offsetDate = this.getDate() + firstWeekday - 1;
  	return Math.floor(offsetDate / 7) + 1;
};

const list_of_weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const list_of_months = [
	'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

function getDayInfo(date) {	
	let date_list = date.split(".");
	const date_object = new Date(date_list[2], date_list[1] - 1, date_list[0]);

	const weekday = list_of_weekdays[date_object.getDay()];
	const month = list_of_months[date_object.getMonth()];

	return `${weekday}, ${date_object.getWeekOfMonth()} неделя ${month} ${date_object.getFullYear()} года`;
};
