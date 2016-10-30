def positive_sum(arr)
  result = 0
  for i in arr
    if 0<i
      result += i
    end
  end
  result
end

p positive_sum([1,2,3,-3,3])
