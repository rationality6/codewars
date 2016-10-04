def getCount(inputStr)
  result = 0
  splitedStr = inputStr.split('')
  for i in splitedStr
    if i=='a' || i=='e' || i=='o' || i=='i' || i=='u'
      result += 1
    end
  end
  result
end

def getCount(inputStr)
  inputStr.count("aeiou")
end

p getCount("abracadabra")
# 5
