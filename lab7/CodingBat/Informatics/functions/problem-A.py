def min (a: int, b: int, c: int, d: int) -> int:
    if (a<=b and a<=c and a<=d):
        return a
    elif (b<=a and b<=c and b<=d):
        return b
    elif (c<=a and c<=b and c<=d):
        return c
    elif (d<=b and d<=c and d<=a):
        return d

numbers = input().split(" ")
print(min(int(numbers[0]), int(numbers[1]), int(numbers[2]), int(numbers[3])))