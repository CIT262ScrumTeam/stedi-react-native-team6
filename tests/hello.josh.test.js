import sayHello from '../utils/hello.josh.js';
import assert from 'assert';

it("Test Hello Worlld", ()=> {
    const hello = sayHello();

    assert.equal(hello, "Hello Josh");

})