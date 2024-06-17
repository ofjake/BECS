function fwheader() {
    var theDiv = document.getElementById('example-header').children;
    for (var i = 0; i < theDiv.length; i++) {
        if (theDiv[i].tagName == 'UL') {       // Check if the element is <ul>.
            // Find the text using "indexOf()" method.
            if (theDiv[i].id.indexOf('header') == 0) {   // Gets the code from the list.
                var li = theDiv[i].children;
                // Show the code
                result.innerHTML = result.innerHTML + '<br />' + li[0].innerHTML;
            }
        }
    }
}

function fwcta() {
    var theDiv = document.getElementById('example-cta').children;
    for (var i = 0; i < theDiv.length; i++) {
        if (theDiv[i].tagName == 'UL') {       // Check if the element is <ul>.
            // Find the text using "indexOf()" method.
            if (theDiv[i].id.indexOf('cta') == 0) {   // Gets the code from the list.
                var li = theDiv[i].children;
                // Show the code
                result.innerHTML = result.innerHTML + '<br />' + li[0].innerHTML;
            }
        }
    }
}

function fwbody() {
    var theDiv = document.getElementById('example-body').children;
    for (var i = 0; i < theDiv.length; i++) {
        if (theDiv[i].tagName == 'UL') {       // Check if the element is <ul>.
            // Find the text using "indexOf()" method.
            if (theDiv[i].id.indexOf('body') == 0) {   // Gets the code from the list.
                var li = theDiv[i].children;
                // Show the code
                result.innerHTML = result.innerHTML + '<br />' + li[0].innerHTML;
            }
        }
    }
}

function fwpreheadfix() {
    var theDiv = document.getElementById('example-preheadfix').children;
    for (var i = 0; i < theDiv.length; i++) {
        if (theDiv[i].tagName == 'UL') {       // Check if the element is <ul>.
            // Find the text using "indexOf()" method.
            if (theDiv[i].id.indexOf('preheadfix') == 0) {   // Gets the code from the list.
                var li = theDiv[i].children;
                // Show the code
                result.innerHTML = result.innerHTML + '<br />' + li[0].innerHTML;
            }
        }
    }
}

