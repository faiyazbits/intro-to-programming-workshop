
/*
    The idea of these code snippets is to reinforce the explained 
    concepts in the session

    each log statement should be asked to trainees one at a time
*/

// 1.
const a = [1,3,5,2,7,8,4,10,6,9];
const position = 4;
console.log(a[6]); // 4
console.log(a[11]);
console.log(a[a.length]);
console.log(a[a.length - 1]);
console.log(a[a.length - 3]);
console.log(a[position]);
console.log(a[position - 1]);

// 2.
const company = {
    name : 'provility',
    noOfEmployess: 20,
    owner:'ashraf',
    services: ['mobile app' ,'web app'],
    companyInfo:'name',
    companyAttributes: ['noOfEmployess','owner']
}

console.log(company.name);
console.log(company.noOfEmployess);
console.log(company['name']);

company.name = "mathdisk"
console.log(company['name']);

console.log(company[company.companyInfo]);

company[company.companyInfo] = "mathdisk"
console.log(company['name']);

console.log(company[company.companyAttributes[1]]);
console.log(company[company.companyAttributes[0]]);


//3.

const bird = {
    size: 'small',
};
  
const mouse = {
    name: 'Mickey',
    small: true,
};

console.log(mouse[bird.size]);
console.log(mouse[bird['size']]);


//4.

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
