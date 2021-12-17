import random
import time

new = input("Vil du generere et passord?: ").lower()
while new == "y":
    lengde = int(input("Hvor mange tegn skal passordet bestå av?: "))
    passord = []

    for i in range(lengde):
        passord.append(chr(random.randint(33, 127)))

    print(passord)
    new = input("Vil du generere et nytt passord?: ").lower()

time.sleep(3)