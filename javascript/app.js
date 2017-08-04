console.log("hello friend");

var counter = 0;
var incorrect = 0;
var correctAnswer = [];
var questions = [];
var chosen;
var value;

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