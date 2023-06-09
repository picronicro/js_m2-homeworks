var starbucks = {
    teas: {
        black: {
            name: "Черный чай",
            inStock: true
        },
        green: {
            name: "Зеленый чай",
            inStock: true
        },
        white: {
            name: "Белый чай",
            inStock: false
        },
        puerh: {
            name: "Чай Пуэр",
            inStock: true
        }
    },
    coffees: {
        espresso: {
            name: "Кофе Эспрессо",
            inStock: true
        },
        americano: {
            name: "Кофе Американо",
            inStock: true
        },
        latte: {
            name: "Кофе Латте",
            inStock: true
        },
        cappuccino: {
            name: "Кофе Капучино",
            inStock: false
        },
        mocha: {
            name: "Кофе Мокка",
            inStock: false
        }
    }
}

var order = prompt("Чего желаете?")

if (starbucks.teas.hasOwnProperty(order)) { // чай
    if (starbucks.teas[order].inStock) {
        alert("Заказ принят (" + starbucks.teas[order].name + ")")
    } else {
        alert(starbucks.teas[order].name + " нет в наличии")
    }
} else if (starbucks.coffees.hasOwnProperty(order)) { // кофе
    if (starbucks.coffees[order].inStock) {
        alert("Заказ принят (" + starbucks.coffees[order].name + ")")
    } else {
        alert(starbucks.coffees[order].name + " нет в наличии")
    }
} else {
    alert("Такого напитка нет (" + order + ")")
}