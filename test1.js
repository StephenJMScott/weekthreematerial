/*we want a function that returns true, if sent an even number of even numbers.
ie, evenstevens([2,2])= true. 
A few tests that we can build on to reach this point would be:

test.evenstevens ([1])=false
 ""              ([2,2])=true
 ""              ([2,4,1])=true
""               ([2,4,6])=false

*/


function evenstevens(numbers)   {
    
    if(numbers.length==2){
        return true;
        
    } else {
    return false;
    }
}