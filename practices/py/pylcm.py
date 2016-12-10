def gcd(a, b):
    if b == 0:
        return a
    else:
        print a%b
        return gcd(b, a % b)

print(gcd(15, 18))
# print(gcd(6, 20))

def lcm(a,b):
    return a*b/gcd(a,b)

print(lcm(2,8))
