module.exports = function toReadable (number) {
    let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let r = '';

    if (number == 0) {
        r = 'zero'
        return r;
    }
    else if (number < 20) {
        r = a[number];
        return r;
    }
    else if (number >= 20 && number <100) {
        r = b[Math.trunc(number/10)];
        if (number%10 > 0) {
           r += ' ' + toReadable(number%10); 
        } 
    }
    else if (number >= 100) {
        r = a[Math.trunc(number/100)] + ' hundred';
        if  (number%100 > 0) {
            r += ' ' + toReadable(number%100); 
        }
    }

    return r;
     
}
