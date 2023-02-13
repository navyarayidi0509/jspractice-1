function v(e) {
    const r =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (r.test(e)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}
v('abc123@gmail.com');
v('hello@com');
