
//Movie

class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies){
        if(movies.rating == 'PG'){
            this.array = movies;
        }
        return 6;
    }
}
   

let firstMovie = new Movie("Casino Royale","Eon Productions","PG­13");


//Circle

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(rad){
        this.radius = rad;
    }
    getColor(){
        return this.color;
    }
    setColor(col){
        this.color = col;
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    }
}

let firstCircle = new Circle(2,"red");
firstCircle.getArea();


//Person

class Person{
    constructor(name,age,address="PG"){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getDetail(){
        return `name is ${this.name}, age is ${this.age}, address is ${this.address}`;
    }
}

let firstPerson = new Person("lakshmi","20","10113 psn");
firstPerson.getDetail();

//Uber

class Uber{
    constructor(type,kilometers,wait){
        this.type = type;
        this.kilometers = kilometers;
        this.wait = wait;
    }
    calculate(){
        let totalCost = 0;
        if(this.type == "sedan"){
            totalCost += 5;
        }else if(this.type == "XL"){
            totalCost += 15;
        }else if(this.type == "InterCity"){
            totalCost += 25;
        }else{
            totalCost += 0;
        }

        totalCost += (this.kilometers*2) +(this.wait*3) ;
        return totalCost;
    }
}

let firstUber = new Uber("XL",12,5);
firstUber.calculate();