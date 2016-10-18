a = 'dev'
b = 'Lab'

name = a + b

def assert_equals(a,b)
  a == b
end

p assert_equals(a, 'dev')
p assert_equals(b, 'Lab')
