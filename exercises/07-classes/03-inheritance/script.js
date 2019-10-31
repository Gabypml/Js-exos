/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

document.getElementById('run').addEventListener('click', function(){
    class Animal {
        constructor(name){
            this.name = name; 
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Chien extends Animal{ //Sous-classe de Animal

    }

    class Chat extends Animal{

    }
    
   let medor = new Chien('medor'); //Le chien s'appelle médor
   Chien.greeting = 'Waf';  //Cri du chien=waf
   console.log(medor.name); 
   console.log(medor.sayHello()); 

   let felix = new Chat("Felix");
   Chat.greeting = "Miaou";
   console.log(felix.name);
   console.log(felix.sayHello());
})
})();
