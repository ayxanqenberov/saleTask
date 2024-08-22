// class Car {
//     constructor(weight, oil) {
//         this.weight = weight;
//         this.oil = oil;
//     }
//     wheels() {
//         console.log("tekerleri 4-dur");
//     }
//     glass() {
//         console.log("susesi var");
//     }
//     material(){
//         console.log("demirdir");
        
//     }
// }

// class Bmw extends Car {
//     constructor( weight, oil) {
//         super(weight,oil)
//     }
//     wheels(){
//         console.log(super.wheels());
//     }
//     glass(){
//         console.log(super.glass);
//     }
//     material(){
//         console.log(super.material);
        
//     }
// }

// class Kia extends Car {
//     constructor(name, weight, oil) {
//         super(weight,oil)
//         this.name = name
//     }
//     wheels(){
//         console.log(`${name}`,super.wheels());
//     }
//     glass(){
//         console.log(super.glass);
//     }
//     material(){
//         console.log(super.material);
        
//     }
// }
// const opt = new Car("500kg","benzin")
// opt.wheels();
// opt.glass(); 
// opt.displayModel(); 

// const myBmw = new Bmw("Bmw");
// myBmw.wheels(); 
// myBmw.glass(); 
// myBmw.material(); 

// const myKia = new Kia("Kia");
// myBmw.wheels(); 
// myBmw.glass(); 
// myBmw.material(); 

class Car {
    constructor(teker, mator, yag, yanacaqNovu) {
        this.teker = teker
        this.mator = mator
        this.yag = yag
        this.yanacaqNovu = yanacaqNovu
    }

    tekerInfo() {
        console.log(`teker sayi ${this.teker}`);
    }

    matorInfo() {
        console.log(`mator gucu ${this.mator}`);
    }

    yagInfo() {
        console.log(`yag novu ${this.yag}`);
    }

    yanacaq() {
        console.log(`yanacaq novu ${this.yanacaqNovu}`);
    }
}


class Mercedes extends Car {
    color= "red"

}

class Bmw extends Car {
    color= "blue"
}

const mercedes = new Mercedes(4, 4.4, "Shell", "Dizel")
const bmw = new Bmw(4, 2.4, "lukoil", "Benzin")
// mercedes.matorInfo()
// console.log(mercedes.color);

// console.log(bmw.)\;
// bmw.matorInfo()
// ! static 