class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(my_radius) {
        this.radius = my_radius;
    }
    setColor(my_color) {
        this.color = my_color;
    }

    getArea() {
        return 3.15 * this.radius * this.radius;
    }

    my_toString() {
        var str='Circle of radius '+ this.radius+' is of area '+this.getArea();
        return str;

    }
}

let c1 = new Circle(10,'red');
c1.setColor('orange');
console.log(c1.my_toString());