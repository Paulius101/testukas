const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi

// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki

// Isspausdinti mokinio varda, jei jis turi pazymi 8

// Isspausdinti mokinio varda, jei jis neturi pazymio 7

let lowest = [];
for (let i = 0; i < data.length; i++) {
    if (Math.min(...data[i++].marks) <= Math.min(...data[i].marks)) {
        lowest.push(data[--i].name + ' ' + Math.min(...data[i++].marks));
    }
}
console.log(lowest);

let highest = [];
for (let u = 0; u < data.length; u++) {
    if (Math.max(...data[u++].marks) >= Math.max(...data[u].marks)) {
        highest.push(data[--u].name + ' ' + Math.max(...data[u++].marks));
    }
}
console.log(highest);

