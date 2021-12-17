import random
import time

def welcome():
    name = input(""" 
    ========================================================================
     ! Velkommen til mitt Hangman spill! Skriv inn ditt foretrukket navn: !

    """).capitalize()

    if name.isalpha() == True: # sjekker at det kun er bokstaver
        print(f""" 
        Hei {name}! Du vil spille mot datamaskinen i dag! \n Datamaskinen velger et tilfeldig ord og du skal gjette hva dette ordet er! \n                           Lykke til!
        """)
    else:
        print("    Error! Bare bokstaver godtas!")
        name = input(""" 
    ========================================================================
     ! Velkommen til mitt Hangman spill! Skriv inn ditt foretrukket navn: !
    
    """)


def replay():
    svar = input("Vil du spille igjen? (y/n): ").lower()

    if svar == "y":
        gameRun()
    else:
        print("""
        ===================================================
         Håper du hadde det gøy! Gjerne spill igjen senere!
        ===================================================
        """)


def getWord():
    ord = ["python", "hangman", "javascript", "porsgrunn", "politi", "brannbil"]
    return random.choice(ord).lower()


def gameRun():
    welcome()

    fasit = getWord()

    bokstaver = ("abcdefghijklmnoparstuvwxyzæøå")

    guessed = False
    gjettetBokstaver = []

    liv = 6 # Hvor mange liv bør man ha?

    print(f"\nOrdet er {len(fasit)} tegn")
    print(len(fasit) * "_", "\n")

    # Kanskje jeg bør ha fler hint? Evt fler hint dersom man har x antall liv igjen?
    # Skriv ut antall liv som gjenstår

    while guessed == False or liv < 0:
        print(f"Du har {liv} liv igjen! ")

        guess = input("\nGjett bokstav: ").lower()

        if len(guess) == 1: 
            if guess not in bokstaver:
                print("Du har ikke skrevet inn en gyldig bokstav. Prøv igjen!")
            elif guess in gjettetBokstaver:
                print("Du har allerede gjettet denne bokstaven. Prøv igjen!")
            elif guess not in fasit:
                print("Sorry! Den bokstaven er ikke i ordet :(")
                gjettetBokstaver.append(guess)
                liv -= 1
            elif guess in fasit:
                print("Bra! Bokstaven finnes i ordet!")
                gjettetBokstaver.append(guess)
            else:
                print("Error! Sjekk inputen din!")


        elif len(guess) == len(fasit):
            if guess == fasit:
                print("\nBRA! Du gjettet ordet riktig!\n")
                guessed = True
                replay()
            else:
                print("\nSorry! Det var ikke riktig ord!")
                liv -= 1


        else:
            print("Lengden på forslaget ditt er ikke den samme lengden som det riktige ordet. NB: En bokstav eller hele ordet av gangen")
            liv -= 1


        status = ""
        if guessed == False:
            for bokstav in fasit:
                if bokstav in gjettetBokstaver:
                    status += bokstav
                else:
                    status += "_"
            print(status)    


        if status == fasit:
            print("\nBra! Du gjettet ordet riktig!\n")
            guessed == True
            replay()
            break
        elif liv == 0:
            print("\nWhoops! Du gikk tom for liv og klarte ikke gjette ordet.\n")
            replay() 


gameRun()

time.sleep(3)

    


