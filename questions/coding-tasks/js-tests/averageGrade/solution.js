const students = [
    {
        name: 'MaryAnn',
        results: [
            {id: '345', score: '56'},
            {id: '478', score:'69.4'},
            {id: '00345', score: '8.9'},
            {id: '312334', score: '99.3'}
        ]
    },
    {
        name: 'Peter',
        results: [
            {id: '345', score: '56.1'},
            {id: '478', score:'64'},
            {id: '00345', score: '80'},
            {id: '312334', score: '16'}
        ]
    },
    {
        name: 'Joseph',
        results: [
            {id: '345', score: '37'},
            {id: '478', score:'98.23'},
            {id: '00345', score: '21'},
            {id: '312334', score: '57.43'}
        ]
    },
];

// min, max, average in obj

function findResult(name) {
    let scores = students.find(student => student.name === name).results.map(item => parseFloat(item.score), 2);
    const obj = {};
    obj.min = Math.min(...scores).toFixed(2);
    obj.max = Math.max(...scores).toFixed(2);
    obj.average = (scores.reduce((acc, num) => acc + num, 0) / scores.length).toFixed(2);
    return obj;
}

console.log(findResult('MaryAnn'));