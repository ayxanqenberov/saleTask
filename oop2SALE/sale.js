// isdifadeciden endirim karti olub olmadigini yoxluyan bir 
// prompt qurun 
// isdifadeciden ad soyad alin
// eger endirim karti varsa endirim edin yoxdursa endirimsiz mehsulun
// neticesini verin

// MarketBase,Musteri classlari yaradin
// Musteri classi MarketBase ni extend alacaq
// Musteri ve MarketBase classi ad,soyad,endirimKarti,mehsullar
// olan constructor yaradin

// hesabla metodu olacaq MarketBase,Musteri classlarinda
// hesabla metodu musterinin aldigi mehsullari faizle endirim 
// edilmis qiymetini vermelidi 
// hemcinin endirim olunan faiz derecesinide MarketBase icinde yazilacaq

// MarketBasee clasinda mehsullari yoxluyan function yazin

let arr = [
    {
        car: 15000,
        sale: 50
    }, {
        book: 20,
        sale: 20
    }, {
        TV: 3000,
        sale: 25
    }
]
class MarketBase {
    constructor(name, surname, endrimKarti, mehsullar) {
        this.name = name;
        this.surname = surname;
        this.endrimKarti = endrimKarti;
        this.mehsullar = mehsullar;
    }
    hesabla() {
        return this.mehsullar.forEach(item => {
            item.book * (100 - item.sale) / 100
        })

    }
}
class Musteri extends MarketBase {
    constructor(name, surname, endrimKarti, mehsullar) {
        super(name, surname, endrimKarti, mehsullar)
    }
}
const musteri1 = new Musteri("Alina", "Joy", "var",arr)
musteri1.hesabla()
class SaleCard {
    constructor(name, surname, saleCards) {
        this.name = name;
        this.surname = surname;
        this.saleCards = saleCards;
        this.declaration = prompt("Adiniz nedir?");
        this.car = 300;
        this.sale = 20;
    }
    saleProduct() {
        const enterName = this.name.toLowerCase() + " " + this.surname.toLowerCase();
        if (this.declaration.trim() == enterName) {
            if (this.saleCards == "var") {
                let result = this.car * (100 - this.sale) / 100
                console.log(result);
            } else {
                console.log(`sale cardiniz yoxdur`);
            }
        } else {
            console.log(`ad duzgun deyil`);
        }
    }
}
// let person = new SaleCard("John", "Steve", "var")
// person.saleProduct()