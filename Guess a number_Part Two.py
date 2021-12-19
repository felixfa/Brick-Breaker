#Guess a number

import random

#Ask for the range
print("Guess a number between 1 and 100!")
#upperNumber=int(input())
secret=random.randint(1,100)

#Game
for i in range(6):
	print("Guess a number. You have " + str(int(6-i)) + " trys!")
	guess=int(input())

	if guess < secret:
		print('Sorry. Your Guess is too low. Try again!')
	elif guess > secret:
		print('Sorry. Your Guess is too high. Try again!')
	else:
		break

if guess == secret:
	print("Congratulation. You won.")
else:
	print("Sorry You have lost.")



