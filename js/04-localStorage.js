function increment() {
    let count = _getFromLocal();
    count++;
    alert(count);

    _saveToLocal(count);
}

function decrement() {
    let count = _getFromLocal();
    count--;
    alert(count);

    _saveToLocal(count);
}

function reset() {
    localStorage.removeItem('counter');
    alert(_getFromLocal());
}

function _saveToLocal(count) {
    localStorage.setItem('counter', JSON.stringify(count));
}

function _getFromLocal() {
    return JSON.parse(localStorage.getItem('counter')) || 0;
}
