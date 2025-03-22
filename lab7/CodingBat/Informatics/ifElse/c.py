correct = int(input())
student = int(input())

print("YES" if correct == student or (correct != 1 and student != 1) else "NO")