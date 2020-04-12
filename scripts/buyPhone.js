// Напишите программу для вычисления общей стоимости покупки телефона. Вы будете продолжать покупать телефоны (подсказка: циклы!), 
// пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов до тех пор, пока сумма покупки не превысит ваш мысленный предел трат.
//
// После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
//
// Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
//
// Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара» и «предела трат», также как и переменную для вашего «баланса банковского счета».
//
// Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.

function buyPhone() {
    const BANK_BALANCE = 764;
    const ACCESORY_PRICE = 9.99;
    const TAX = 0.09;
    const PHONE_PRICE = 49.5;
    const tresh = 150;
    let counter = 0;

    function calculateTax() {
        return counter * TAX;
    }
    function showCounter() {
        return console.log(counter.toFixed(2));
    }

    while (counter < BANK_BALANCE) {
        counter += PHONE_PRICE;
        showCounter()
        if (counter < tresh) {
            counter += ACCESORY_PRICE;
            showCounter()
        } else {
            console.log("i`ve spend a lot, thanks!");
        }
    }
    
    counter += calculateTax(counter);
    showCounter();

    if (counter > BANK_BALANCE) {
        console.log("You cant buy it!");
    }
    
    return "gratz! you bought " + (counter / PHONE_PRICE ).toFixed(0) + "phones"
}
// console.log(buyPhone());