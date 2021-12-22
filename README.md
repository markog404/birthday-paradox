# Birthday-paradox
Birthday problem
The birthday problem regards the probability that, in set of random individuals, at least two will have a same birthday. The paradox here is that probability of two peaople sharing a birthday exceeds 50% in a group of only 23 people. This fact, while counterintuitive and mind-boggling to many, can easily be proved using high-school math.

Math behind birthday paradox
In a set of n individuals there are 2 possibilities:
1) Everyone has a unique birthday
2) At least two people have the same birthday
So p1+p2=1 (100%)

To find the probability of any 2 pepole having a same birthday we will find probability of eveyone having a nuique birthday and substract it from 1. To keep things simple, we will not account for leap years and possiblity of twins.
Let’s say person A has birthday on january 1st. This leaves 364 other days in a year for person B (\left(p_{b}=\frac{364}{365}\right). This leaves 363 other days for person C \left(p_{c}=\frac{363}{365}\right, and so on.. So in a set of n individiauls, the probability of everyone having unique birthday is:
p=365/365 * 364/365 * 364/365 * … (365-n+1)/365
