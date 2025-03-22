def is_leap(a):
    if (a%400==0):
        return True
    elif(a%4==0):
        if(a%100!=0):
            return True
        else:
            return False
    else:
        return False

print(is_leap(int(input())))