function isprime(n) {
    if (n <= 1) {
        return false
    }
    for (i = 2; i < n; i++)
        if (n % i == 0) {
            return false
        } else {
            return true
        }

}
isprime(3) ?
    ?
    console.log("true");: console.log("false")