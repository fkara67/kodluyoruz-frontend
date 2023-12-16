console.log(Boolean(null));
console.log('Hello World');

console.log(Boolean(false));

console.log(Boolean(NaN));

console.log(Boolean(undefined));

console.log(typeof(typeof("11")));

let num = "11.3px";
console.log(Number(num));
console.log(typeof(Number(num)));

let num2 = "11px";
console.log(Number(num2));
console.log(typeof(Number(num2)));

let username = "fatih";
const DOMAIN = "secforeveryone.com";

let email = username + "@" + DOMAIN;

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email);

let info = `
Merhaba ${username} sitemize hoşgeldin...
mail adresin: ${email}
mail uzunluğu: ${email.length}
borcunuz: ${(3+2)*10}
kısa isminiz: ${username[0]}.
`
console.log(info);

console.log(email.search("sec"));
console.log(email.indexOf("sec"));
console.log(email.slice(0,5));
console.log(email.slice(6));

email = email.replace('secforeveryone.com', "kodluyoruz.org");
console.log(email);

console.log( email.includes("org") );
console.log(email.includes("orgs"));

console.log(email.endsWith("@"));
console.log(email.endsWith("org"))

console.log(email.startsWith("f"));
console.log(email.startsWith("k"));

firstName = "FIRST"
lastName = "LAST"
let fullName = `
${firstName [0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].
toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName);

let fullName1 = prompt("Lutfen Adinizi Giriniz: ")
console.log(fullName1)
let greeting = document.querySelector("#greeting")
console.log(greeting.innerHTML)
greeting.innerHTML = `${greeting.innerHTML} 123 <small style="color:red">${fullName1}</small>`

let lastChild = document.querySelector("ul#list>li:last-child")
console.log(lastChild.innerHTML)
lastChild.innerHTML = "son öge değişti"

let firstChild = document.querySelector("ul#list>li:first-child")
console.log(firstChild.innerHTML)
firstChild.innerHTML = "ilk öge de değişti"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Sonradan oluşturulan öge"

//ulDOM.append(liDOM)  en sona ekler
ulDOM.prepend(liDOM)

let username2 = prompt("Kullanıcı adınızı giriniz:");

if(username2) {
    console.log(`Kullanıcı Bilginiz ${username2}`);
}
else {
    console.log("Bilgi yok!!!");
}