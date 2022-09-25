class OlahString {

    palindrome(param) {
        const len = param.length
        let result = true

        for (let index = 0; index < len / 2; index++) {

            if (param[index] !== param[len - 1 - index]) {
                result = false
                break
            }
        }
        console.log(result);
    }

    ubahKapital(param) {
        let result = param[0].toUpperCase()
        result += param.substring(1)

        console.log(result);
    }
}

const olah = new OlahString()

olah.palindrome('katak') // Output: true
olah.palindrome('sanbers') // Output: false
olah.ubahKapital('asep') // Output : Asep
olah.ubahKapital('abduh') // Output: Abduh