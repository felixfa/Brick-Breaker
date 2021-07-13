database = firebase.database();
ref = database.ref("score_BrickBreaker");
ref.on("value", gotData);

function gotData(data) {
  //Remove the old data from the array
  scorelisting = selectAll(".scorelisting");
  for (i = 0; i < scorelisting.length; i++) {
    scorelisting[i].remove();
  }

  //Get the Keys
  scores = data.val();
  unsorted_array = [];
  keys = Object.keys(scores);

  for (i = 0; i < keys.length; i++) {
    unsorted_array.push(scores[keys[i]]);
  }
  sorted_array = unsorted_array.sort(function (a, b) {
  return b.score - a.score;
});

  for (i = 0; i < sorted_array.length; i++) {
    submittedScore = sorted_array[i].score;
    submittedName = sorted_array[i].name;
    var li = createElement("li", submittedName + ":  " + submittedScore);
    li.class("scorelisting");
    li.parent("scorelist");
  }
}

function submitScore() {
  var data = {
    name: nameButton.value(),
    score: score,
  };

  var ref = database.ref("score_BrickBreaker");
  ref.push(data);
  isClicked = true;
}
