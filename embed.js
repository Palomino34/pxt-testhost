(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-brainpadpulse/",
    "verprefix": "",
    "workerjs": "/pxt-brainpadpulse/worker.js",
    "monacoworkerjs": "/pxt-brainpadpulse/monacoworker.js",
    "pxtVersion": "4.3.1",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt-brainpadpulse/",
    "commitCdnUrl": "/pxt-brainpadpulse/",
    "blobCdnUrl": "/pxt-brainpadpulse/",
    "cdnUrl": "/pxt-brainpadpulse/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "brainpad",
    "simUrl": "/pxt-brainpadpulse/simulator.html",
    "partsUrl": "/pxt-brainpadpulse/siminstructions.html",
    "runUrl": "/pxt-brainpadpulse/run.html",
    "docsUrl": "/pxt-brainpadpulse/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-brainpadpulse/highlight.js/highlight.pack.js",
        "/pxt-brainpadpulse/bluebird.min.js",
        "/pxt-brainpadpulse/semantic.js",
        "/pxt-brainpadpulse/marked/marked.min.js",
        "/pxt-brainpadpulse/target.js",
        "/pxt-brainpadpulse/pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-brainpadpulse/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
