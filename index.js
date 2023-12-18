let userDataBtn = document.getElementById("fetchBtn");
let container = document.getElementById("container");
let backBtn = document.querySelector(".back-btn");

//----------------------Function display Data---------------------//
function displayData(data){
    data.data.forEach(details => {
        let userCard = document.createElement("div");
        userCard.className="user-card";

        let image = document.createElement("img");
        image.src=details.avatar;

        let first_name = document.createElement("h4");
        first_name.innerText=`First Name : ${details.first_name}`;

        let last_name = document.createElement("h4");
        last_name.innerText=`Last Name : ${details.last_name}`;

        let email =document.createElement("h4");
        email.innerText=`Email : ${details.email}`;

        userCard.append(
            image,
            first_name,
            last_name,
            email,
        );
        container.append(userCard);
    });
    
}

//--------------------------User Data Button-------------------------//
userDataBtn.addEventListener("click",function(){
    fetch("https://reqres.in/api/users")
    .then(function(response){
        return response.json();
    })
    .then(function(finalResponse){
        console.log(finalResponse);
        displayData(finalResponse);

        userDataBtn.style.display="none";
        backBtn.style.display="block";
    })
    .catch(function(error){
        console.log(error);
    })
});

//-----------------------Back Button to main page----------------------//
backBtn.addEventListener("click",function(){
    userDataBtn.style.display="block";
    backBtn.style.display="none";
    container.textContent="";
})






















/*function fetchUser(){
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data =>{
        let output="";
        console.log(data.data);
        data.data.forEach(user=>{
            output+=` <div class="user-card">
                <img src="${user.avatar}" alt="user Avatar">
                <div class="user-details">
                    First Name: ${user.first_name}<br>
                    Last Name: ${user.last_name}<br>
                    Email: ${user.email}
                </div>
            </div>
            `;
        })
        document.getElementById("container").innerHTML= output;
    })
    .catch(err =>{
        console.log("something went wrong", err);
    })
}*/