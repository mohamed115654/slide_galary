var indexSlide = 1;
function galary(number) {
    var slide = document.getElementsByClassName('slide-show'),
        image = document.getElementsByClassName('image'),
        i;

        for(i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none'
        }

        if(number > slide.length) {
            indexSlide = 1;
        } 

        if(number < 1) {
            indexSlide = slide.length;
        }

        slide[indexSlide - 1].style.display = 'block';
}
galary()

function plusIndex(number) {
    galary(indexSlide += number)
}

function galaryBox(thisBox) {
    galary(indexSlide = thisBox)
}