'use strict';

let id;

if(id = prompt("Who\'s there?", '')){
    if (id === "Admin") {
        let pw = prompt("Password?", '');
        if (pw === "TheMaster") alert("Welcome!");
        else if (pw == '' || pw == null) alert("Canceled");
        else (alert("Wrong password"));
    }
} else if (id == '' || id == null) alert("Canceled");
else alert("I don't know you");