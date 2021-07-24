/* caracteristicas es9 */
/* ------ spread operator */
const obj = {
    name: 'mauricio',
    age: 38,
    country: 'CO'
};

let { country, ...all } = obj;
console.log(all )

/* ------ tambien se puede usar para propagarse en otro obj ejemplo: */
const obj1 = {
    name: 'mauricio',
    age: 38,
};

const obj2 = {
    ...obj1,
    country: 'CO'
};
console.log(obj2)

/* -----finally en la promise */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => resolve('Helo World'), 3000): reject(new Error('Test Error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))

/* agrupar bloques regex */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)


