# Revertexflex 0.01
## Gallery lab

Create your own personalized Sculpture.
Your name, nickname and birthdate, will be interpreted by the algorithm. Then you'll be ask to choose your favorite colors.

You can buy this Sculpture to be 3d printed and shipped to your home or you can buy it as NFT*.

*NFT in process

Front End:
* React,
* ReactFiber(threeJS)
* GSAP

Back End:
* Express
* MongoDB


www.revertexflex.art

## The algorithm do:

#### First
    Ask user for info:

        1. Name
        2. Sure Name
        3. Nick Name
        4. BirthDate
        5. Favorite Number
        6. Colors

#### Second
   
   Process the Data to have an array using:

    charCode.js
        Takes the data strings
        and return an array of numbers

    sucesionFibonacci.js
        Takes the first two numbers and the length
        of the charCode array and return a new array

    sumatoria.js
        Takes two or more number element of any array and transforms it to be only one digit number

> data --> charCodeArray --> sumatoria-Char

> charcodeArray --> sucesionFibonacci --> sumatoria-Fibonacci   

The two arrays are combined together to create the **Final Array**


#### Third

The **Final Array** is the data that will be used with three.js fiber to make the sculptures in a *nice frontEnd design or not.


 
