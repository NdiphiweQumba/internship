////////////////////////////////////////////////////////////////////////////

/*
var li_elements = document.querySelectorAll('#left_menu ul li');
var items = document.querySelectorAll('.item');

////////// console.log("The number of list elements in html" + li_elements.length); ///////
////////// alert(li_elements.length);                                               /////// 

for (var i = 0; i <= li_elements.length; i++) {
    li_elements[i].addEventListener('click', function() {
        li_elements.forEach(function(li) {
            li.classList.remove('active');
        });
        this.classList.add('active');
        var li_value = this.getAttribute('data-li');
        items.forEach(function(item) {
            item.style.display = 'none';
        });
        if (li_value == "cyber") {
            document.querySelector('.' + li_value).style.display = 'block';
        } else if (li_value == "phishing") {
            document.querySelector('.' + li_value).style.display = 'block';
        } else if (li_value == "socialEng") {
            document.querySelector('.' + li_value).style.display = 'block';
        } else if (li_value == "malware") {
            document.querySelector('.' + li_value).style.display = 'block';
        } else if (li_value == "rw") {
            document.querySelector('.' + li_value).style.display = 'block';
        } else if (li_value == "hardwareAndSoftware") {
            document.querySelector('.' + li_value).style.display = 'block';
        }
    });
}

function open_left_pane() {
    // open left pane when the button is clicked
    document.getElementById('left_menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '120px';
    //document.getElementById('home').style.width = '1000px';
    document.getElementById('main').style.textAlign = 'center';
}

// close left pane when close button is clicked
function close_left_pane() {
    document.getElementById('left_menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
}
*/