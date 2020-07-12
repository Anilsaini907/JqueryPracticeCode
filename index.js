
import JQueryclass from './jquerytest.js'

let url="https://jsonplaceholder.typicode.com/posts";

let jQueryclass = new JQueryclass(url);
console.log(jQueryclass.requesttext)
jQueryclass.executeRequest();