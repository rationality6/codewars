def logical_calc(arr, op)
  op=='AND' ? arr.reduce(:&) : op=='OR' ? arr.reduce(:|) : arr.reduce(:^)
end

OPS = {'AND' => :&, "OR" => :|, "XOR" => :^ }

def logical_calc(array,op)
  array.inject(&OPS[op])
end

p logical_calc([true, true, true, false], "AND")
# , false)

p logical_calc([true, true, true, false], "OR")
# , true)

# logical_calc([true, true, true, false], "XOR"), true)
# logical_calc([true, true, false, false], "AND"), false)
# logical_calc([true, true, false, false], "OR"), true)
# logical_calc([true, true, false, false], "XOR"), false)
# logical_calc([true, false, false, false], "AND"), false)
# logical_calc([true, false, false, false], "OR"), true)
# logical_calc([true, false, false, false], "XOR"), true)
# logical_calc([true, true], "AND"), true)
# logical_calc([true, true], "OR"), true)
# logical_calc([true, true], "XOR"), false)
# logical_calc([false, false], "AND"), false)
# logical_calc([false, false], "OR"), false)
# logical_calc([false, false], "XOR"), false)
# logical_calc([false], "AND"), false)
# logical_calc([false], "OR"), false)
# logical_calc([false], "XOR"), false)
# logical_calc([true], "AND"), true)
# logical_calc([true], "OR"), true)
# logical_calc([true], "XOR"), true)
