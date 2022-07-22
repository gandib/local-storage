let db = {};

const addToDb = item => {
    // db.proma = 1;
    // db['proma'] = 1;

    let storedItem = localStorage.getItem('items');
    if (storedItem) {
        db = JSON.parse(storedItem);
    }

    if (item in db) {
        db[item] = db[item] + 1;

    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('items', JSON.stringify(db));
}
