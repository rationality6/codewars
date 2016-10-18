def how_much_i_love_you(n) [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all"][(n-1)%6]
end

p how_much_i_love_you(7)
p how_much_i_love_you(3)
p how_much_i_love_you(6)
