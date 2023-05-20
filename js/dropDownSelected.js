var e = document.getElementById("category").addEventListener('change', function () {
    var selected = this.value;

    var sections = document.getElementsByClassName("section");

    for (var i = 0; i < sections.length; i++) {
        sections[i].setAttribute('style', 'display: none;');

    }

    if (selected == "Select All") {
        for (var i = 0; i < sections.length; i++) {
            sections[i].setAttribute('style', 'display: grid;');
        }
    }

    if (selected == "Attractions") {
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            if (section.id == "attractions") {
                section.style.display = "grid";
            }
        }
    }

    if (selected == "Events") {
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            if (section.id == "events") {
                section.style.display = "grid";
            }
        }
    }

    if (selected == "Dining") {
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            if (section.id == "dining") {
                section.style.display = "grid";
            }
        }
    }


    var markers = document.getElementsByClassName("marker");


    for (var i = 0; i < markers.length; i++) {
        markers[i].setAttribute('style', 'visibility: hidden;')
    }

    if (selected == "Select All") {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setAttribute('style', 'visibility: visible;');
        }
    }

    if (selected == "Attractions") {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];

            if (marker.className == "marker attraction-marker") {
                marker.style.visibility = "visible";

            }
        }
    }

    if (selected == "Events") {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            if (marker.className == "marker event-marker") {
                marker.style.visibility = "visible";

            }
        }
    }

    if (selected == "Dining") {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            if (marker.className == "marker dining-marker") {
                marker.style.visibility = "visible";

            }
        }
    }

})
