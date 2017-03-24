var woot = (function () {
    function woot(name) {
        this.name = name;
    }
    woot.prototype.sayHello = function () {
        var msg = document.createElement('p');
        msg.innerHTML = 'Hello, ' + this.name;
        msg.id = 'hipee';
        document.body.appendChild(msg);
    };
    return woot;
}());
var w = new woot('levi');
w.sayHello();
