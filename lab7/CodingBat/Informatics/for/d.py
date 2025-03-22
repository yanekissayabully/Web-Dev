"""
x = input()
d = input()
print(x.count(d))"""

x = input()
d = input()

count = 0

for i in x:
    if i == d:
        count += 1

print(count)