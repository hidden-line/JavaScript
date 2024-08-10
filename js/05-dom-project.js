function subscribe() {
    const subscribeElement = document.querySelector('.js-subscribe');

    if (subscribeElement.innerText === 'Subscribe') {
        subscribeElement.innerHTML = 'Unsubscribe';
        subscribeElement.classList.add('is-subscribed');
    } else {
        subscribeElement.innerHTML = 'Subscribe';
        subscribeElement.classList.remove('is-subscribed');
    }
}

function isHitEnter(event) {
    if (event.key === 'Enter') {
        calculateCost();
    }
}

function calculateCost() {
    const costElement = document.querySelector('.js-cost-input');
    let cost = Number(costElement.value);
    
    if (cost <= 40) {
        cost += 10;
    }

    const totalCostElement = document.querySelector('.js-total-cost');
    totalCostElement.innerHTML = `$${cost}`;
}
