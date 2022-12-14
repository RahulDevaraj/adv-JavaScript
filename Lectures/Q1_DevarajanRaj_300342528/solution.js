var index;
function transformArray([...array])
{
    
    if (array.every(x => typeof x === 'number'))
    {        
        console.log("Number Array");
        index=Math.floor(Math.random()*array.length);
        console.log("The original array is: "+array);
        
        array.splice(index,1);
        return array;
    }
    else
    {
        
        
        console.log("The Original Array is: "+array);
        //convert to lowercase
        return array.map(x=>x.toLowerCase());
        
    }
}
console.log("Modified Array is "+transformArray([0,10,20,30,40,50,60,70]));
console.log("Random index was "+index);
console.log("Modified Array is "+transformArray(['CSIS','Finance','Marketing','HR','Accounting']));

//Q2
function displayName(...name)
{
    //get array length
    let length=name.length;
    if(length==2)
    {        
        let [firstName,lastName]=name;
        console.log(`The name of the person with firstname ${firstName} and lastname ${lastName} is ${lastName},${firstName.charAt(0)}.`);

    }
    else if(length==3)
    {
        let [firstName,middleName,lastName]=name;
        console.log(`The name of the person with firstname ${firstName}, middlename ${middleName} and lastname ${lastName} is : ${lastName},${middleName.charAt(0)}. ${firstName}.`);
    }
    else
    {
        console.log("Invalid number of arguments");
    }
   }
displayName("John","Doe");
displayName("John","Suv","Doe");

function largest(...numbers){

    return Math.max(...numbers);
}
console.log("Largest number is : "+largest(55,44,33,100,99));

//Q3
const movies = [
    {
        title: 'Amadeus',
        score: [{ site: 'Rotten Tomatoes', rating: 6 },
        { site: 'IMDB', rating: 7 },
        { site: 'Roger Ebert', rating: 8 }],
        year: 1984
    },
    {
        title: 'Sharknado',
        score: [{ site: 'Rotten Tomatoes', rating: 6 },
        { site: 'IMDB', rating: 7.5 },
        { site: 'Roger Ebert', rating: 6.5 }],
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: [{ site: 'Rotten Tomatoes', rating: 8 },
        { site: 'IMDB', rating: 7 },
        { site: 'Roger Ebert', rating: 6.5 }],
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: [{ site: 'Rotten Tomatoes', rating: 6.5 },
        { site: 'IMDB', rating: 7 },
        { site: 'Roger Ebert', rating: 8.5 }],
        year: 1986
    },
    {
        title: 'Waterworld',
        score: [{ site: 'Rotten Tomatoes', rating: 5 },
        { site: 'IMDB', rating: 3 },
        { site: 'Roger Ebert', rating: 4 }],
        year: 1995
    },
    {
        title: 'Parasite',
        score: [{ site: 'Rotten Tomatoes', rating: 9 },
        { site: 'IMDB', rating: 8 },
        { site: 'Roger Ebert', rating: 6 }],
        year: 2019
    },
    {
        title: 'Alien',
        score: [{ site: 'Rotten Tomatoes', rating: 5 },
        { site: 'IMDB', rating: 7 },
        { site: 'Roger Ebert', rating: 6 }],
        year: 1979
    }     
]
//Q3
class Movie{
    constructor(title,score,year)
    {
        this.title=title;
        this.score=score;
        this.year=year;
    }
    getAverageScore()
    {
        let sum=0;
        for(let i=0;i<this.score.length;i++)
        {
            sum+=this.score[i].rating;
        }
        return sum/this.score.length;
    }
    print()
    {
        if(this.getAverageScore()>=7)
        {
            console.log(`Movie Title: ${this.title} released in year ${this.year} has an average score of ${Math.round(this.getAverageScore())}`);
        }
    }
      

}
function movieInfo(){
    for(let i=0;i<movies.length;i++)
    {
        let movie=new Movie(movies[i].title,movies[i].score,movies[i].year);
        movie.print();
    }
}
movieInfo()



//Q4

document.getElementById("placeorder").addEventListener("click",addFunction)

function addFunction(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    //get checked radio button value with name occasion
    let checkedValue = document.querySelector('input[name="occasion"]:checked').value;

    //get the selected checkbox values from name extratouches
    let selected = [];
    for (const option of document.querySelectorAll('input[name="extratouches"]:checked')) {
        selected.push(option.value);
        }

   let target =  document.getElementById("order");
   target.innerText = `Thank You ${fname} ${lname} for placing an order with us\n`
   target.innerText += `Your Order Details are\n`
   target.innerText += `The Occasion is ${checkedValue}\n`
    target.innerText += `The Extra Touches are:`
    for(let i=0;i<selected.length;i++)
    {
        target.innerText += `${selected[i]}\n`;
    }


            
}