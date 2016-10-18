def validate_usr(username)
  !!username[/\A[a-z0-9_]{4,16}\z/]
end


p validate_usr('asddsa')
# , true)

p validate_usr('a')
# , false)

p validate_usr('Hass')
# , false)

p validate_usr('Hasd_12assssssasasasasasaasasasasas')
# , false)

p validate_usr('')
# , false)

p validate_usr('____')
# , true)

p validate_usr('012')
# , false)

p validate_usr('p1pp1')
# , true)

p validate_usr('asd43 34')
# , false)

p validate_usr('asd43_34')
# , true)
