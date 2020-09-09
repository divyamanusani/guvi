class Movie {
    constructor(title, studio, rating) {
        this.ratings = rating ? rating : '8.5/10';
        this.movie_title = title;
        this.studio = studio;
    }
    
//Return those movies which have rating of 8.5
    getPG(movies) {
        var hit_movies = movies.filter((movie) => movie.ratings === '8.5/10');
        return hit_movies.map((m)=>m.movie_title);
    }
}

let m1 = new Movie('Casino Royale', 'EON Productions', '8.5/10');
let m2 = new Movie('Bahubali', 'Ramoji Film City');
let m3 = new Movie('Chandramukhi', 'Sivaji Productions', '9.5/10');
let m4 = new Movie('Jab We Met', 'Yash Raj', '9/10');
let m5 = new Movie('Arjun Reddy', 'Tattoos Studio');
var m6=new Movie('BhadriPur','pia studios','5/10');
let movieArr = [m1, m2, m3, m4, m5,m6];

console.log(m1.getPG(movieArr));
