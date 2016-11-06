def reverse(str)
  splitedStr = str.split('')
  for i in 0...splitedStr.length / 2
    temp = splitedStr[-1 - i]
    splitedStr[-1 - i] = splitedStr[i]
    splitedStr[i] = temp
  end
  splitedStr
end

p reverse('I love you')
p reverse('I love')
p reverse('I run')

def reverse1(str)
  str.chars.inject([]) { |s, c| s.unshift(c) }.join
end

p reverse1('foo')
