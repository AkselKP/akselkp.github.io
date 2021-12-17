import random
import time

new = input("Vil du generere en pinkode?: ")
while new != "N":
    pin = []
    lengde = int(input("Hvor mange siffer skal pin-koden bestå av?: "))

    for i in range(lengde):
        pin.append(random.randint(1,10))

    print(pin)
    new = input("Vil du generere en til pinkode?: ")

time.sleep(3)