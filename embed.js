(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/foo/",
    "verprefix": "",
    "workerjs": "/foo/worker.js",
    "monacoworkerjs": "/foo/monacoworker.js",
    "pxtVersion": "4.3.1",
    "pxtRelId": "",
    "pxtCdnUrl": "/foo/",
    "commitCdnUrl": "/foo/",
    "blobCdnUrl": "/foo/",
    "cdnUrl": "/foo/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "brainpad",
    "simUrl": "/foo/simulator.html",
    "partsUrl": "/foo/siminstructions.html",
    "runUrl": "/foo/run.html",
    "docsUrl": "/foo/docs.html",
    "isStatic": true
};

    var scripts = [
        "/foo/highlight.js/highlight.pack.js",
        "/foo/bluebird.min.js",
        "/foo/semantic.js",
        "/foo/marked/marked.min.js",
        "/foo/target.js",
        "/foo/pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/foo/jquery.js")

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
