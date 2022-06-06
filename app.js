const vendingMachine = [
    {
        name: 'Original_Cola',
        price: 1000,
        stock: 10,
    },
    {
        name: 'Violet_Cola',
        price: 1000,
        stock: 10,
    },
    {
        name: 'Yellow_Cola',
        price: 1000,
        stock: 10,
    },
    {
        name: 'Cool_Cola',
        price: 1000,
        stock: 10,
    },
    {
        name: 'Green_Cola',
        price: 1000,
        stock: 10,
    },
    {
        name: 'Orange_Cola',
        price: 1000,
        stock: 10,
    },

]

const drinks = document.querySelector('.drinks');

// 아이템 Node 생성
for (let i = 0; i <= vendingMachine.length; i++) {
    const colaList = document.createElement('li');
    const colaBtn = document.createElement('button');
    colaBtn.setAttribute('class', 'btn_item');
    const colaImg = document.createElement('img');
    colaImg.setAttribute('src', `./mediaquery/${vendingMachine[i].name}.png`);
    colaImg.setAttribute('alt', '');
    colaImg.setAttribute('class', 'img_item');
    const colaName = document.createElement('strong');
    colaName.setAttribute('class', 'drink_name');
    const colaPrice = document.createElement('span');
    colaPrice.setAttribute('class', 'drink_price');

    drinks.appendChild(colaList);
    colaList.appendChild(colaBtn);
    colaBtn.appendChild(colaImg);
    colaBtn.appendChild(colaName);
    colaBtn.appendChild(colaPrice);

    // 콜라 이름, 가격 꽂아주기
    const colaItem = document.querySelectorAll('.btn_item');
    const colaItemName = document.querySelectorAll('.drink_name');
    const colaItemPrice = document.querySelectorAll('.drink_price');

    colaItemName[i].textContent = `${vendingMachine[i].name}`;
    colaItemPrice[i].textContent = `${vendingMachine[i].price}원`;
}


colaItem.forEach(element => {
    addEventListener('click', () => {

    })
});

// stock: 0 이라면 품절 클래스 추가