def double_char(str)
  str.split('').map{|x|x*2}.join
end

# p double_char("abcd")
# , "aabbccdd")

p double_char('1234')

# p double_char("Adidas")
# , "AAddiiddaass")

# p double_char("1337")
# , "11333377")

# p double_char("illuminati")
# , "iilllluummiinnaattii")

# p double_char("123456")
# , "112233445566")

# p double_char("%^&*(")
# , "%%^^&&**((")
