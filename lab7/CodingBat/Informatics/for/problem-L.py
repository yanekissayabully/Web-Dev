n = input()
grade = 1
number = 0

for i in n[::-1]:
    number += int(i) * grade
    grade *= 2

print(number)