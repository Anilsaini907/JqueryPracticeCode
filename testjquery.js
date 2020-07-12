import $ from 'jquery';

let promise = $.get("https://jsonplaceholder.typicode.com/posts");
promise.then(
data=> console.log("succes", data),
error=>console.log("error", error)
);