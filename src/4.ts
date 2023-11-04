class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature() {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey() {
      return this.key;
    }
  }
  
  abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person) {
      if (this.door) {
        this.tenants.push(person);
        console.log(`${person.getKey().getSignature()} entered the house.`);
      } else {
        console.log('The door is closed. Cannot enter.');
      }
    }
  }
  
  class MyHouse extends House {
    openDoor(key: Key) {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is now open.');
      } else {
        console.log('Invalid key. Cannot open the door.');
      }
    }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);