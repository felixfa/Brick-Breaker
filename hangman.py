#! /usr/bin/env python3

import random

#Function for guessing a word
def guessWord(usedLetters):
    print("Guess a letter: ")
    guess=input()
    while(guess.isalpha()==False or guess.lower() in usedLetters):
        if(guess.isalpha()==False):
            print('Your Guess is not a letter. Guess a letter:')
            guess=input()
        if(guess.lower() in usedLetters):
            print('You already guessed this letter. Guess a letter:')
            guess=input()
    return guess.lower()

def hangman():
    #The Secret word 
    secretWords=['love','lesly','max','blacky','chess','marriage','felix', \
                 'nicole','sara','kiss','cats','adventure','peru','germany','rami', \
                 'trust', 'animals','auxilio','princess','peach','pregnant', 'sexy',\
                 'beautiful','charming','ceviche','pollo','pollodelabrasa', 'pisco',\
                 'banana']
    luckyNumber=random.randint(0,len(secretWords)-1)
    secret=secretWords[luckyNumber]



    #Some needed List and Variables
    usedLetters=[]
    numOfRightLetters=0
    guessedWord=[]
    numAllowedWrongGuesses= 5
    numWrongGuesses=0
    for i in range(len(secret)):
        guessedWord.append('_')


    #Saying hello
    print("Hey,welcome to Hangman with words based around Lesly.")
    print("The secret word has " +str(len(secret))+ \
          " letters and " + str(numAllowedWrongGuesses) + " wrong guesses are allowed." )


    #Checking if u have the word
    while(numOfRightLetters!=len(secret)):
        #Check if allowed number of Guesses are reached
        if(numWrongGuesses==numAllowedWrongGuesses):
            print()
            print('Game over! You had ' + str(numWrongGuesses) + " wrong guesses.")
            break 
        
        #Display the letters you are already used
        print()
        print('This your word: ', end="")
        print(''.join(guessedWord))
        print("These Letters you already used: ", end="")
        print(','.join(usedLetters))
        print('You have ' +str(numWrongGuesses) + ' wrong guesses.')
        rightGuess=False

        #Taking a guess & check if this is not a already used guess
        guess=guessWord(usedLetters)

        ## Add the Guess to the List Used Letters
        usedLetters.append(guess)
        usedLetters.sort()

        #Check if the guessed letter is right.
        for i in range(len(secret)):
            if guess == secret[i]:
                print("Right. " +secret[i]+ " is on " + str(i+1) + ".position.")
                numOfRightLetters +=1
                rightGuess=True
                guessedWord[i]=secret[i]
                
        if(rightGuess==False):
            print("This is the wrong letter! Sorry!")
            numWrongGuesses +=1

    #Ending message :-)
    if(numOfRightLetters==len(secret)):
        print()
        print('Yes, you did it. ', end="")

    print("The word was '" + secret + "'!")
    print("Do u wanna play again? (yes/no)")
    answer=input()
    return answer

answer='yes'
while(answer.lower()=='yes'):
    answer=hangman()





    
                  
    

      
    
