// Lampa loader for Samsung Tizen.
// Based on index/tizen/loader.js from yumata/lampa-source, with lampa.mx as the main source
// and the official GitHub mirror as a fallback. Plain ES5 for the TV's old browser engine.

console.log('Start load');

var domains = ['lampa.mx', 'yumata.github.io/lampa'];
var started = false;

function createScript(src, error) {
    console.log('Load script: ' + src);

    var script     = document.createElement('script');
    script.onerror = error;
    script.src     = src;
    script.type    = 'text/javascript';

    document.getElementsByTagName('body')[0].appendChild(script);
}

function appUrl(protocol, domain) {
    return protocol + '://' + domain + '/app.min.js?v' + Math.random();
}

// Try every domain over https, then http; if all fail, use the copy saved last time.
function startApp(index) {
    if (index >= domains.length) {
        loadFromLocal();
        return;
    }

    var domain = domains[index];

    createScript(appUrl('https', domain), function () {
        console.log('https fail: ' + domain);

        createScript(appUrl('http', domain), function () {
            console.log('http fail: ' + domain);

            startApp(index + 1);
        });
    });
}

function saveToLocal(index) {
    if (index >= domains.length) return;

    var request = new XMLHttpRequest();

    request.onload = function () {
        if (this.readyState == 4 && this.status == 200 && this.responseText.length > 1000) {
            try {
                window.localStorage.setItem('app.js', this.responseText);
                console.log('Saved in storage');
            } catch (e) {
                console.log('Storage full');
            }
        } else {
            saveToLocal(index + 1);
        }
    };

    request.onerror = function () {
        saveToLocal(index + 1);
    };

    request.open('GET', appUrl('http', domains[index]));
    request.send();
}

function loadFromLocal() {
    var app = null;

    try {
        app = window.localStorage.getItem('app.js');
    } catch (e) {}

    if (app) {
        console.log('Try eval app');

        eval(app);
    } else {
        document.querySelector('.welcome').innerHTML =
            '<div style="color:#fff;font:2em sans-serif;text-align:center;padding-top:20%">' +
            'Нет связи с lampa.mx. Проверь интернет и перезапусти приложение.</div>';
    }
}

function start() {
    if (started) return;

    started = true;

    clearInterval(timerId);

    startApp(0);
    saveToLocal(0);
}

function checkConnection(url, successCb, errorCb) {
    var xhr      = new XMLHttpRequest();
    var executed = false;

    xhr.open('GET', url, true);
    xhr.timeout = 1000;

    xhr.onload = function () {
        if (executed) return;
        executed = true;

        if (xhr.status == 200) successCb && successCb(xhr);
        else errorCb && errorCb(xhr);
    };

    xhr.onerror = function () {
        if (executed) return;
        executed = true;
        errorCb && errorCb(xhr);
    };

    xhr.ontimeout = function () {
        if (executed) return;
        executed = true;
        errorCb && errorCb(xhr);
    };

    xhr.send(null);
}

// After power-on the TV's network may need a few seconds: poll for up to 15 s, then start anyway.
var timeLeft = 15;
var timerId  = setInterval(countdown, 1000);

function countdown() {
    if (started) return;

    if (timeLeft <= 0) {
        start();
    } else {
        checkConnection(appUrl('http', domains[0]), start, function () {
            console.log('No network yet');
        });
    }

    timeLeft--;
}

countdown();
