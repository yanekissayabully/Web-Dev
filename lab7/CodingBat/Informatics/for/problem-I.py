n = int(input())
print(len([x for x in range(n//2, 1, -1) if n % x == 0])+2)