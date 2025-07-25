//1. Remove Discontinued Products

//To remove the discontinued products from the array, we can use the splice method.

let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2, 2);
console.log(products); // Output: ['Laptop', 'Mobile', 'Watch']

//2. Add New Students in Between

//To add new students to the class list, we can use the splice method again.

let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1, 0, 'Nina', 'Omar');
console.log(students); // Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

//3. Extract Top Performers

//To extract the top 3 performing students, we can use the slice method.

let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let topPerformers = scores.slice(0, 3);
console.log(topPerformers); // Output: ['Zainab', 'Ali', 'Farhan']


//4. Show Last 2 Days’ Sales

//To get the sales of the last 2 days, we can use the slice method with a negative index.

let sales = [220, 300, 280, 150, 400, 390, 310];
let lastTwoDaysSales = sales.slice(-2);
console.log(lastTwoDaysSales); // Output: [390, 310]


//5. Get All Users Who Are Active

//To get the active users, we can use the filter method.

let users = [{name: 'Ahmed', active: true}, 
    {name: 'Mira', active: false}, 
    {name: 'John', active: true}];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers); // Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]


//6. Block Short Phone Numbers

//To filter out short phone numbers, we can use the filter method.

let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validPhoneNumbers = phoneNumbers.filter(phoneNumber => phoneNumber.length >= 10);
console.log(validPhoneNumbers); // Output: ['1234567890', '9876543210']


//7. Convert Price to With Tax

//To add tax to the prices, we can use the map method.

let prices = [100, 200, 300];
let pricesWithTax = prices.map(price => price * 1.18);
console.log(pricesWithTax); // Output: [118, 236, 354]


//8. Append “.com” to Website Names

//To append ".com" to the website names, we can use the map method.

let sites = ['google', 'amazon', 'microsoft'];
let domains = sites.map(site => site + '.com');
console.log(domains); // Output: ['google.com', 'amazon.com', 'microsoft.com']

//9. Calculate Total Cart Price

//To calculate the total cart price, we can use the reduce method.

let cart = [499, 1299, 299, 799];
let totalPrice = cart.reduce((total, price) => total + price, 0);
console.log(totalPrice); // Output: 2896


//10. Count Frequency of Votes

//To count the frequency of votes, we can use the reduce method.

let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCounts = votes.reduce((counts, vote) => {
  counts[vote] = (counts[vote] || 0) + 1;
  return counts;
}, {});
console.log(voteCounts); // Output: { A: 3, B: 2, C: 1 }
