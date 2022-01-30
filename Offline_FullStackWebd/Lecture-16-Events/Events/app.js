//For without use of forms
// const username = document.getElementById("username");
// const tweet = document.getElementById("tweet");

//with the use of form
const form = document.getElementById("form");

const tweets_lists = document.getElementById("tweets-list");
const btn = document.getElementById("btn1");

/*
USING WITHOUT FORM
btn.addEventListener("click", function () {
  const u = username.value;
  const t = tweet.value;
  addToTweetList(u, t);
  username.value = "";
  tweet.value = "";
});
*/

//USING WITH FORM
btn.addEventListener("click", function (e) {
  //e.preventDefault();
  const u = form.elements[1].value;
  const t = form.elements[2].value;
  addToTweetList(u, t);
  username.value = "";
  tweet.value = "";
});

function addToTweetList(u, t) {
  const li = document.createElement("li");
  li.innerText = "Username : " + u + " -> " + "Tweeted :" + t;
  tweets_lists.append(li);
}
