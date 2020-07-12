let form = document.getElementById('user-form');
form.addEventListener('submit',event=>{
    let user = form.elements['user'];
    let avatarfile = form.elements['avatar-file'];

    console.log("data" +user.value,avatarfile.value);
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