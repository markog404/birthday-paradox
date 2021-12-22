<html lang="en" >
  <head>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" />
   <link rel="stylesheet" href="styles.css"/>
       <script id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
     <script  src="./script.js"></script>
  </head>
  <body>
     <div class="header">
         	 <button class="btn btn-dark" onclick="myFunction()" type="button" >Toggle dark mode</button>
     </div>
 <div class="calculate">
  <h3>Calculator</h3>
<p>Number of people : <input class="people"  type="number" /></p>
<button class="btn btn-primary" onclick="Calculate()" type="button">Calculate</button><br />
<p class="prob"></p>
    </div>
     <br>
     <div>
        <h3>Birthday problem 🎉</h3>
        <p>
   The birthday problem regards the probability that, in a set of random individuals, at least two will have the same birthday. The paradox here is that the probability of two people sharing a birthday exceeds 50% in a group of only 23 people. This fact, while counterintuitive and mind-boggling to many, can easily be proved using high-school math.  
        </p>
     </div>
     <div>
        <h3>Math behind birthday paradox</h3>
  In a set of n individuals there are 2 possibilities:<br>
1. Everyone has a unique birthday <br>
2. At least two people have a same birthday<br>
 \[ So: p_1 + p_2 =1 (100\%)\] <br>

 <br> 
To find the probability of any 2 people having the same birthday we will find the probability of everyone having different birthdays and subtract it from 1.
For the sake of simplicity we will not account for leap years and possibility of twins.
<br><br>
  Let's say person one was born on January 1st.<br>
  This leaves 364 other possible days for person two: \[p_{two}={364\over365}\]
  This leaves 363 other days for person three , and so on..:\[p_{three}={363\over365}\]
  So for person n there are 365-n+1 days:  \[p_{n}={365-n+1\over365}\]
  Now we just multiply all the probabilities to get the probability of everyone in a set of n individuals having a unique birthday:
  
  \[p_1 = {365 \over365 }\cdot{364 \over365 }\cdot{363 \over365 }...\cdot{(365-n+1) \over365 }\]
  \[p_1={ 365! \over{(365-n)! \over 365^n}}\]
  \[p_1 = {365! \over 365^n\cdot(365-n)!}\]
  
 Therefore, probability of at least two people having a same birthday is: 
  \[p_2=1-{365! \over 365^n\cdot(365-n)!}\]
  
  Now we just check for n=23:
  \[p_{23}=1-{365! \over 365^{23}\cdot(365-23)!}=1-0.492703 = 0.507297(50.7297\%)
\]
     

     </div>
</body>

