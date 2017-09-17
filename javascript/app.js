console.log("hello friend");

// var counter = ['2', '5'];
// var incorrect = ['5', '4'];
var correctAnswer = [];
var questions = [];
var chosen;


// var categories = {
// 	movies: 11,
// 	science: 17
// }

// $(document).on('click', '.answerChoice', (e) => {
// 	var isCorrect = $(this).data['correct'];
// 	$('answerChoice').removeClass('.answerChoice');

// 	if (isCorrect) {
// 		// increment score
// 	}
// }) 

// var url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`

var easyMovieURL = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple";
var mediumMovieURL = "https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple";
var hardMovieURL = "https://opentdb.com/api.php?amount=1&category=11&difficulty=hard&type=multiple";

var easyScienceURL = "https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple";
var mediumScienceURL = "https://opentdb.com/api.php?amount=1&category=17&difficulty=medium&type=multiple";
var hardScienceURL = "https://opentdb.com/api.php?amount=1&category=17&difficulty=hard&type=multiple";

var easyPoliticsURL = "https://opentdb.com/api.php?amount=1&category=24&difficulty=easy&type=multiple";
var mediumPoliticsURL = "https://opentdb.com/api.php?amount=1&category=24&difficulty=medium&type=multiple";
var hardPoliticsURL = "https://opentdb.com/api.php?amount=1&category=24&difficulty=hard&type=multiple";

var easyHistoryURL = "https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple";
var mediumHistoryURL = "https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple";
var hardHistoryURL = "https://opentdb.com/api.php?amount=1&category=23&difficulty=hard&type=multiple";

var easySportsURL = "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple";
var mediumSportsURL = "https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple";
var hardSportsURL = "https://opentdb.com/api.php?amount=1&category=21&difficulty=hard&type=multiple";



// FUNCTIONS AND AJAX CALLS

// MOVIE APIs
function ajaxMovieEasy() {
	$.ajax({
	        url: easyMovieURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxMovieMedium() {
	$.ajax({
	        url: mediumMovieURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxMovieHard() {
	$.ajax({
	        url: hardMovieURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

// SCIENCE APIs

function ajaxScienceEasy() {
	$.ajax({
	        url: easyScienceURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxScienceMedium() {
	$.ajax({
	        url: mediumScienceURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxScienceHard() {
	$.ajax({
	        url: hardScienceURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

// POLITICS APIs
function ajaxPoliticsEasy() {
	$.ajax({
	        url: easyPoliticsURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxPoliticsMedium() {
	$.ajax({
	        url: mediumPoliticsURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxPoliticsHard() {
	$.ajax({
	        url: hardPoliticsURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

// HISTORY APIs

function ajaxHistoryEasy() {
	$.ajax({
	        url: easyHistoryURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxHistoryMedium() {
	$.ajax({
	        url: mediumHistoryURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxHistoryHard() {
	$.ajax({
	        url: hardHistoryURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}


// SPORTS APIs

function ajaxSportsEasy() {
	$.ajax({
	        url: easySportsURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxSportsMedium() {
	$.ajax({
	        url: mediumSportsURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

function ajaxSportsHard() {
	$.ajax({
	        url: hardSportsURL,
	        method: "GET"
	    }).done(function(response) {
	        console.log(response);

		        correctAnswer = [];
		        questions = [];

		        $("#question").html(response.results[0].question);

		        var correct = response.results[0].correct_answer;
		        correctAnswer.push(correct);
		        questions.push(correct);

		        var other1 = response.results[0].incorrect_answers[0];
		        var other2 = response.results[0].incorrect_answers[1];
		        var other3 = response.results[0].incorrect_answers[2];

		        questions.push(other1, other2, other3);

		        randomize();

		        $("#ans1").html(questions[0]);
		        $("#ans2").html(questions[1]);
		        $("#ans3").html(questions[2]);
		        $("#ans4").html(questions[3]);

		        	console.log(questions);
					console.log(correctAnswer);

		    });
}

// // CONTINUE FUNCTION

// function continueGame() {
// 	chosen == correctAnswer ? counter++ : incorrect++;

// 	$("#score").html(wager);

// 	$("#previous").html(correctAnswer);
// }

// RANDOMIZE THE ARRAY
function randomize() {
	for (var i = questions.length - 1; i > 0; i--) {
	    var j = Math.floor(Math.random() * (i + 1));
	    var temp = questions[i];
	    questions[i] = questions[j];
	    questions[j] = temp;
	}
	return questions;
}

$(document).ready(function() {

	var add = [];

	var sub = [];




	// CONTINUE FUNCTION

	function continueGame() {
		// chosen == correctAnswer ? counter++ : incorrect++;

		if (chosen == correctAnswer) {
			addToTotal();
		} else {
			subToTotal();
		}

		$("#previous").html(correctAnswer);


	}

	// LOGS IF RIGHT OR WRONG
	function addToTotal() {
		add.push(ready);
	}

	function subToTotal() {
		sub.push(ready);
	}

	// SUM ARRAYS

	function totalScore() {
		var addInt = add.map(Number);
		var subInt = sub.map(Number);

		addSum = addInt.reduce(function(a, b) { return a + b; }, 0);
		subSum = subInt.reduce(function(a, b) { return a + b; }, 0);

		total = addSum - subSum;

		$("#score").html(total);

		if (total < 0) {
			$("#scoreCard").css("background-color", "red");
		} else {
			$("#scoreCard").css("background-color", "#060ce9");
		}
	}


	// MOVIE CLICK EVENTS
	$("#movies100").click(function() {
		ready = [];
		ajaxMovieEasy();
		var value = $("#movies300");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();

	});

	$("#movies200").click(function() {
		ready = [];
		ajaxMovieMedium();
		var value = $("#movies300");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#movies300").click(function() {
		ready = [];
		ajaxMovieMedium();
		var value = $("#movies300");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#movies400").click(function() {
		ready = [];
		ajaxMovieHard();
		var value = $("#movies400");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#movies500").click(function() {
		ready = [];
		ajaxMovieHard();
		var value = $("#movies500");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});


	// SCIENCE CLICK EVENTS

	$("#science100").click(function() {
		ready = [];
		ajaxScienceEasy();
		var value = $("#science100");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#science200").click(function() {
		ready = [];
		ajaxScienceEasy();
		var value = $("#science200");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#science300").click(function() {
		ready = [];
		ajaxScienceMedium();
		var value = $("#science300");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#science400").click(function() {
		ready = [];
		ajaxScienceHard();
		var value = $("#science400");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#science500").click(function() {
		ready = [];
		ajaxScienceHard();
		var value = $("#science500");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});


	// POLITICS CLICK EVENTS

	$("#politics100").click(function() {
		ready = [];
		ajaxPoliticsEasy();
		var value = $("#politics100");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#politics200").click(function() {
		ready = [];
		ajaxPoliticsEasy();
		var value = $("#politics200");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#politics300").click(function() {
		ready = [];
		ajaxPoliticsMedium();
		var value = $("#politics300");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#politics400").click(function() {
		ready = [];
		ajaxPoliticsHard();
		var value = $("#politics400");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#politics500").click(function() {
		ready = [];
		ajaxPoliticsHard();
		var value = $("#politics500");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});


	// HISTORY CLICK EVENTS

	$("#history100").click(function() {
		ready = [];
		ajaxHistoryEasy();
		var value = $("#history100");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#history200").click(function() {
		ready = [];
		ajaxHistoryEasy();
		var value = $("#history200");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#history300").click(function() {
		ready = [];
		ajaxHistoryMedium();
		var value = $("#history300");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#history400").click(function() {
		ready = [];
		ajaxHistoryHard();
		var value = $("#history400");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#history500").click(function() {
		ready = [];
		ajaxHistoryHard();
		var value = $("#history500");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	// SPORTS CLICK EVENTS

	$("#sports100").click(function() {
		ready = [];
		ajaxSportsEasy();
		var value = $("#sports100");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#sports200").click(function() {
		ready = [];
		ajaxSportsEasy();
		var value = $("#sports200");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#sports300").click(function() {
		ready = [];
		ajaxSportsMedium();
		var value = $("#sports300");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#sports400").click(function() {
		ready = [];
		ajaxSportsHard();
		var value = $("#sports400");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	$("#sports500").click(function() {
		ready = [];
		ajaxSportsHard();
		var value = $("#sports500");
		var wager = value.data("value");
		ready.push(wager);
		console.log("wager = " + wager);
		console.log("for scoring " + ready);
		$("#hide").slideDown();
	});

	// ANSWER CLICK EVENTS

	$("#ans1").click(function() {
		var question1 = $("#ans1").text();
		chosen = question1;
		continueGame();
		console.log(chosen);
		console.log("add " + add + " sub " + sub);
		totalScore();
		console.log("total = " + total);
		$("#hide").slideUp();
		// console.log("addSum " + addSum + " subSum " + subSum);

	});

	$("#ans2").click(function() {
		var question2 = $("#ans2").text();
		chosen = question2;
		continueGame();
		console.log(chosen);
		console.log("add " + add + " sub " + sub);
		totalScore();
		console.log("total = " + total);
		$("#hide").slideUp();
		// console.log("addSum " + addSum + " subSum " + subSum);
	});

	$("#ans3").click(function() {
		var question3 = $("#ans3").text();
		chosen = question3;
		continueGame();
		console.log(chosen);
		console.log("add " + add + " sub " + sub);
		totalScore();
		console.log("total = " + total);
		$("#hide").slideUp();
		// console.log("addSum " + addSum + " subSum " + subSum);
	});

	$("#ans4").click(function() {
		var question4 = $("#ans4").text();
		chosen = question4;
		continueGame();
		console.log(chosen);
		console.log("add " + add + " sub " + sub);
		totalScore();
		console.log("total = " + total);
		$("#hide").slideUp();
		// console.log("addSum " + addSum + " subSum " + subSum);
	});



});