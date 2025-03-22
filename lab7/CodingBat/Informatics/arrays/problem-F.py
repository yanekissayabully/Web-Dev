n = int(input())
numbers = input().split(' ')
a = 0

for i in range(0, n-1):
    try:
        if int(numbers[i+1]) > int(numbers[i]) and int(numbers[i+1]) > int(numbers[i+2]):
            a +=1
    except:
        pass

print(a)