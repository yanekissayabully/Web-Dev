n = int(input())
numbers = input().split(' ')
a = []

for i in range(0, n):
    if int(numbers[i]) % 2 == 0:
        a.append(numbers[i])

for i in a:
    print(i)
