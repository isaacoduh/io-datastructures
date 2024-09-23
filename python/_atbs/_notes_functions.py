# a short program: zigzag

"""
    This program will create a back-and-forth, zigzag patten until the user stops it by pressing Ctrl-C. 
    1. import time and sys modules. the program uses two variables, the indent variable keeps track of how many indentations
        are before the band of eight asteriks and indentIncreasing contains a boolean value to determine if the amount of indentation
        is increasing or decreasing.
    2. the rest of the program is placed inside a try statement. When the user presses Ctrl+c while a python program is running, python raises the
        KeyboardInterrupt exception. If there is no try-except statement to catch this exception, the program crashes with an ugly error message. In this case, 
        using the sys.exit() will handle the interrupt gracefully.
    3.  the while true: infinite loop will repeat the instructions in the prgram forever. using end='' is because we do not want to automatically print a newline after these
        spaces. 
"""
import time, sys
indent = 0 # how many spaces to indent
indentIncreasing = True # whether the indent is increasing or not

def zizagFunc():
    try:
        while True: # the main program loop.
            print(' ' * indent, end = '')
            print('*********')
            time.sleep(0.1) # pause for 1/10 of a second.
            
            if indentIncreasing:
                # increase the number of spaces:
                indent = indent + 1
                if indent == 20:
                    # change direction
                    indentIncreasing = False
            else:
                # decrease the number of spaces:
                indent = indent - 1
                if indent == 0:
                    # change direction
                    indentIncreasing = True
    except KeyboardInterrupt:
        sys.exit()


"""
    Collatz Task:

    Write a function named collatz() that has one parameter named number. If number is even, then collatz() should print number // 2 and return this value. If number is odd, then collatz() should print and return 3 * number + 1.

    Then write a program that lets the user type in an integer and that keeps calling collatz() on that number until the function returns the value 1. (Amazingly enough, this sequence actually works for any integer—sooner or later, using this sequence, you’ll arrive at 1! Even mathematicians aren’t sure why. Your program is exploring what’s called the Collatz sequence, sometimes called “the simplest impossible math problem.”)

    Remember to convert the return value from input() to an integer with the int() function; otherwise, it will be a string value.

    Hint: An integer number is even if number % 2 == 0, and it’s odd if number % 2 == 1.

"""
def collatz(number):
    if number % 2 == 0:
        ans = number // 2
        print(ans)
    else:
        ans = 3 * number + 1
        print(ans)
    return ans

def collatzSequence():
    print('Enter Number: ')
    while True:
        try:
            x = collatz(int(input()))
        except ValueError:
            print('Please enter an integer value!')
        if(x == 1):
            sys.exit()


collatzSequence()