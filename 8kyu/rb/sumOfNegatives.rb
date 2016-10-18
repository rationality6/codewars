def count_positives_sum_negatives(lst)
  pos = 0
  neg = 0
  for i in lst
    if i > 0
      pos+=1
    elsif i < 0
      neg += i
    else
      0
    end
  end
  [pos,neg]
end

def count_positives_sum_negatives(lst)
    [lst.count{|n| n > 0}, lst.select{|n| n < 0}.reduce(0, :+)]
end

p count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
# [10,-65]
p count_positives_sum_negatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
# [8,-50]
p count_positives_sum_negatives([1])
# [1,0]
p count_positives_sum_negatives([-1])
# [0,-1]
p count_positives_sum_negatives([0,0,0,0,0,0,0,0,0])
# [0,0]
