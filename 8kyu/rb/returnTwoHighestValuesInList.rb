def two_highest(list)
  list.class != Array ? false : list.uniq.max(2)
end


p two_highest([15, 20, 20, 17])
# , [20, 17])
