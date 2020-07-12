//import $ from 'jquery';
var $ = require( "jquery" );

class JQueryclass {
    constructor(url){
        this.url=url;
    }
executeRequest(){
let promise = $.getJSON(this.url);
promise.then(
data=> console.log("succes", data),
error=>console.log("error", error)
);
}
}
export default JQueryclass;