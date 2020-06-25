const longestPalindrome = (s) => {
    if (s === s.split('').reverse().join('')) return s.length;

    let charArray = [],
        countArray = [];

    let currentWord = s[0];
    let count = 1;
    let sLength = s.length + 1;

    //tekrar eden dizi oluşturuluyor
    for (let i = 1; i < sLength; i++) {
        if (s[i] === s[i - 1]) {
            //sayıyı ve karakteri artırarak devam edicek
            count++;
            currentWord += s[i];
        } else { //farklı karakter bulunursa
            //karakteri kaydedecek ve sayıcak
            countArray.push(count);
            charArray.push(currentWord);

            //sıfırlayacak ve tekrardan saymaya başlayacak
            currentWord = s[i];
            count = 1;
        }
    }

    let head = 0;
    let tail = 0;
    let maxWord = '';
    let charLength = charArray.length;
    //tekrarlanan karakterleri kontrol etmek için dizi boyunca ilerleyecek
    for (let k = 0; k < charLength; k++) {
        currentWord = charArray[k];
        tail = head + countArray[k] - 1;
        let steps = sLength - countArray[k]; //tekrarlanan karakterlerin atılması gereken adım sayısı
        for (let l = 1; l < steps; l++) {
            if (s[head - l] === s[tail + l]) {
                currentWord = s[head - l] + currentWord + s[tail + l];
            } else {
                //durumlar kontrol edilicek
                maxWord = maxWord.length < currentWord.length ? currentWord : maxWord;
                head = tail + 1;
                break;
            }
        }
    }
    return maxWord.length;
}