def fib(n)
  p 'works'
  a = 1
  b = 0
  temp = 0
  arr = [0]
  while n >= 0 do
    p 'works in while loop'
    temp = a
    a += b
    b = temp
    arr << b
    n -= 1
  end
  arr
end

p fib(9)
