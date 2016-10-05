def is_isogram(string)
  string.downcase!
  ('a'..'z').each do |letter|
    return false if string.count(letter) > 1
  end
  return true
end

p is_isogram('fof')
p is_isogram('fo')
p is_isogram('fop')
