n = int(input())
zeros = 0

for i in range(0, n):
    a = int(input())
    if a == 0:
        zeros += 1

print(zeros)