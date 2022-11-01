"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// Проверяем насколько пользователь любит кино и сообщаем ему об этом
if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}
// с помощью цикла задаем вопросы и проверяем на правильность ответы
// И записываем полученные ответы в объект
// с циклом for
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько вы его оцените?', '');
    if (a != 0 && b != 0 && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
// let i = 0;
// с циклом do while
// do {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько вы его оцените?', '');
//     if (a != 0 && b != 0 && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2);


// c помощью цикла while
// while (i < 2) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько вы его оцените?', '');
//     if (a != 0 && b != 0 && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }




console.log(personalMovieDB);