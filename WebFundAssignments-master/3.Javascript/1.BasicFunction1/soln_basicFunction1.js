Numbers right: 8/15

[correct] #1 ---------------------------->
function a(){
    return 35;
}
console.log(a())

=== MY ANSWER ===
=> 35

*** CONSOLE ANSWER ***
=> 35


[correct] #2 ---------------------------->
function a(){
    return 4;
}
console.log(a()+a());

=== MY ANSWER ===
=> 8

*** CONSOLE ANSWER ***
=> 8

[wrong] #3 ---------------------------->
function a(b){
    return b;
}
console.log(a(2)+a(4));

=== MY ANSWER ===
=> bb

Questions
- will function return b before outputing the second b?

*** CONSOLE ANSWER ***
=> 6


[correct] #4 ---------------------------->
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

=== MY ANSWER ===
3
9

*** CONSOLE ANSWER ***
3
9


[correct] #5 ---------------------------->
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

=== MY ANSWER ===
40

*** CONSOLE ANSWER ***
40


[wrong] #6 ---------------------------->
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

=== MY ANSWER ===
4
15

*** CONSOLE ANSWER ***
4

Notes:
The return breaks out of the loop


[half right]function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

=== MY ANSWER ===
10,3
30

*** CONSOLE ANSWER ***
10 3
30

#8 ---------------------------->
[correct] function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

=== MY ANSWER ===
3
4

*** CONSOLE ANSWER ***
3
4

[wrong] #9 ---------------------------->
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

=== MY ANSWER ===
2
3
4
5
6
7
8
9
10
11

*** CONSOLE ANSWER ***
2
5
8
11

Note
I was distracted...I should know this.

[almost] #10 ---------------------------->
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));


=== MY ANSWER ===
0
1
2
3
4
5
6
7
8
9
0
0
1
2
3
4
5
6
7
8
9
0

*** CONSOLE ANSWER ***
0
1
2
3
4
5
6
7
8
9
0
0
1
2
3
4
5
6
7
8
9
0

[correct] #11 ---------------------------->
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}



=== MY ANSWER ===
(nothing)

*** CONSOLE ANSWER ***
undefined

[correct]  #12 ---------------------------->
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
var z = 10;

=== MY ANSWER ===
(nothing)


*** CONSOLE ANSWER ***
undefined

[correct]  #13 ---------------------------->
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
var z = 10;


=== MY ANSWER ===
undefined

*** CONSOLE ANSWER ***


[wrong] #14 ---------------------------->
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
var z = 10;

=== MY ANSWER ===
undefined

*** CONSOLE ANSWER ***
15
10
undefined

[wrong] #15 ---------------------------->
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

=== MY ANSWER ===
15
15
15
15

*** CONSOLE ANSWER ***
15
15


