#Import
import random

#Ask for name
print("Hello there. What is your name?")
name=input()

#Ask for range
print("Hello " + name + ", guess a random number between 1 and what...")
ende=int(input())
secret=random.randint(1,ende)


#Game
for i in range(6):
    print("This your " + str(i+1) + ".guess. Type in the number.")
    guess=int(input())
    print()
    if (guess<secret):
        print("This is too low.")
    elif (guess >secret):
        print("This is too high.")
    else:
        break

if(secret==guess):
    print("Congratulations. You have won the game. The number is indeed " + str(secret) + ".")
else:
    print("Sorry, you have lost. The secret number was " + str(secret) + ".")
    

