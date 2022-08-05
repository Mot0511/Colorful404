let j = 0
let jst
let password = '237283892357082370495029380495234590'
let myPassword = ''
for (let i = 0; i < password.length; i++) {
    j = 0
    while (true) {
        jst = String(j)
        if (password[i] === jst) {
            myPassword += jst
            break
        }
        j++
    }
    console.log(myPassword)

}
