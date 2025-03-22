n = int(input())
numbers = input().split(' ')

for i in range(0, n):
    numbers.append(numbers[n-i-1])

for i in range(n, 2*n):
    print(numbers[i])