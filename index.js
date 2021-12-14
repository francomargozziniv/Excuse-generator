let who = ['The dog','My grandma','His turtle','My bird'];  // 4 //
let action = ['ate','peed','crushed','broke']; // 4 //
let what = ['my homework', 'the keys', 'the car']; // 3 //
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying']; // 5 //

let whoRandom = who[Math.floor((Math.random() * (who.length - 0) + 0))]
let actionRandom = action[Math.floor((Math.random() * (action.length - 0) + 0))]
let whatRandom =  what[Math.floor((Math.random() * (what.length - 0) + 0))]
let whenRandom = when[Math.floor((Math.random() * (when.length - 0) + 0))]


console.log(whoRandom, actionRandom, whatRandom, whenRandom)