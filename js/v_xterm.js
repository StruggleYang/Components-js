
var term = new Terminal({
    useStyle: true,
    convertEol: true,
    screenKeys: false,
    cursorBlink: false,
    visualBell: false,
    colors: Terminal.xtermColors
});
term.open(document.getElementById('terminal'));
setInterval(function () {
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ \r\n')
}, 1000);