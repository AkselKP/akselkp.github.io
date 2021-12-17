import random

pin = []
lengde = int(input("Hvor mange siffer skal pin-koden bestå av?: "))

for i in range(lengde):
    pin.append(random.randint(1,10))

print(pin)