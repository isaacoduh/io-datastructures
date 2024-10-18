"""
    Write a function group_and_sort_anagrams that takes a list of strings and groups the anagrams together. The function should return a list of lists, where each inner list contains strings that are anagrams of each other, and each group of anagrams should be sorted in lexicographical order.

    Problem Understanding
    Definition of Anagrams: Anagrams are words that can be rearranged to form other words, meaning they contain the same characters with the same frequencies (e.g., "tea", "eat", and "ate" are anagrams).

"""

def group_and_sort_anagrams(wordList):
    result_dict = {}
    for word in wordList:
        # sort the word to form the key
        sorted_word = ''.join(sorted(word))

        # check if the key already exists in the dictionary
        if sorted_word in result_dict:
            result_dict[sorted_word].append(word)
        else:
            result_dict[sorted_word] = [word]
    

    for key in result_dict:
        result_dict[key].sort()
    
    # return the grouped and sorted anagrams as a list of lists
    return list(result_dict.values())
    
    
print(group_and_sort_anagrams(['bat', 'tab', 'rat', 'tar', 'car']))  # Expected: [['bat', 'tab'], ['rat', 'tar'], ['car']]
print(group_and_sort_anagrams(['listen', 'silent', 'enlist', 'hello', 'olleh', 'abc', 'cab']))  # Expected: [['abc', 'cab'], ['hello', 'olleh'], ['listen', 'silent', 'enlist']]
print(group_and_sort_anagrams(['tea', 'eat', 'ate', 'bat', 'tab', 'cat']))  # Expected: [['bat', 'tab'], ['cat'], ['ate', 'eat', 'tea']]


"""
The perimeter of a rectangle is the total distance around the rectangle 
and is calculated by adding together the lengths of all four sides. 
The formula is:

Perimeter = 2 * (length + width)

The area of a rectangle is the amount of space inside the rectangle. 
The formula is:

Area = length * width

Given the length and width, you can compute both the perimeter and area.
"""

def maximize_rectangle_area_with_constraint(n):
    maximum_area = 0

    for width in range(1, n // 4 + 1):
        # calculate the corresponding length from the perimeter formula
        length = n / 2 - width

        if length >= 2 * width:
            # calculate the area of the rectangle
            area = length * width

            if area > maximum_area:
                maximum_area = area
            
    
    return maximum_area

print(maximize_rectangle_area_with_constraint(20))  # Expected Output: 18.0
print(maximize_rectangle_area_with_constraint(30))  # Expected Output: 50.0
print(maximize_rectangle_area_with_constraint(40))  # Expected Output: 72.0
print(maximize_rectangle_area_with_constraint(10))  # Expected Output: 4.0
    