import { Singleton } from "./singleton";

const firstInstance = Singleton.getInstance();
const secondInstance = Singleton.getInstance();

console.log(firstInstance === secondInstance);
