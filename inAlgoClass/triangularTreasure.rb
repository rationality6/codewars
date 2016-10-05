def triangular(n)
  result = 0
  for i in 0..n
    result += i
    i += 1
  end
  result
end

def triangular(n)
  (1..n).reduce(&:+) or 0
end

p triangular(0)
p triangular(2)
p triangular(3)
triangular(-10)
