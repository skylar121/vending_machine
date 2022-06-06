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

];

const drinks = document.querySelector('.drinks');

// 기본 콜라 아이템 생성
for (let i = 0; i < vendingMachine.length; i++) {
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
    const colaItemName = document.querySelectorAll('.drink_name');
    const colaItemPrice = document.querySelectorAll('.drink_price');

    colaItemName[i].textContent = vendingMachine[i].name;
    colaItemPrice[i].textContent = `${vendingMachine[i].price}원`;
}

// 금액 입력
const inputMoney = document.querySelector('.input_money');
const currentMoney = document.querySelector('.won');
const insertMoney = document.querySelector('.input');

let leftMoney = 0;
insertMoney.addEventListener('click', () => {
    if (!(inputMoney.value)) {
        alert('입금액을 입력하세요.');
    } else {
        leftMoney += parseInt(inputMoney.value);
        currentMoney.textContent = leftMoney.toLocaleString('ko-KR') + '원';        
    }    
    inputMoney.value = null;
});

// 콜라 담기
const colaItem = document.querySelectorAll('.btn_item');
const selected_drinks = document.querySelector('.selected_drinks');

for (const eachItem of colaItem) {
    eachItem.addEventListener('click', () => {
        const eachItemName = eachItem.querySelector('.drink_name').textContent;
        let 기준점 =  selected_drinks.querySelector(`.${eachItemName}`);
        if (!!(기준점)) {
            console.log('잡았다');
            let 기준점Qty = 기준점.querySelector('.selected_qty').textContent;
            기준점.querySelector('.selected_qty').textContent = parseInt(기준점Qty) + 1;
        } else {
            // 요소 추가
            const selectedColaList = document.createElement('li');
            selectedColaList.setAttribute('class', eachItemName);
            const selectedColaImg = document.createElement('img');
            selectedColaImg.setAttribute('src', `./mediaquery/${eachItemName}.png`);
            selectedColaImg.setAttribute('alt', '');
            selectedColaImg.setAttribute('class', 'img_selected_cola');
            const selectedColaName = document.createElement('span');
            selectedColaName.setAttribute('class', 'selected_cola');
            selectedColaName.textContent = eachItemName;
            const selectedColaQty = document.createElement('span');
            selectedColaQty.setAttribute('class', 'selected_qty');
            selectedColaQty.textContent = 1;
            
            selected_drinks.appendChild(selectedColaList);
            selectedColaList.appendChild(selectedColaImg);
            selectedColaList.appendChild(selectedColaName);
            selectedColaList.appendChild(selectedColaQty);
        }
});
}

// stock: 0 이라면 품절 클래스 추가


const purchased_drinks = document.querySelector('.purchased_drinks');
