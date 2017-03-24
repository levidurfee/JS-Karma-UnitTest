class woot {
	public name;
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		var msg = document.createElement('p');
		msg.innerHTML = 'Hello, ' + this.name;
		msg.id = 'hipee';
		document.body.appendChild(msg);
	}
}

let w = new woot('levi');
w.sayHello();
