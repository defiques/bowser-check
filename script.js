const result = bowser.getParser(window.navigator.userAgent);
console.log(result.getBrowser());

const validBrowser = result.satisfies({
    firefox: '>5.0',
    safari: '>6.0.4',
    'internet explorer': '>10',
    'andorid browser': '>4.3'
})

console.log(validBrowser)