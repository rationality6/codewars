def sum_array(array_param):
    array = []
    sort = sorted(array_param)
    for i in range(0,len(sort)):
        if i == 0 or i == (len(sort)-1):
            next
        else:
            array.append(sort[i])
    return array

array = [6,2,1,8,10]#16

print sum_array(array)


def sum_array(arr):
    if arr == None or len(arr) < 3:
        return 0
    return sum(arr) - max(arr) - min(arr)
