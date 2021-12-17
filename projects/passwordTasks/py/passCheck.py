import time

passord = input("\nSkriv inn passord: ")

def numbCheck():    
    for i in range(len(passord)):
        if ord(passord[i]) in range (48,58): # 0-9
            return True


while not(len(passord) >= 8 # Minimum 8 tegn
and not(passord.isalnum()) # Alfanumerisk?
and not(passord.islower()) # Alle bokstaver små?
and not(passord.isupper()) # Alle bokstaver store?
and numbCheck() == True): # Inneholder tall? 

    passord = input("\nUgyldig passord!\n\nDu må ha:\nMinimum 8 tegn\nBåde store og små bokstaver\nMinimum et spesialtegn\nMinimum et tall\n\nSkriv inn passord: ")


print(f"\n-----------------------------------\n Passordet ditt er godkjent\n Du har imøtekommet passordkravene\n-----------------------------------")

time.sleep(3)

