"""
    Basically a simple Pizza Shop..
"""

class Customer:
    def __init__(self, name) -> None:
        self.name = name
        self.points = 0
        self.orders = []
    
    def add_points(self, points):
        self.points += points

    def remove_points(self, points):
        if self.points >= points:
            self.points -= points
            print(f"{points} points deducted from {self.name}. Remaining points: {self.points}")
        else:
            print(f"Not enough points to deduct {points} points from {self.name}.")

    def display_points(self):
        print(f"{self.name}'s Points: {self.points}")
    
    def add_order(self, order):
        self.orders.append(order)
    
    def display_orders(self):
        print(f"{self.name}'s Order History: ")
        for order in self.orders:
            print(order)

class PizzaShop:
    def __init__(self) -> None:
        self.pizza_menu = {
            'margherita': 8.00,
            'pepperoni': 9.50,
            'veggie': 10.00,
            'meat_lovers': 12.00,
            'bbq_chicken': 11.00
        }

        # inventory for pizza ingredients
        self.inventory = {
            'dough': 50,
            'tomato_sauce': 5000,
            'cheese': 3000,
            'pepperoni': 1000,
            'chicken': 1500,
            'bbq_sauce': 2000,
            'vegetables': 1000,
            'ground_beef': 1000
        }

        # Recipes for each pizza
        self.recipes = {
            'margherita': {'dough': 1, 'tomato_sauce': 100, 'cheese': 100},
            'pepperoni': {'dough': 1, 'tomato_sauce': 100, 'cheese': 100, 'pepperoni': 50},
            'veggie': {'dough': 1, 'tomato_sauce': 100, 'cheese': 100, 'vegetables': 80},
            'meat_lovers': {'dough': 1, 'tomato_sauce': 100, 'cheese': 100, 'pepperoni': 50, 'ground_beef': 50},
            'bbq_chicken': {'dough': 1, 'bbq_sauce': 100, 'cheese': 100, 'chicken': 80}  
        }

        self.sales = 0.0
        self.customers = {}
    
    def display_menu(self):
        print("Menu: ")
        for pizza, price in self.pizza_menu.items():
            print(f"{pizza.capitalize()}: ${price:.2f}")
    
    def take_order(self, pizza, quantity=1, customer_name=''):
        if pizza in self.pizza_menu:
            if self.check_inventory(pizza, quantity):
                self.process_order(pizza, quantity, customer_name)
                print(f"Enjoy your {pizza.capitalize()} pizza, {customer_name}, cost: {self.pizza_menu[pizza] * quantity}")
            else:
                print(f"Sorry, we do not have enough inventory to make {quantity} {pizza} pizza(s)")
        else:
            print(f"Sorry, {pizza} is not on the menu")
    
    def check_inventory(self, pizza, quantity):
        # check if there are enough ingredients to make the pizza
        for ingredient, required_amount in self.recipes[pizza].items():
            if self.inventory[ingredient] < required_amount * quantity:
                print(f"Not enough {ingredient} for {pizza}.")
                return False
        return True


    def process_order(self, pizza, quantity, customer_name):
        # deduct the required ingredients from inventory
        for ingredient, required_amount in self.recipes[pizza].items():
            self.inventory[ingredient] -= required_amount * quantity
        self.update_customer_points(customer_name, (self.pizza_menu[pizza] * quantity))
        self.record_order(customer_name, pizza, quantity)
        
        # add to sales
        self.sales += self.pizza_menu[pizza] * quantity 
    
    
    def display_inventory(self):
        print('Current Inventory: ')
        for item, quantity in self.inventory.items():
            print(f"{item}: {quantity}")
    
    def replenish_inventory(self, item, quantity):
        if item in self.inventory:
            self.inventory[item] += quantity
            print(f"Added {quantity} units of {item} to inventory.")
        else:
            print('That item does not exist in the invetory')
    
    def update_customer_points(self, customer_name, amount_spent):
        if customer_name in self.customers:
            self.customers[customer_name].add_points(int(amount_spent * 10))
        else:
            self.customers[customer_name] = Customer(customer_name)
            self.customers[customer_name].add_points(int(amount_spent * 10))
    
    def record_order(self, customer_name, pizza, quantity):
        if customer_name in self.customers:
            # Record the order as a dictionary
            self.customers[customer_name].add_order({'pizza': pizza, 'quantity': quantity})
        else:
            self.customers[customer_name] = Customer(customer_name)
            self.customers[customer_name].add_order({'pizza': pizza, 'quantity': quantity})

    
    def display_customer_orders(self, customer_name):
        if customer_name in self.customers:
            self.customers[customer_name].display_orders()
        else:
            print(f"{customer_name} is not a registered customer.")
    
    def apply_discount(self, customer_name):
        if customer_name in self.customers:
            if(self.customers[customer_name].points >= 100):
                discount_percent = 10
                discount_amount = self.sales * (discount_percent / 100)
                self.sales -= discount_amount
                self.customers[customer_name].remove_points(100)
                print(f"{customer_name} received a {discount_percent}% discount! New total: ${self.sales:.2f}")
            else:
                print(f"{customer_name} does not have enough points for a discount.")
        else:
            print(f"{customer_name} is not a registered customer.")
    
    def display_customer_points(self, customer_name):
        if customer_name in self.customers:
            self.customers[customer_name].display_points()
        else:
            print(f"{customer_name} is not a registered customer")
    
    def report_sales(self):
        print(f"Total sales: ${self.sales:.2f}")
    
    def report_inventory(self):
        total_items = sum(self.inventory.values())
        print(f"Total Inventory items: {total_items}")
    
    
# shop = PizzaShop()
# shop.display_menu()
# print()
# shop.take_order('veggie', 1, 'John')
# print()
# shop.display_customer_points('John')
# print()
# shop.display_customer_orders('John')
# print(shop.customers)
# # shop.display_menu()
# # shop.take_order('pepperoni', 2, 'Bobby')
# # shop.display_customer_points('Bobby')
# # shop.take_order('veggie', 1, 'Alice')
# # shop.display_inventory()
# # shop.report_sales()
# # shop.replenish_inventory('dough', 100)
# # shop.display_inventory()
# # shop.report_inventory()
# # shop.display_customer_points('Alice')

def run_pizza_shop():
    shop = PizzaShop()
    while True:
        print("\n Welcome to the coffee shop!")
        print("1. Display Menu")
        print("2. Take Order")
        print("3. Display Inventory")
        print("4. Replenish Inventory")
        print("5. Display Customer Points!")
        print("6. Display Customer Orders!")
        print("7. Apply Discount")
        print("8. Report Sales")
        print("9. Report Inventory")
        print("0. Exit")
        choice = input('Please select an option: ')

        if choice == "1":
            shop.display_menu()
        elif choice == "2":
            item = input("Enter the item: ")
            quantity = int(input("How many?: "))
            customer_name = input("Enter customer name: ")
            shop.take_order(item, quantity, customer_name)
        elif choice == "3":
            shop.display_inventory()
        elif choice == "4":
            item = input("Enter the item to replenish: ")
            quantity = int(input("Enter the quantity to add: "))
            shop.replenish_inventory(item, quantity)
        elif choice == "5":
            customer_name = input("Enter customer name: ")
            if customer_name in shop.customers:
                shop.customers[customer_name].display_points()
            else:
                print(f"{customer_name} is not a registered customer.")
        elif choice == "6":
            customer_name = input('Enter customer name')
            shop.display_customer_orders(customer_name)
        elif choice == "7":
            customer_name = input("Enter customer name")
            shop.apply_discount(customer_name)
        elif choice == "8":
            shop.report_sales()
        elif choice == "9":
            shop.report_inventory()
        elif choice == "0":
            print("Thank you visiting the pizza shop!")
            break
        else:
            print("Invalid choice. Please try again!")

run_pizza_shop()