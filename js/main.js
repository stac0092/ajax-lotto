document.addEventListener("DOMContentLoaded", init);

let url = "https://davidst.edumedia.ca/mad9014/nums.php";

let pages = []; // empty array

function init() {
    addEventListeners();
}


function addEventListeners() {
    pages = document.querySelectorAll(".page");
    console.log(pages);

    document.getElementById("btnSend").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });

    document.getElementById("btnBack").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });
    document.getElementById("btnSend").addEventListener("click", getNumbers);
    document.getElementById("btnBack").addEventListener("click", resetLotto);
}



function getNumbers() {
    
    let formdata = new FormData(); 
    formdata.append("digits", document.getElementById("digits").value)
    formdata.append("max", document.getElementById("max").value);


    let customSettings = {
        method: "POST",
        mode: "cors",
        body: formdata
    };

    let request = new Request(url, customSettings);

   fetch(request)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            let num = document.querySelector(".num_list");
            data.numbers.forEach(function (item) {
                let li = document.createElement("li");
                li.textContent = item;
                num.appendChild(li);
            });
        })
 
        .catch(function (error) {
            alert("Error: " + error.message);
        });
}

function resetLotto(){
    document.querySelector(".num_list").innerHTML = "";
}
