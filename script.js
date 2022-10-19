var child = document.getElementById("child");
var counterYes = 0; 
var counterNo = 0;
var yes = document.getElementById("yes");
var no = document.getElementById("no");

function upvote() {
    yes.innerHTML = counterYes = counterYes+1;
    child.innerHTML = "Thank You For Voting";

}
function downvote() {
    no.innerHTML = counterNo = counterNo+1; 
    child.innerHTML = "Thank You For Voting";

}