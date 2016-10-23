def one_to_ten(i=0):
  if i > 9:
    return 10
  else:
    print i
    return one_to_ten(i + 1)

print one_to_ten()
