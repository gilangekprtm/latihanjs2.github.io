// IF ELSE
let num = 0

if (num <= 10) {
    console.log("Angka Kurang dari 10")
} else {
    console.log("Angka lebih dari 10")
}

// WHILE
let angka = 0

while (angka <= 10) {
    console.log(angka)
    angka++
}

// FOR
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// BREAK CONTINUE
for (let workHours = 0; workHours <= 8; workHours++) {
    if (workHours < 8){
        console.log(`Saya bekerja selama ${workHours} jam`)
        continue;
    }
    console.log('Lanjut Kerja')
}