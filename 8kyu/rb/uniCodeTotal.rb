# def uni_total(string)
#   string.sum
# end

def uni_total(string)
  string.codepoints.inject(0, :+)
end


p uni_total("a")
# , 97)

# Test.assert_equals(uni_total("b")
# , 98)

# Test.assert_equals(uni_total("c")
# , 99)

# end
# Test.it("no chars should return zero") do
# Test.assert_equals(uni_total(""), 0)
# end
# Test.it("should work with multiple letters") do
# Test.assert_equals(uni_total("aaa"), 291)
# Test.assert_equals(uni_total("abc"), 294)
# end
# Test.it("should work with sentences and spaces") do
# Test.assert_equals(uni_total("Mary Had A Little Lamb"),1873)
# Test.assert_equals(uni_total("Mary had a little lamb"),2001)
# Test.assert_equals(uni_total("CodeWars rocks"),1370)
# Test.assert_equals(uni_total("And so does Strive"),1661)
