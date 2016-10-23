def fizz_buzz(n):
    result = []
    for i in range(1,n):
        if i % 5 == 0 & i % 3 == 0:
            result.append('FizzBuzz')
        elif i % 5 == 0:
            result.append('Buzz')
        elif i % 3 == 0:
            result.append('Fizz')
        else:
            result.append(i)
    return result

print fizz_buzz(100)
# 9 min
