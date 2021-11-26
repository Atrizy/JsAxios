// function change_background() {
//   document.body.style.background = "magenta";

//   axios.request({
//   url: "https://api.punkapi.com/v2/beers",
//   method: "GET",
//   params: {
//     abv_gt: "19"
//   }
// }).then(kanye_sucess).catch(kanye_failed);
// }

// var party_button = document.createElement("button");
// party_button.innerText = "Party Zone";

// var button_container = document.getElementById("button_container");
// button_container.appendChild(party_button);

// party_button.addEventListener(`click`, change_background);

// function kanye_sucess(response){
//   var quote_tag = document.createElement("h1");
//   quote_tag.innerText = response["data"][0]["name"]
//   button_container.appendChild(quote_tag);
// }

// function fail_function(error) {
//   var error_tag = document.createElement("h1");
//   error_tag.innerText = "Sorry, something went wrong. Please refresh the page."
//   button_container.appendChild(error_tag);
// }

// function form_submit() {
// you have to make the other functions don't forget
//   axios.request({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: {
//       title: document.getElementById("post_title").value,
//       body: document.getElementById("post_body").value,
//       userId: 10
//     }
//   }).then(post_success).catch(post_failed)
// }

function get_axios() {
  axios.request({
  url: "http://www.boredapi.com/api/activity/",
  method: "GET",
}).then(success_function).catch(fail_function)
}

function get_axios2() {
  axios.request({
  url: "http://www.boredapi.com/api/activity/",
  method: "GET",
  params: {
    participants: document.getElementById("choose_activity").value
  }
}).then(success_function2).catch(fail_function)
}

function success_function(response) {
  var activity = document.createElement("p");
  activity.innerText = response["data"]["activity"];

  document.getElementById("activity_content").appendChild(activity)
}

function success_function2(response) {
  var activity = document.createElement("p");
  activity.innerText = response["data"]["participants"];

  document.getElementById("part_content").appendChild(activity)
}

function fail_function(error) {
  var error_message = document.createElement("p");
  error_message.innerText = "Sorry we couldn't get that information for you, please refresh the page!" 

  document.getElementById("activity_content").appendChild(error_message)
}

document.getElementById("selection").addEventListener("click", get_axios)

document.getElementById("activity_button").addEventListener("click" , get_axios2)

var activity_content = document.createElement("article");

var activity_container = document.getElementById("activity_content");





