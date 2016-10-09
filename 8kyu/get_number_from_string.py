get_number_from_string("123")
get_number_from_string("this is number: 7")

def get_number_from_string(strng):
    return int( ''.join(a for a in strng if a.isdigit()) )

tests = (
    ("1", 1),
    ("123", 123),
    ("this is number: 7", 7),
    ("$100 000 000", 100000000),
    ("hell5o wor6ld", 56),
    ("one1 two2 three3 four4 five5", 12345),
)

for t in tests:
    inp, exp = t
    test.assert_equals(get_number_from_string(inp), exp)
