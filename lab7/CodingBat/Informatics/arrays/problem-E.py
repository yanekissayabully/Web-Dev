n = int(input())
numbers = input().split(' ')
has_pair = False

for i in range(1, n):
    if (int(numbers[i]) > 0 and  int(numbers[i-1]) > 0) or (int(numbers[i]) < 0 and  int(numbers[i-1]) < 0):
        has_pair = True
        break

if has_pair:
    print('YES')
else:
    print('NO')