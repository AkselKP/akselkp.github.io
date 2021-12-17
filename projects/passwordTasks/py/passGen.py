import random

lengde = int(input("Hvor mange tegn skal passordet bestå av?: "))
passord = []

for i in range(lengde):
    passord.append(chr(random.randint(33, 127)))

print(passord)