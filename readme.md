#JS Timer

A simple timer for tracking js app performance. 

## Install

    bower install jstimer

    <script src="bower_components/jstimer/jstimer.js"></script>

## Usage

    if (window.jstimer) window.jstimer.start("key");

    if (window.jstimer) window.jstimer.finish("key");

Then, get the results:

    jstimer.timers

    {
        "key": {
            "key": "key",
            "count": 2,
            "average": 3680,
            "total": 7360,
            "startTime": 1402535966169,
            "endTime": 1402535967305,
            "last": 1136,
            "max": 6224,
            "min": 1136
        }
    }    
