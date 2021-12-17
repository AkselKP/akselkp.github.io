import random
import time

fargeListe = ["rød", "orange", "gul", "grønn", "turkis", "blå", "fiolett"]

print(f"\nFargene som kan brukes er: {fargeListe}. INGEN DUPLIKATER")

farger = [random.choice(fargeListe), random.choice(fargeListe), random.choice(fargeListe), random.choice(fargeListe)]

# Sørger for at det ikke er noen duplikater i listen
while farger[1] == farger[0]: 
    farger[1] = random.choice(fargeListe)
while farger[2] == farger[1] or farger[2] == farger[0]:
    farger[2] = random.choice(fargeListe)
while farger[3] == farger[2] or farger[3] == farger[1] or farger[3] == farger[0]:
    farger[3] = random.choice(fargeListe)

forsok = 0
antallRiktigPlassert = 0

#print(farger)

while antallRiktigPlassert < 4 and forsok < 12:

    forsok += 1
    antallRiktig = 0
    antallRiktigPlassert = 0
    gjett = [input("\nGjett farge1: ").lower(), input("Gjett farge2: ").lower(), input("Gjett farge3: ").lower(), input("Gjett farge4: ").lower()]


    # sjekker at det er oppgitt en gyldig verdi 
    for i in range(len(gjett)):
        if gjett[i] not in fargeListe:
            print(f"\nFarge{i + 1} har en ugyldig farge!")
            gjett[i] = input(f"Gjett farge{i + 1}: ").lower()


    # sjekker etter riktig farger og riktig plassert
    for i in range(len(gjett)):
        if gjett[i] in farger:
            antallRiktig +=1
        if gjett[i] == farger[i]:
            antallRiktigPlassert += 1

    
    if antallRiktigPlassert == 4:
        print(f"\n-----------\n Riktig: {antallRiktigPlassert}\n-----------\n")
    else:
        print(f"\n----------------------------\nRiktig farger: {antallRiktig} \nRiktig plassert: {antallRiktigPlassert}\n----------------------------\n")

print(f"---------------------\n Gratulerer, du vant!\n---------------------\n \nDu gjettet: {gjett} på {forsok} forsøk! \nFasiten var: {farger}\n")


time.sleep(5)