/* Grab the input value */

document.querySelector(".js-go").addEventListener('click', function () {
    var input = document.querySelector("input").value;
    findthegift(input);

});
document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    var input = document.querySelector("input").value;
   if(e.which === 13) {
     findthegift(input);
   }
 
 });

/*get data  from the API */


function findthegift(input){
var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+input;

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
var data=e.target.response;
changethedom(data);
});
}







/* Show the GIFs */
function changethedom(input){
    var imgdata=JSON.parse(input);
    var imageurls=imgdata.data;
    console.log(imageurls);
    var continer=document.querySelector(".js-container");
    continer.innerHTML = "";
    imageurls.forEach(function(image){
        var src=image.images.fixed_height.url;
        continer.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
        });
    
}
