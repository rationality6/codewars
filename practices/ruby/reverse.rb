def reverse(arr)
  for i in 0..(arr.length / 2) - 1
    save = arr[i]
    arr[i] = arr[-i - 1]
    arr[-i - 1] = save
    p arr
  end
end

reverse(%w(1 2 4 5))
