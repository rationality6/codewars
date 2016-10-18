def any? list, &block
  list.any?(&block)
end

# def any? list, &block
#   list.any? {|element| block.call(element)}
# end

list0 = [0, 1, 2, 3, 5, 8, 13]
p any?(list0){|item| item.even?}
# , true, "some items on the list are even")
