// let paragrafy =$('p');
// console.log(paragrafy.text());

// paragrafy.text('Nowy tekst paragrafu');

// let paragrafyByHtml = $('p');
// console.log(paragrafyByHtml.html());

// paragrafyByHtml.html('<span> Tresc ze znacznika span</span>');

// let naglowek2 = $('#naglowek-2');
/*naglowek2.prepend('Preprendujemy tresc | ');
naglowek2.append(' | Apendujemy tresc ');

naglowek2.before('Beforujemy tresc | ');
naglowek2.after(' | Afterujemy tresc ');
*/

// naglowek2.empty();

// naglowek2.remove();

//naglowek2.replaceWith('<span> Span </span>'); // outerHTML in pure JS


// let paragrafy = $('p');
// paragrafy.css({'background-color': 'green',
// 'font-size': '2em',
// 'color':'yellow',
// });

/*let pierwszyParagraf = $ ('.par').eq(0);
console.log(pierwszyParagraf);

pierwszyParagraf.addClass('red');
pierwszyParagraf.removeClass('red');*/

$ ('input#input-1').val('Jan Kowalski');

$('input#input-1').change(function() {
    console.log($(this).val());
});



















