/* Iteration 4: Make Everything Work */
//  Ironman - background, helmet, eyes, face-plate 
var background=document.getElementById("background");
var buttonbackground=document.getElementById("buttonbackground");

buttonbackground.oninput= () => {
    //  console.log("my colour input is working");
        background.style.fill=buttonbackground.value;

};
``
var helmet=document.getElementById("helmet");
var buttonhelmet=document.getElementById("buttonhelmet");

buttonhelmet.oninput= () =>{
    helmet.style.fill=buttonhelmet.value;

};

var eyes=document.getElementById("eyes");
var buttoneyes=document.getElementById("buttoneyes");

buttoneyes.oninput= () =>{
    eyes.style.fill=buttoneyes.value;
};

var faceplate=document.getElementById("face-plate");
var buttonFacaeplate=document.getElementById("buttonfaceplate");

buttonfaceplate.oninput= () =>{
    faceplate.style.fill=buttonfaceplate.value;
};