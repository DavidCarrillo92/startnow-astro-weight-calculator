// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

var button = document.getElementById('calculateButton');
    button.onclick = handleClickEvent;
// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
/*
 var select = document.getElementById('planets');

planets.forEach(function(select,opt) {

    var opt = document.createElement('option');
    opt.value = planets[1];
    opt.innerHTML = planets[0];
    select.appendChild(opt);
});
*/

/*
    for(var index = 0; index < planets.length; index++) {
        var select = document.createElement('option');
        var option = document.getElementById('planets');
         let planetName = option.textContent[0];
         let planetGravity = option.value[1];
            select.append(planetName + planetGravity);
    };
*/


$.each(planets, function (index, value) {
        $('#planets').append($("<option></option>")
                    .text(value[0])
                    .val(value[1]));
});


function calculateWeight(userWeight, selectedPlanetName) {
    var planetWeight;
        for (var i = 0; i < planets.length; i++) {
            var pair = planets[i];
            var name = pair[0];
            var weight = pair[1];

                if (selectedPlanetName === name) {
                    planetWeight = weight;
                }
        }
        return userWeight * planetWeight;
}

/*
  // 2. Write the code to return the correct weight
     var weight = $('#userWeight').val();
     var planetGravity = $('#planets option:selected').val();
     var result = weight * planetGravity;
     return result;
}
*/

function handleClickEvent(e) {

        // 3. Create a variable called userWeight and assign the value of the user's weight. 
            var userWeight = $("#userWeight").val();
        // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
            var planetName = $('#planets option:selected').text();
        // 5. Create a variable called result and assign the value of the new calculated weight.
            var result = calculateWeight(userWeight, planetName);
        // 6. Write code to display the message shown in the screenshot.
            $('#output').html("If you were on " + planetName + ", you would weigh " + result + "lbs!");

}


// 7. Set the calculateWeight button's onclick method to use the handleClickEvent function.
    

 //   $('#calculateWeight').click(handleClickEvent);

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
//    planets.reverse();
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)

/*
$.each(items, function (i, item) {
    $('#mySelect').append($('<option>', {
        value: item.value,
        text : item.text
    }));
});
*/