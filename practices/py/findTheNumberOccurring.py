def getOddOccurrence(arr):
    res = 0
    for element in arr:
        res = res ^ element
    return res

arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]

print "%d" % getOddOccurrence(arr)
