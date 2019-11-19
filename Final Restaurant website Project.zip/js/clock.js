
window.onload = renderTime;

function renderTime() 
{
	var currentTime = new Date();
	
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
    	var s = currentTime.getSeconds();

	var month = currentTime.getMonth();
	var day = currentTime.getDay();
	var year = currentTime.getFullYear();
	var date = currentTime.getDate();

	var split = new Date().toString().split(" ");
	var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];

 

	setTimeout('renderTime()',1000);
    	
	if (month == 0) 
	{
		month = "January";
	}

	else if (month == 1) 
	{
		month = "February";
	}

	else if (month == 2) 
	{
		month = "March";
	}

	else if (month == 3) 
	{
		month = "April";
	}

	else if (month == 4) 
	{
		month = "May";
	}

	else if (month == 5) 
	{
		month = "June";
	}

	else if (month == 6) 
	{
		month = "July";
	}

	if (month == 7) 
	{
		month = "August";
	}

	else if (month == 8) 
	{
		month = "September";
	}

	else if (month == 9) 
	{
		month = "October";
	}

	if (month == 10) 
	{
		month = "November";
	}

	if (month == 11) 
	{
		month = "December";
	}

	if (day == 0) 
	{
		day = "Sunday";
	}

	else if (day == 1) 
	{
		day = "Monday";
	}

	else if (day == 2) 
	{
		day = "Tuesday";
	}

	else if (day == 3) 
	{
		day = "Wednesday";
	}

	else if (day == 4) 
	{
		day = "Thursday";
	}

	else if (day == 5) 
	{
		day = "Friday";
	}

	else if (day == 6) 
	{
		day = "Saturday";
	}

	if (h < 10) 
	{
		h = "0" + h;
	}

	if (m < 10) 
	{
		m = "0" + m;
	}

	if (s < 10) 
	{
		s = "0" + s;
	}

    	var myClock = document.getElementById('clockDisplay');
	
	myClock.textContent = h + ":" + m + ":" + s + " " + " " + timeZoneFormatted;

	myClock.innerText = h + ":" + m + ":" + s + " " + " " + timeZoneFormatted;
}

renderTime();
