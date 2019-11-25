function searchFunction() {
    var input, filter, things, div, a, i
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    things = document.querySelector(".things");
    div = document.querySelectorAll(".things div")
    for(i=0; i < div.length; i++) {
        a = div[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) >= 0) {
            a.style.display = "";
        } else {
            a.style.display = "none";
        }
    }
}