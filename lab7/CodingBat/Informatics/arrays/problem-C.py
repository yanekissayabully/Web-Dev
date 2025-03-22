n = int(input())
numbers = input().split(' ')
a = 0

for i in range(0, n):
    if int(numbers[i]) > 0:
        a += 1

print(a)