class OlahStrings {

    palindrome(data){
        const len = data.length
        let hasil = true
        for (let index = 0; index < len/2; index++) {
            if (data[index] !== data[len - 1 - index]) {
                hasil = false
                break
            }
        }
        console.log(hasil);
    }
    
    ubahKapital(data){
        let hasil = data[0].toUpperCase()
        hasil += data.substring(1)
        console.log(hasil);
    }
    
}
const OlahString = new OlahStrings()
OlahString.palindrome('katak') // Output: true
OlahString.palindrome('sanbers') // Output: false
OlahString.ubahKapital('asep') // Output : Asep
OlahString.ubahKapital('abduh') // Output: Abduh