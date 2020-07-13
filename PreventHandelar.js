window.foo='secret code';
let form = document.getElementById('user-form');
form.addEventListener('submit',event=>{
    let user = form.elements['user'];
    let avatarfile = form.elements['avatar-file'];

    console.log("data values" +user.value,avatarfile.value);
    let posting={
        user:user.value,
        avatarfile:avatarfile.value
    };
    
    let promise=$.post("https://jsonplaceholder.typicode.com/users",posting );
    promise.then(
        data=>console.log("success", data),
        error=>console.log("error" , error)
    );
    
    setInterval(promise.then(data=>console.log("success", data)), 3000);
    event.preventDefault();
});


$("#user-form").submit(function(){
    setTimeout(function(){form.reset()}, 1000);
});
//javascript obfuscator
//var _0xddd3=['#user-form'];(function(_0x2f9db0,_0xddd319){var _0xfa2131=function(_0xc4da70){while(--_0xc4da70){_0x2f9db0['push'](_0x2f9db0['shift']());}};_0xfa2131(++_0xddd319);}(_0xddd3,0x12c));var _0xfa21=function(_0x2f9db0,_0xddd319){_0x2f9db0=_0x2f9db0-0x0;var _0xfa2131=_0xddd3[_0x2f9db0];return _0xfa2131;};$(_0xfa21('0x0'))['submit'](function(){setTimeout(function(){form['reset']();},0x3e8);});