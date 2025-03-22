n = int(input())

hours = (n // 3600) % 24
minutes = (n // 60) % 60
seconds = n % 60

print(f"{hours}:{minutes:02}:{seconds:02}")
