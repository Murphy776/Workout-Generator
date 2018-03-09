// Workout Generator version 1.0te
// Kevin Murphy 
// 5/15/2015


function workoutGenerator(x){
	var x;
	var I;
	var A;
	var B; 
	var para;
	var exercise = "";
	var upperList = ["Push-ups", "Tricep-Dips", "Bent-Over Rows", "Dolphin Push-Up", "Burpees", "Judo Push-ups", "Bicep Curls"];
	var lowerList = ["Wall Sit", "Lunges", "Clock Lunge", "Lunge Jump", "Squat", "Single Leg Deadlift", "Step-Up"];
	var absList = ["L Seat", "Flutter Kick", "Side Plank", "Plank"];
	var cardioList = ["Inchworm", "Burpees", "Tuck Jump", "Bear Crawl"];
	
	
	if(x == "I")
		intermediateWorkout();
	else if(x == "A")
		advancedWorkout();
	else
		beginnerWorkout();
		
		
	function intermediateWorkout(){
	
	 	para = document.getElementById("test").innerHTML = "<h3>Intermediate Workout:</h3>";
		
		$("#test").removeClass("begin advance");
	 	$("#test").addClass("inter");

		for (var i=0; i<10; i++)
		{
			exercise += "<div class='wod'>"
			exercise += "Set " + (i+1) + ".<br/>" + upperList[Math.floor(upperList.length * Math.random())] + " for 20 reps <br/>";
			exercise += lowerList[Math.floor(lowerList.length * Math.random())] + " for 20 reps <br/>";
			exercise += absList[Math.floor(absList.length * Math.random())] + " for 20 reps <br/>";
			exercise += cardioList[Math.floor(cardioList.length * Math.random())] + " for 20 reps <br/>";
			exercise += "</div>";
		}
		
		document.getElementById("test").innerHTML += "<br/><div id='test_div'>" + exercise + "</div>"; 
		}
	
	function beginnerWorkout(){

		para = document.getElementById("test").innerHTML = "<h3>Beginner Workout:</h3>";

		$("#test").removeClass("inter advance");
		$("#test").addClass("begin");

		for(var i=0; i<5; i++)
		{
			exercise += "<div class='wod'>"
			exercise += "Set " + (i+1) + ".<br/>" + upperList[Math.floor(upperList.length * Math.random())] + " -- 10 reps <br/>";
			exercise += lowerList[Math.floor(lowerList.length * Math.random())] + " -- 10 reps <br/>";
			exercise += absList[Math.floor(absList.length * Math.random())] + " -- 10 reps <br/>";
			exercise += cardioList[Math.floor(cardioList.length * Math.random())] + " -- 10 reps <br/>";
			exercise += "</div>";
		}

		document.getElementById('test').innerHTML += "<br/>" + exercise;

	}

	function advancedWorkout(){

		para = document.getElementById("test").innerHTML = "<h3>Advanced Workout:</h3>";

		$("#test").addClass("advance");

		$("#test").removeClass("begin inter");

		for(var i=0; i<15; i++)
		{
			exercise += "<div class='wod'>"
			exercise += "Set " + (i+1) + ".<br/>" + upperList[Math.floor(upperList.length * Math.random())] + " for 40 reps <br/>";
			exercise += lowerList[Math.floor(lowerList.length * Math.random())] + " for 40 reps <br/>";
			exercise += absList[Math.floor(absList.length * Math.random())] + " for 40 reps <br/>";
			exercise += cardioList[Math.floor(cardioList.length * Math.random())] + " for 40 reps <br/>";
			exercise += "</div>";	
		}

		document.getElementById("test").innerHTML += "<br/>" + exercise;

	}	
	
}

