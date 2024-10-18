"""
    Calculate simple interest:
"""

def calculate_simple_interest(principal, rate, time):
    return (principal * rate * time) / 100

try:
    principal = float(input("Enter the principal amount (P): "))
    rate = float(input("Enter the rate of interest (R): "))
    time = float(input("Enter the time in years (T): "))

    # calculate the simple interest
    simple_interest = calculate_simple_interest(principal, rate, time)

    # display the result
    print(f"The simple interest is: {simple_interest:.2f}")
except ValueError:
    print("Please enter a valid numeric values")