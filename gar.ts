function sayHello(name: String): String {
    return `Hello ${name}`;
}

console.log(sayHello('tegar'));

// Tipe Data Primitif
const nama: string = "Tegar Levta Anggana";
const balance: number = 100000;
const isVip: boolean = true;

console.log(nama);
console.log(balance);
console.log(isVip);

// Tipe Data Array
const names: string[] = ["gar", "bik", "rin"];
const values: number[] = [1,2,3];

console.log(names);
console.log(values);

// Read Only Array
const hobbies: ReadonlyArray<string> = ["Melukis", "Menari"];
console.log(hobbies);

// bersifat read only, gabisa ubah :
// hobbies[0] = "Berenang"; 

// Tuple
const person: readonly [string, string, number] = ["Eko", "Kurniawan", 30];

console.log(person)
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

// bersifat read only, gabisa ubah :
// person[0] = "Budi";

// Tipe Data Any
// pake kalo urgent aja
const orang: any = {
    id: 1, 
    nama: "Tegar Levta Anggana",
    age: 30
}

orang.age = 32;
orang.address = "Jalan Bunga No. 31";

console.log(orang)

// Union Type
let sample: number | string | boolean = "Eko";
sample = 100;
sample = true;

console.log(sample)

// Menggunakan Union Type
function process(value: number | string | boolean) {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value + 2;
    } else {
        return !value;
    }
}

// Type Alias
type Category = {
    id: string;
    name: string;
}

type Product = {
    id: string;
    name: string;
    price: number;
    category: Category;
}

const category: Category = {
    id: "1",
    name: "Handphone"
};

const product: Product = {
    id: "1",
    name: "Samsung S20",
    price: 2000000,
    category: category
};

console.log(category);
console.log(product);

// Type Alias untuk Union Type
type ID = string | number

type Kategori = {
    id: ID;
    name: string;
}

type Produk = {
    id: ID;
    name: string;
    price: number;
    category: Kategori
}

// Object Type
const jalmi: { id: string, name: string } = {
    id: "1",
    name: "Eko"
};

console.log(jalmi);
jalmi.id = "2";
jalmi.name = "Gar";
console.log(jalmi);

// Optional Properties
type Kategoli = {
    id: ID;
    name: string;
    description?: string;
}

type Ploduk = {
    id: ID;
    name: string;
    price: number;
    category: Kategori
}

const kategoli: Kategoli = {
    id: 123,
    name: "laptop",
    // description: "123123"
}

const pelajar: {nik: string, name: string, telp?: string} = {
    nik: "091232",
    name: "Baba",
    // telp: "091293123"
}

// Enum
enum CustomerType {
    REGULAR,
    GOLD,
    PLATINUM
}

type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}

const customer: Customer = {
    id: 1,
    name: "Ucok",
    type: CustomerType.REGULAR
}

console.log(customer);
console.log(customer.type);

// Enum sebagai string

enum TipeCustomer {
    REGULAR = 'REGULAR',
    GOLD = 2,
    PLATINUM = 'PLATINUM'
}

console.log(TipeCustomer.REGULAR);

// NULL dan undefined
function bilangHello(name?: string) {
    if (name) {
        console.log(`Hello ${name}`)
    } else {
        console.log("Hello")
    }
}

bilangHello("Eko");
const nami: string | undefined = undefined;
bilangHello(nami);

function nyariosHello(name?: string | null) {
    if (name) {
        console.log(`Hello ${name}`)
    } else {
        console.log("Hello")
    }
}

nyariosHello(null); // null bakal dianggap tipe data lain lagi.


// Interface 
interface Seller {
    id: number;
    name: string;
    address?: string;
}

const seller: Seller = {
    id: 1,
    name: "Budi"
}

console.log(seller);

// Readonly properties
interface Penjual {
    id: number;
    name: string;
    address?: string;
    readonly nib: string;
    readonly npwp: string;
}

const penjual: Penjual = {
    id: 1,
    name: "toko abc",
    nib: "123123",
    npwp: "3212312"
}

seller.name = "mamat gunshop"
// seller.nib = "33333" // kaga bisa

// Function Interface
interface AddFunction {
    (value1: number, value2: number): number
}

const add: AddFunction = (value1: number, value2: number): number => {
    return value1 + value2;
}

console.log(add(1,2));

// Indexable Interface
interface StringArray {
    [index: number]: string
}

const namiNami: StringArray = ["Eko", "Kurniawan", "Khannedy"]

console.log(namiNami[0])
console.log(namiNami[1])
console.log(namiNami[2])

interface StringDictionary {
    [key: string]: string
}

const dictionary: StringDictionary = {
    nama: "Eko",
    address: "Subang"
}

console.log(dictionary["nama"])
console.log(dictionary["address"])

// Extending Interface
interface Employee {
    id: string;
    name: string;
    division: string;
}

interface Manager extends Employee {
    numberOfEmployees: number;
}

const employee: Employee = {
    id: "1",
    name: "Eko",
    division: "IT"
}

const manager: Manager = {
    id: "2",
    name: "Kurniawan",
    division: "IT",
    numberOfEmployees: 10
}

console.log(employee)
console.log(manager)

// Function di Interface
interface Jelema {
    name: string;
    sayHello(name: string): string;
}

const jelema: Jelema = {
    name: "Eko",
    sayHello: function(name: string): string {
        return `Hello ${name}, my name is ${this.name}`
    }
}

console.log(jelema.sayHello("ganteng"))

// Intersection Types
interface HasName {
    name: string;
}

interface HasId {
    id: string;
}

type Domain = HasId & HasName;

const domain: Domain = {
    id: "1",
    name: "Eko"
}

console.log(domain)

// Type Assertions
const manusia: any = {
    name: "Eko",
    age: 30
};

const manusia2: Jelema = manusia as Jelema;
// manusia2.sayHello("Budi")
// console.log(manusia2.age)

// Function
function sayHalo(name: string): string {
    return `Hello ${name}`
}

function printHalo(name: string): void {
    console.log(`Hello ${name}`)
}

printHalo("Gar")

// Function Parameter
function bilangHalo(name: string = "Guest"): string {
    return `Hello ${name}`;
}

// Rest Parameter
function sum(...values: number[]): number {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total
}

const angka: number = sum(1,2,3,4,5)
console.log(angka)

function bilangHi(firstName: string, lastName?: string): string {

    if(lastName){
        return `Hello ${firstName} ${lastName}`
    }
    return `Hello ${firstName}`
}

console.log(bilangHi("gar", "name"))
console.log(bilangHi("gar"))

// Function Overloading
function callMe(value: number): number;
function callMe(value: string): string;
function callMe(value: any): any {
    if (typeof value === "string"){
        return value.toUpperCase();
    } else if (typeof value === "number"){
        return value * 10;
    }
}

console.log(callMe("halo"))
console.log(callMe(10))

// Function sebagai Parameter
function nyariosHalo(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`
}

function toUpper(name: string): string {
    return name.toUpperCase()
}

console.log(nyariosHalo("Gargar", toUpper))

// Anonymous Function
function nyariosDeuiHalo(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`
}

console.log(nyariosDeuiHalo("Ekoeuy", function (name: string): string {
    return name.toUpperCase()
}))

// buatan aing :
const anoni = (nama: string): void => console.log(nama)
anoni("gar")

// If Statement (sama kek js)
const examValue = 90;
if (examValue > 80) {
    console.log("good")
} else if (examValue > 60) {
    console.log("not bad")
} else {
    console.log("cobian deui")
}

// Ternary Operator (sama kek js)
const value = 80;
const say = value >= 75 ? "congratulation" : "try again"
console.log(say)

// Switch Statement (sama kek js)
function sayHao(name: string): string {
    switch (name) {
        case "Eko":
            return "Hi Eko"
        case "Budi":
            return "Hi Budi"
        default:
            return "Hello"
    }
}

console.log(sayHao("Gar"))

// For Loop (sama kek js)
const ngarans = ["Eko", "Kurniawan", "Khannedy"]
// for i
for(let i = 0; i < ngarans.length; i++){
    console.log(ngarans[i])
}
// for of
for (const ngaran of ngarans){
    console.log(ngaran)
}
// for in
for (const index in ngarans){
    console.log(ngarans[index])
}

// While Loop (sama kek js)
let counter = 0;
while (counter < 10){
    console.log(counter);
    counter++;
}

// Do while loop (sama kek js)
let konter = 0;
do {
    console.log(konter);
    konter++;
} while (konter < 10);

// Break dan Continue
let kounter = 0;
do {
    kounter++
    if (kounter == 10) {
        break;
    }
    
    if (kounter % 2 == 0) {
        continue;
    }

    console.log(kounter)
} while (true)






console.log("patung")
console.log("patung")
console.log("patung")
