

/*QUE 1:
1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223	*/



function reverse(){
  var rem,rev=0;
  var num=prompt("Enter The Number");
  while(num!==0)
    {
      rem=num%10;
      rev=rev * 10 + rem;
      num=Math.floor(num / 10);
    }
  console.log(rev);
}
reverse();



/*QUE 2:

2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.*/


function checkPalindrome()
		{
			var orignalStr;
			 var str=prompt("Enter String");
			
			//str = str.toLowerCase();
			
		
			orignalStr = str;
			
			
			str = str.split(''); 
			str = str.reverse(); 
			str = str.join(''); 
			
			var reverseStr = str;
			
			if(orignalStr === reverseStr)
            {
				return 'Palindrome';
			}else
            {
				return 'Not Palindrome';
			}
		}
checkPalindrome();



method 2:

var check = function(){
    var str=prompt("Enter String");
    var reverse = str.toString().toLowerCase().split('').reverse().join('');
     if(reverse === str) 
     {
        console.log("String is Palindrome");
     } else {
        console.log("String is Not Palindrome");
      }
  }
check();


method 3:


function palindrome(){
    var reversedString = '';
    for(var i = str.length -1 ; i >= 0; i--){
        reversedString += str[i];
    }

    console.log(reversedString);
  if( reversedString === str)
    {
      console.log("string is palindrome");
    }
  else
    {
      console.log("string is not palindrome");
    }
}
palindrome(“madam”);


/*QUE 3:
3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
*/

function substrings()
{
  var str1=prompt("Enter the String");
var array1 = [];  
  for (var x = 0, y=1; x < str1.length; x++,y++)   
  {  
   array1[x]=str1.substring(x, y);  
    }  
var combi = [];  
var temp= "";  
var slent = Math.pow(2, array1.length);  

for (var i = 0; i < slent ; i++)  
{  
    temp= "";  
    for (var j=0;j<array1.length;j++) {  
        if ((i & Math.pow(2,j))){   
            temp += array1[j];  
        }  
    }  
    if (temp !== "")  
    {  
        combi.push(temp);  
    }  
}  
  console.log(combi.join("\n"));  
} 
substrings(); 













/*QUE 4:
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster' 
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/





function alphaorder()
{
  var str=prompt("Enter your String");
  var order=str.split('').sort().join();

  console.log(order);
}
alphaorder();





/*QUE 5:
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '*/



with regex:


function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(capitalize_Words('js string exercises'));



without REGEX:

function titleCase() {
  var str=prompt("Enter String");
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   console.log(splitStr.join(' ')); 
}

titleCase();





/*8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/


function prime(num)
{
  for(var i=2; i < num; i++)
    {
      if(num%i===0)
      {
        console.log("Num is not prime");
        break;
      }
      else
      {
        console.log("Num is prime");
        break;
      }
    }
  
}
prime(91);



/*7.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string : 'The quick brown fox' 
Expected Output : 5*/



function getVowels(str) {
  var vowelsCount = 0;

 var string = str.toString();

  
  for (var i = 0; i <= string.length - 1; i++) {

    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount = vowelsCount + 1;
    }
  }
  console.log("vowels in this  string are " + ' ' +vowelsCount);
}
getVowels("javascript");





/*10.Write a JavaScript function which returns the n rows by n columns identity matrix.*/


function matrix(numrow) {  
  
        var row;  
        var column;  
  
        for (row=0; row < numrow; row++)  
        {  
          for (column=0; column < numrow; column++)  
          {  
               if (row === column)  
               {  
                  
                 console.log(' 1 ');  
               }  
                        
               else   
                {  
                 console.log(' 0 ');}  
                } 
           }  
       }  
matrix(3);




/*9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.*/


function types()
{
 var num=33;
  console.log(num);
  console.log(typeof num);
}
types();







/*11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4 
*/




function small(){
  var arr=[2,4,6,7,1,5];
   var sort=arr.sort();
  console.log(sort);
  var len=arr.length;
 
  console.log("Second Smallest Number is" +' ' +arr[1]);
  console.log("Second Greatest Number is" +' ' +arr[len-2]);
}
small();




/*6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial' 
Expected Output : 'Development'.*/


function findLongestWord(str) {
  var words = str.split(' ');
  var longestLength = 0;
  var longestWord;
  for (var i=0;i<words.length;i++) {
    
    if (words[i].length > longestLength) {
     // console.log(words[i].length);
       longestLength = words[i].length;
       longestWord = words[i];
      console.log(longestLength);
    }
  }
  
  console.log(longestWord);
}
findLongestWord("Web Tutorial Development ");
