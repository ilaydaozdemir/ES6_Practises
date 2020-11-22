//üstüne yazar
const data = { name: 'ilayda' };
const data1 = { surname: 'özdemir', age: 25 };
const data2 = { age: 45 };

const result = Object.assign(data, data1);
console.log(result);

const result1 = Object.assign(data, data1, data2);
console.log(result1);
