// fizz.js

$(document).ready(function() {

    $("#result").html(function(){
        // add some pretty colors
        function numString(num) {
            return "<span style='color: green;'>" + num + "</span><br>\n";
        }
        var fizzString = "<span style='color: blue;'>Fizz</span><br>\n";
        var buzzString = "<span style='color: red;'>Buzz</span><br>\n";
        fizzBuzzString = "<span style='font-weight: bold;'>FizzBuzz</span><br>\n";
        finalOutput = "";

        console.log(fizzString);
        for(i=0; i<=100; i++){
            console.log(i);
            if ((i % 3 === 0) && (i % 5 === 0)) {
                finalOutput += fizzBuzzString;
            }
            else if (i % 3 === 0) {
                finalOutput += fizzString;
            }
            else if (i % 5 === 0) {
                finalOutput += buzzString;
            }
            else {
                finalOutput += numString(i);
            }
        }
        return finalOutput;
    });

});
