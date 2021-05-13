/********* Arrow function *********/

function sayHello(name = 'nicolas') {
    //default 값을 넣을 수 있게 됐음
    return 'hello' + name;
}

const sayHello = (name) => 'hello' + name;
// => 에는 return을 한다는게 함축적으로 표현돼있음
// {}를 치면 return 사용줘야함 중괄호는 어딘가에서 return을 사용하겠다는 것을 뜻함
// Argument가 하나라면 괄호를 할 필요가 없지만 2개 이상이라면 필요함

/********* Object Destructuring *********/

const human = {
    name: 'Nico',
    lastName: 'Serrano',
    nationality: 'Wish i was korean',
    favFood: {
        breakfast: 'Sang',
        lunch: 'Doncas',
        dinner: 'Sang + Doncas',
    },
};

// const name = human.name;
// const lastName = human.lastName;
// const difName = human.nationality;

const {
    name,
    lastName,
    nationality: difName,
    favFood: { dinner, breakfast, lunch },
} = human;

/********* Spread Operator *********/
const days = ['Mon', 'Tues', 'Wed'];
const otherDays = ['Thu', 'Fri', 'Sat'];

//const allDays = days + otherDays; // 더 이상 배열이 아닌 string로 보여줌

const allDays = [...days, ...otherDays, 'Sun'];
//Spread Operator 는 배열로부터 아이템을 가져와서 Unpack 함 , 안에 있는 아이템을 전달하고 실제 배열은 전달하지 않습니다.

const ob = {
    first: 'hi',
    second: 'hello',
};

const ab = {
    thrid: 'bye bye',
};

const two = { ...ob, ...ab };

/********* Classes *********/
class Human {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

class Baby extends Human {
    cry() {
        console.log('Waaaaaa');
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

const myBaby = new Baby('mini', 'me');
mnBaby.cry();
