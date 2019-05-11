$(function() {
    // Zmienne
    const slideShow = $('.slide-show');
    const singleSlide = $('.single-slide');
    const slideCount = singleSlide.length;
    const slideWidth = 100 / slideCount;
    let indexCounter = 0;

    // Ustawiamy dynamicznie szerokosc kontenera 
    slideShow.css('width', slideCount * 100 + '%');
    //slideShow.css('width', slideCount + '100%'); <-- wyszłoby to samo

    // Ustawiamy dynamiczna szerokosc obrazkow
    singleSlide.each(function(index) {
        $(this).css( {
            'width': slideWidth + '%', 
            'margin-left': index * slideWidth + '%',
        });
    });

    //Podpinamy eventy click na przyciski 

    $('.prev-slide').click(function(){
        slide(indexCounter - 1);
    });

    $('.next-slide').click(function(){
        slide(indexCounter + 1);
    });

    function slide(newIndex) {
        console.log(indexCounter);

    if (newIndex < 0 || newIndex >= slideCount) {
        return; 
    }

    // Ukrywamy napis 
    const currentTitle = $('.slide-caption').eq(newIndex);
    currentTitle.fadeOut();

    const marginLeft = newIndex * (-100) + '%';

    // Wywolywanie animacji
    slideShow.animate({
        'margin-left' : marginLeft,
    }, 1000, function() {
        currentTitle.fadeIn();
        indexCounter = newIndex;
    });

    }

});



