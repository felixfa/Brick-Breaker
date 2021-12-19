print("How many cats do u have?")

ergebnis=input()

while int(ergebnis)<0:
    print("Really. You have " + ergebnis + " cats. This can not be true. Try again!")
    ergebnis=input()

if(int(ergebnis) >=4):
    print("This a a lot of cats.")
else:
    print("This is not so many cats.")


