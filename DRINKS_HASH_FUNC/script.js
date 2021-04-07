class HashStorage {

    constructor() {
        this.storage = {};
    }

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        if (!(key in this.storage)) {
            return false
        }
        alert('Удалено успешно!');
        return delete this.storage[key];
    }

    getKeys() {
        return Object.keys(this.storage);
    }

}

drinkStorage = new HashStorage();

function getUserValue() {
    let title = prompt('Введите название напитка');
    let alcohol = confirm('Напиток алкогольный?');
    let recipe = prompt('Введите рецепт приготовления');
    drinkStorage.addValue(title, {'Алкогольный': alcohol, 'Рецепт приготовления: ': recipe})
}

function getInfo() {
    let drink = prompt('Название напитка');
    alert(JSON.stringify(drinkStorage.getValue(drink)))
    console.log(drink)
}

function deleteValue() {
    let drink = prompt('Название напитка');
    drinkStorage.deleteValue(drink);
}

function showKeys() {
    alert(drinkStorage.getKeys());
}