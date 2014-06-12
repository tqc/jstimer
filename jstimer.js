jstimer = (function() {
    var timers = {};


    function start(key) {
        var t = timers[key] = timers[key] || {
            key: key,
            count: 0,
            average: 0,
            total: 0
        }
        t.startTime = new Date().getTime();
        t.endTime = undefined;
        return t;
    }

    function finish(key) {
        var t = timers[key];
        if (!t) return;
        t.count++;
        t.endTime = new Date().getTime();
        t.last = t.endTime - t.startTime;
        t.total += t.last;
        t.average = t.total / t.count;

        if (t.max === undefined || t.max < t.last) t.max = t.last;
        if (t.min === undefined || t.min > t.last) t.min = t.last;

        return t;
    }

    return {
        start: start,
        finish: finish,
        timers: timers
    };
})();