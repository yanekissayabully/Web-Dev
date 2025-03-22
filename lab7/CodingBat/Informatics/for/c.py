import math
a = int(input())
b = int(input())

for i in range(math.ceil(math.sqrt(a)),math.ceil(math.sqrt(b)) ):
    print(pow(i,2))