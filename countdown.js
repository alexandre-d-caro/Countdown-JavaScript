//Definition of the "D-day"
var cible = new Date('January 25, 2013 14:30:00');
var time = parseInt(cible.getTime() / 1000, 10);


function countdown()
{
  //Definition of the current date
	var aujourdhui = new Date();
	time_tmp = parseInt(aujourdhui.getTime() / 1000, 10);

	//Countdown calculation
	restant = time - time_tmp;
	
	//Data calculation with the current date
	jour = parseInt((restant / (60 * 60 * 24)), 10);
	heure = parseInt((restant / (60 * 60) - jour * 24), 10);
	minute = parseInt((restant / 60 - jour * 24 * 60 - heure * 60), 10);
	seconde = parseInt((restant - jour * 24 * 60 * 60 - heure * 60 * 60 - minute * 60), 10);
	
	//Put the data in the HTML
	document.getElementById('jours').innerHTML = jour;
	document.getElementById('heures').innerHTML  = heure;
	document.getElementById('minutes').innerHTML  = minute;
	document.getElementById('secondes').innerHTML = seconde;
	
	//Display of the countdown each second
	if (time_tmp < time)
		setTimeout('countdown()', 1000);
	else
	{
		//When the countdown is over, all the data go to 0
		document.getElementById('jours').innerHTML = 0;
		document.getElementById('heures').innerHTML  = 0;
		document.getElementById('minutes').innerHTML  = 0;
		document.getElementById('secondes').innerHTML = 0;
	}
}
setTimeout('countdown()', 500);
