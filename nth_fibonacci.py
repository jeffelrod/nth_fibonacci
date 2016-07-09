# given n, find the nth fibonacci number

# ask for n
n = input("Please enter the which Fibonacci number you'd like calculated: ")

# debug input
# print("Your input was " + str(n))

# handle errors
import math
if math.isnan(n) or n < 1:
  print("Sorry - input must be 1) a single integer, 2) greater than 0.")

else:
  # define the special cases for n = 1 and n = 2, give ourselves a starting place if n >= 3!
  fibTwoBack = 0
  fibOneBack = 1
  fibn = None

  # handle the special cases!
  if n == 1:
    print("The Fibonacci number at position 1 is 0. Surprise!")
  elif n == 2:
    print("The Fibonacci number at position 2 is 1. Surprise!")

  # handle other cases
  else:
    i = 3
    while i <= n:
      fibn = fibTwoBack + fibOneBack
      fibTwoBack = fibOneBack
      fibOneBack = fibn
      i = i+1
    # debug result
    # print(fibn)
    print("The Fibonacci number at position " + str(n) + " is " + str(fibn) + "!") 