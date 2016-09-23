# def group_check(s)
#
#     hash_symbols = {
#         '(':')',
#         '{':'}',
#         '[':']'
#     }
#
#     splited_array = s.split("")
#     stack = []
#     for i in splited_array
#         if i == '('
#             stack << hash_symbols[:'(']
#         end
#     end
#     print stack
# end


def group_check(s)
  stack = []
  symbols = { '{' => '}', '[' => ']', '(' => ')' }
  s.each_char do |c|
    stack << c if symbols.key?(c)
    return false if symbols.key(c) && symbols.key(c) != stack.pop
  end
  stack.empty?
end


p group_check('({})')
p group_check('({})}')
p group_check('({)}')

'({})'.each_char do |c|

end

symbols = { '{' => '}', '[' => ']', '(' => ')' }
if symbols.key('{')
  p 'exist'
end
