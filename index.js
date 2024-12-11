// Masala1
// function salomlashish(ism) {
//   console.log("Salom,", ism);
// }
// salomlashish("Ezoza");

// masala2
// const hisoblash = function (oylik) {
//   let foiz = oylik * (12 / 100);
//   let qoldiq = oylik - foiz;
//   console.log("12% soliq: " + foiz);
//   console.log("Qolgan oylik: " + qoldiq);
// };
// hisoblash(90000);

// masala3
// function kopaytirish(x, y) {
//   return x * y;
// }

// let son1 = +prompt("Birinchi raqamni kiriting: ");
// let son2 = +prompt("Ikkinchi raqamni kiriting: ");

// let natija = kopaytirish(son1, son2);
// console.log("Natija: ", natija);

// masala4
// const somga = (dollor, kurs = 12800) => dollor * kurs;

// let javob = somga(95);
// console.log("Javob: " + javob, "som bo'ladi");

// somga();

// masala5
// const dollorga = (som, kurs = 12800) => som / kurs;

// let javob = dollorga(1100000);
// console.log("Javob: " + javob, "$ bo'ladi");

// dollorga();

// masala6
// const masofaHisobla = function (tezlik, vaqt) {
//   return tezlik * vaqt;
// };

// let masofa = masofaHisobla(60, 2);
// console.log("Bosib o'tilgan masofa: " + masofa);

// masala7
// function uzunlik(matn) {
//   return matn.length;
// }
// let javob = uzunlik("Masalalar qiyin!");
// console.log("Matn uzunligi: ", javob);

// masala8
// function fibonacci(n) {
//   let a = 0,
//     b = 1,
//     c;

//   for (let i = 0; i <= n; i++) {
//     if (i == 0 || i == 1) console.log(i);
//     else {
//       c = a + b;
//       console.log(c);
//       a = b;
//       b = c;
//     }
//   }
//   return c;
// }
// let natija = fibonacci(10);
// console.log("Fibanacci son: ", natija);

// masala9

// const palindrommi = function (matn) {
//   let uzunlik = matn.length;

//   for (let i = 0; i < uzunlik / 2; i++) {
//     if (matn[i] !== matn[uzunlik - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(palindrommi("anilina"));
// console.log(palindrommi("salom"));

// masala10

// function yoshniHisobla(tugilganYil, hozirgiYil) {
//   return hozirgiYil - tugilganYil;
// }

// let yil1 = +prompt("Tugilgan yilingizni kiriting: ");
// let yil2 = +prompt("Hozirgi yilni kiriting: ");

// let yosh = yoshniHisobla(yil1, yil2);
// console.log("Sizning yshingiz: ", yosh);

// masala11

// const harfSoni = (satr, harf) => {
//   let soni = 0;

//   for (let i = 0; i < satr.length; i++) {
//     if (satr[i].toUpperCase() === harf.toUpperCase()) {
//       soni++;
//     }
//   }

//   return soni;
// };

// console.log(harfSoni("Muhammadova", "m"));

// masala12

// function factorial(n) {
//   let kopayuvchi = 1;
//   for (let i = 1; i <= n; i++) {
//     kopayuvchi *= i;
//   }
//   return kopayuvchi;
// }

// let natija = factorial(5);
// console.log(natija);

// masala13

// const teskariRaqam = function (son) {
//   let s = 0;

//   while (son > 0) {
//     s = s * 10 + (son % 10);
//     son = Math.floor(son / 10);
//   }
//   return s;
// };
// console.log(teskariRaqam(12345));

// masala14

// function toqRaqam(n) {
//   while (n > 0) {
//     let s = n % 10;
//     if (s % 2 !== 0) {
//       return true;
//     }
//     n = Math.floor(n / 10);
//   }
//   return false;
// }

// console.log(toqRaqam(2842));
// console.log(toqRaqam(1397));

// masala15

// function RaqamYegSon(n) {
//   let yegindi = 0;
//   let soni = 0;
//   while (n > 0) {
//     let s = n % 10;
//     yegindi += s;
//     soni++;
//     n = Math.floor(n / 10);
//   }
//   return { yegindi, soni };
// }
// let javob = RaqamYegSon(12345);
// console.log("Raqamlar yegindisi: ", +javob.yegindi);
// console.log("Raqamlar yegindisi: ", +javob.soni);

// masala16
// function Uchdarajasimi(n) {
//   let d = 1;

//   while (d <= n) {
//     console.log("Daraja = ", d);
//     if (d === n) {
//       return true;
//     }
//     d = d * 3;
//   }
//   return false;
// }
// if (Uchdarajasimi(9)) {
//   console.log("3 ni darajasi");
// } else {
//   console.log("3 ni darajasi emas");
// }

// masala17

// function KvadratYeg(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i * i;
//   }
//   return sum;
// }

// let yegindisi = KvadratYeg(4, 9);
// console.log("Kvadratlar yegindisi: ", +yegindisi);

// masala18

// function yigindi(n) {
//   let s = 0;

//   for (let i = n; i <= 2 * n; i++) {
//     s += i ** 2;
//   }
//   return s;
// }

// let n = 2;
// let natija = yigindi(n);
// console.log("Yig'indi: " + natija);

// masala19
// function tubmi(n) {
//   if (n <= 1) return false;

//   let i = 2;

//   while (i <= Math.sqrt(n)) {
//     if (n % i === 0) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// }

// let n = 7;
// if (tubmi(n)) {
//   console.log(n + " soni tub son");
// } else {
//   console.log(n + " soni tub son emas");
// }

// masala20
// function narxHisobla(konfetNarxi) {
//   for (let i = 12; i <= 20; i += 2) {
//     let kg = i / 10;
//     let narx = kg * konfetNarxi;
//     let YaxNarx = Math.floor(narx);
//     console.log(kg + " kg konfet narxi: " + YaxNarx + " so'm");
//   }
// }

// narxHisobla(10000);
