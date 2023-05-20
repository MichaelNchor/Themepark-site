// Get the modal variables
var modal = document.getElementById("myModal");

var images = document.getElementsByClassName("find-on-map");

var markers = document.querySelectorAll("[class^='marker']");

var modalMarker = document.getElementById("marker");

var map = document.getElementsByClassName("map")[0];

var mapHeight = parseFloat(map.offsetHeight);
var mapWidth = parseFloat(map.offsetWidth);



var topArray = [];
var leftArray = [];

for (var i = 0; i < markers.length; i++) {


    var leftProp = parseFloat(markers[i].offsetLeft);
    var topProp = parseFloat(markers[i].offsetTop);

    topArray.push(Math.round((topProp / mapHeight) * 100).toString() + "%");
    leftArray.push(Math.round((leftProp / mapWidth) * 100).toString() + "%");

}



for (var i = 0; i < images.length; i++) {

    images[i].addEventListener('click', function () {

        for (var j = 0; j < images.length; j++) {
            if (this.id == images[j].id) {
                modal.style.display = 'flex';
                modalMarker.style.top = topArray[j];
                modalMarker.style.left = leftArray[j];

            }
        }
    })
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
