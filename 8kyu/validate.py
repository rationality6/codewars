def validate_code(code):
    import re
    return bool(re.match(r"^[123]\d*$",str(code)))


Test.assert_equals(validate_code(123), True)
Test.assert_equals(validate_code(248), True)
Test.assert_equals(validate_code(8), False)
Test.assert_equals(validate_code(321), True)
Test.assert_equals(validate_code(9453), False)
