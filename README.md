[![NPM](https://nodei.co/npm/notifico.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/notifico/)

# Notifico
[Notifico](http://n.tkte.ch/) Reports Events to IRC Channel

Example Shorten:

First run ```npm install notifico``` to install the Notifico package to your system.

Now on [Notifico](http://n.tkte.ch/), create a Plain Text Webhook and use it in place of the demo URL below

```javascript
var Notifico = require('notifico');

Notifico.report('http://n.tkte.ch/h/4263/qj8OcI8YQI7eJ7dcShH-Hcat', 'Hello World!', function(res) {
	if (res == 'success') {
		// The bot should have said 'Hello World!' in the IRC channel
	}
});
```

[This Package Is Under The GPL-3.0 License](https://raw.githubusercontent.com/AlphaT3ch/Notifico-npm/master/LICENSE.txt)
