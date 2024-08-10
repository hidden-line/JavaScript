const sizeList = ['s', 'm', 'l', 'xl', 'xxl'];

sizeList.forEach(size => {
    document.querySelector(`.js-${size}-size`).addEventListener('click', () => {
        productSize(size);
    });
});

document.querySelector('.js-submit-btn').addEventListener('click', () => {
    submitSize();
});

let $size = '';

function productSize(_size) {
    $size = _size;
    _removePreviousSelection();

    const sizeElement = document.querySelector(`.js-${_size}-size`);
    sizeElement.classList.add('is-selected');
}

function submitSize() {
    const sizeElement = document.querySelector('.js-selected-size');
    sizeElement.innerHTML = $size === '' ? 'Please select size!' : `Selected Size: ${$size.toUpperCase()}`;
}

function _removePreviousSelection() {
    sizeList.forEach(_size => {
        const sizeElement = document.querySelector(`.js-${_size}-size`);

        if (sizeElement.classList.contains('is-selected')) {
            sizeElement.classList.remove('is-selected');
        }
    });

    document.querySelector('.js-selected-size').innerHTML = '';
}