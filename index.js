// var arr =["Ali","Ahmad","Arham"]

// console.log(arr[0]);
// console.log(arr[1]);




// var obj = {
//     "name":"waqas",
//     "lastname":"khan",
//     "phone":0123344,
//     "age" :26,
//     "semester" :"first",
   
// }


// console.log(obj.name);
// console.log(obj.lastname);
// console.log(obj.phone);
// console.log(obj.age);
// console.log(obj.semester);


// fetch("data.json").then(Response=>Response.json()).then(data=>console.log(data.name))
// fetch("data.json").then(Response=>Response.json()).then(data=>console.log(data.lastname))
// fetch("data.json").then(Response=>Response.json()).then(data=>console.log(data.phone))
// fetch("data.json").then(Response=>Response.json()).then(data=>console.log(data.age))
// fetch("data.json").then(Response=>Response.json()).then(data=>console.log(data.semester))




fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("login").innerHTML = data.login)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("id").innerHTML = data.id)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("node_id").innerHTML = data.node_id)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("avatar_url").innerHTML = data.avatar_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("gravatar_id").innerHTML = data.gravatar_id)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("url").innerHTML = data.url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("html_url").innerHTML = data.html_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("followers_url").innerHTML = data.followers_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("following_url").innerHTML = data.following_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("gists_url").innerHTML = data.gists_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("starred_url").innerHTML = data.starred_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("subscriptions_url").innerHTML = data.subscriptions_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("organizations_url").innerHTML = data.organizations_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("repos_url").innerHTML = data.repos_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("events_url").innerHTML = data.events_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("received_events_url").innerHTML = data.received_events_url)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("type").innerHTML = data.type)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("site_admin").innerHTML = data.site_admin)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("name").innerHTML = data.name)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("company").innerHTML = data.company)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("blog").innerHTML = data.blog)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("location").innerHTML = data.location)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("email").innerHTML = data.email)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("hireable").innerHTML = data.hireable)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("bio").innerHTML = data.bio)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("twitter_username").innerHTML = data.twitter_username)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("public_repos").innerHTML = data.public_repos)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("public_gists").innerHTML = data.public_gists)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("followers").innerHTML = data.followers)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("following").innerHTML = data.following)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("created_at").innerHTML = data.created_at)
fetch("data.json").then(Response=>Response.json()).then(data=>document.getElementById("updated_at").innerHTML = data.updated_at)