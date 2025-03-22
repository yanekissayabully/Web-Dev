n = int(input())
numbers = input().split(' ')
a = 0

for i in range(1, n):
    if int(numbers[i]) > int(numbers[i-1]):
        a +=1

print(a)