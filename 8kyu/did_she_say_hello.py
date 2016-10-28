def validate_hello(greetings):
    return any(x in greetings.lower() for x in ['hello','ciao','salut','hallo','hola','ahoj','czesc'])


from re import compile, search, I

REGEX = compile(r'hello|ciao|salut|hallo|hola|ahoj|czesc', I)


def validate_hello(greeting):
    return bool(search(REGEX, greeting))


print validate_hello('hello')
# , True)

print validate_hello('ciao bella!')
# , True)

# Test.assert_equals(validate_hello('salut'), True)
# Test.assert_equals(validate_hello('hallo, salut'), True)
# Test.assert_equals(validate_hello('hombre! Hola!'), True)
# Test.assert_equals(validate_hello('Hallo, wie geht\'s dir?'), True)
# Test.assert_equals(validate_hello('AHOJ!'), True)
# Test.assert_equals(validate_hello('czesc'), True)
# Test.assert_equals(validate_hello('meh'), False)
# Test.assert_equals(validate_hello('Ahoj'), True)
