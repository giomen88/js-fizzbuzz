const keyboard = document.getElementById('keyboard')

let key = '<ul>';

for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz')
        key += '<li class="fizzbuzz"> FizzBuzz </li>';
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
        key += '<li class="fizz"> Fizz </li>';
    }

    else if (i % 5 == 0) {
        console.log('Buzz')
        key += '<li class="buzz"> Buzz </li>';
    }

    else {
        console.log(i)
        key += '<li>' + i + '</li>';
    }
}

key += '</ul>'

keyboard.innerHTML = key