    // Ekran (input) elementini tanlab olamiz
let screen = document.querySelector('.input-text');

// Tugma bosilganda qiymatni ekranga yozish
function addValue(val) {
    // Agar ekrandagi belgilar soni 10 tadan kam bo'lsagina yangi raqam qo'shadi
    if (screen.value.length < 10) {
        screen.value += val;
    }
}
// Ekranini tozalash (C tugmasi)
function clearScreen() {
    screen.value = "";
}

// Hisoblash (= tugmasi)
function calculate() {
    try {
        // eval() funksiyasi satr ichidagi matematikani hisoblaydi
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = "";
    }
}
// Oxirgi belgini o'chirish (Del tugmasi)
// Oxirgi belgini o'chirish (Del tugmasi)
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

// MANA SHU FUNKSIYA SIZDA YO'Q EDI:
function changeSign() {
    if (screen.value !== "") {
        // Agar birinchi belgi minus bo'lsa, uni olib tashlaydi
        if (screen.value.startsWith('-')) {
            screen.value = screen.value.substring(1);
        } else {
            // Agar minus bo'lmasa, boshiga minus qo'shadi
            screen.value = '-' + screen.value;
        }
    }
}
