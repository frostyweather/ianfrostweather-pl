/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 *
 */

document.body.classList.add("js");

window.addEventListener("scroll", function(event) {
    var element = document.documentElement;
    var offset = element.scrollTop + window.innerHeight;
    var height = element.offsetHeight;
    var sun = document.querySelector('.c-footer__sun');

    console.log('offset = ' + offset);
    console.log('height = ' + height);

    if (offset >= height) {
        sun.classList.add('is-risen');
    }
    else {
        if(sun.classList.contains('is-risen')) {
            sun.classList.remove('is-risen');
        }
    }
});
