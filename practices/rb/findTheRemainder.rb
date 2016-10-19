def remainder(a, b)
  return nil if a == 0 || b == 0
  return a.abs % b.abs if a >= b
  return b.abs % a.abs if b >= a
end

describe 'Remainder Function' do 
  it 'Should handle arguments and math as defined in specificaitons' do
    Test.assert_equals(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible.')
    Test.assert_equals(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.')
    Test.expect(remainder(1, 0).nil?, 'Divide by zero should return nil')
    Test.expect(remainder(0, 0).nil?, 'Divide by zero should return nil')
  end
end

p 13.12342134.abs
