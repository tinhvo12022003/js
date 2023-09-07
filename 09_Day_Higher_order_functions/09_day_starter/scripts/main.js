const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = (element) =>  {
    sum += element
  }
  arr.forEach(callback) //nhận 1 callback
  return sum

}
console.log(sumArray(numbers))

//setInterval(() => {console.log("Hello")}, 1000)

/*
setInterval() thực thi 1 hàm lặp lại trong khoảng thời
gian nhất định
systax setInterval(callback, duration(miliseconds)) -> hàm callback được gọi lai sau khoảng thời gian

setTimeout() thực thi 1 hàm sau 1 khoảng thời gian
systax setTimeout(callback, duration(miliseconds)) -> hàm callback được gọi lai sau khoảng thời gian
*/

//setInterval(function(){console.log("Hello")}, 1000)  --> thực hiện liên tục
//clearInterval()

//setTimeout(function(){console.log("Hello")},1000) --> thực hiện 1 lần


/*
  sử dụng forEach() chỉ cho arrays
  chỉ để lập qua các phần tử, không làm thay đổi phần tử mảng gốc
*/

let array = [1, 2, 3, 4, 6, 7]
array.forEach(function(element, index, array){ 
  console.log(element, index, array)
})

//output 
/* 
1 0 [ 1, 2, 3, 4, 6, 7 ]
2 1 [ 1, 2, 3, 4, 6, 7 ]
3 2 [ 1, 2, 3, 4, 6, 7 ]
4 3 [ 1, 2, 3, 4, 6, 7 ]
6 4 [ 1, 2, 3, 4, 6, 7 ]
7 5 [ 1, 2, 3, 4, 6, 7 ]
*/ 

let multi = 1;
let pow = (element) => {
  multi *= element;
}

array.forEach(pow);
console.log(multi)


/*
map(callback) -> trả về mảng mới bằng cách thực hiện 1 hàm lên từng phần tử
của mảng gốc
không làm thay đổi mảng gốc
*/

let newarr = array.map(function(e){return e ** 2})
//let newarr = array.map(function(e){return e % 2 == 0}) -> tạo mảng true - false
console.log(newarr)
//output: [1, 4, 9, 16, 36, 49]


/*
filter(callback) -> lọc các phần tử theo điều kiện
trả về mảng mới 
không làm thay đổi mảng gốc
*/

let evenArr = array.filter((element) => {return element % 2 == 0})
console.log(evenArr) //output: [2, 4, 6]


/*
reduce(callback) -> áp dụng 1 hàm lên từng phần tử của mảng và trả về 1 gtri duy nhất
hàm callback() nhận vào 2 tham số acc: gtr tích luy, cur: gtri hiện tại
reduce(callback, number->gtri khởi tạo cho acc)
*/

let sum = array.reduce((acc, cur) => {return acc + cur}, 0)
console.log(sum) //output: 23

/*
every(callback) -> áp dụng 1 hàm lên từng phần tử
trả về true nếu tất cả pt đều thỏa hàm callback
*/

let allEven = array.every((element) => {return element % 2 == 0})
console.log(allEven) //output: false

/*
find(callback) -> trả về phần tử đầu tiên thỏa điều kiện hàm
sort(callback)
some(calback) -> trả về true nếu có 1 số phần tử thoản mãn điều kiện
*/