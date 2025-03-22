def power(a,n):
    return pow(a, n)

numbers = input().split(" ")
print(power(float(numbers[0]), int(numbers[1])))