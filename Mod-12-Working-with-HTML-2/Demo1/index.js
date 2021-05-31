"use strict";

let hikes = [
    {
        id: "H101",
        name: "Birding Loop",
        description: "The Birding Loop takes you through cedar forests, open plains, and beautiful spring time creeks.  Along the way, you might see some of out 225 annually recorded bird species, including the beautiful Painted Bunting, the adorable Tufted Titmouse, or even a high-flying Red-Tailed Hawk. The terrain is generally flat and the trail is well marked.",
        scenicImage: "birding_loop_1.png",
        trailMapImage: "birding_loop_2.png",
        length: "2.3 miles",
        difficulty: 2
    },
    {
        id: "H102",
        name: "Deep Blue Pool Trail",
        description: "This gem features an amazing natural pool surrounded by overhanging cliffs.  A 1-mile trail leads down to the pool from the parking lot. The trail is moderately steep, requiring solid footwork but the destination is worth the walk!",
        scenicImage: "deep_blue_1.png",
        trailMapImage: "deep_blue_2.png",
        length: "2 miles",
        difficulty: 2
    },
    {
        id: "H103",
        name: "Overlook Trail",
        description: "The Overlook Trail offers a sweeping view of the valley on this quick, but steep, trail. Keep a close eye on small children and do not get too close to exposed edges.",
        scenicImage: "overlook_trail_1.png",
        trailMapImage: "overlook_trail_2.png",
        length: ".7 miles",
        difficulty: 2
    },
];


window.onload = function () {
    loadHikesDropdown();

    const showDetailsBtn = document.getElementById("showDetailsBtn");
    showDetailsBtn.onclick = showDetailsBtnClicked;

}

function loadHikesDropdown() {
    const loadHikesDropdown = document.getElementById("hikesDropdown");

    // create <option value="">Select One...</option> as first option
    let selectOneOption = new Option("select one...", "");
    //let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    hikesDropdown.appendChild(selectOneOption);


    for (let i = 0; i < hikes.length; i++) {
        // create an option each time we go thru the loop
        // <option value="xxx">text</option>
        let theOption = document.createElement("option");
        theOption.textContent = hikes[i].name;
        theOption.value = hikes[i].id; // we want values to uniquely map back to an element in the array

        // add that option to the <select> element
        hikesDropdown.appendChild(theOption);
    }
}


function showDetailsBtnClicked() {
    // find where the hike data will show on the apge
    const descriptionPara = document.getElementById("descriptionPara");
    const lengthPara = document.getElementById("lengthPara");

    // ADD THIS TO CLEAR ANY PREVIOUS HIKE DESCRIPTION JUST IN CASE THERE IS AN ERROR
    descriptionPara.innerHTML = "";
    lengthPara.innerHTML = "";

    // get the (value of) hike selected from the dropdown list
    const hikesDropdown = document.getElementById("hikesDropdown");
    let selectedHikeId = hikesDropdown.value;

    // ADD TO TEST TO SEE IF THE USER SELECTED "SELECTED ONE..." BEFORE THEY CLICKED THE BUTTON
    // testing to see if the user has selected "Selected one..."
    if (selectedHikeId == "") {
        alert("Please select a hike first");
        return;
    }

    // go find that hike in the array of hiking data (we will match by the id of the hike
    // that was in the VALUE of the selected dropdown - the description of the hike was
    // the text of the dropdown selection)
   let matchingHike = hikes.find(arrayElement => arrayElement.id == selectedHikeId);

    // display the specific matching hiking data below the button in the details area
    descriptionPara.innerHTML = matchingHike.description; // show description in one para
    lengthPara.innerHTML = "Length: " + matchingHike.length; // show hike length in the other paragraph

    // display the specific matching hiking data below the button in the details area 
    descriptionPara.innerHTML = matchingHike.description;
    lengthPara.innerHTML = "Length: " + matchingHike.length;
}
