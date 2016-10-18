def build_string(*args)
  "I like #{args.join(', ')}!"
end

def build_string(*args)
  args = args.join(', ')
  return "I like #{args}!"
end

p build_string('Cheese','Milk','Chocolate')
# , 'I like Cheese, Milk, Chocolate!', 'Return the correct String')

p build_string('Cheese','Milk')
# , 'I like Cheese, Milk!', 'Return the correct String')

p build_string('Chocolate')
# , 'I like Chocolate!', 'Return the correct String')
