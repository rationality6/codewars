def longest(a,b)
  a.concat(b).split('').sort.uniq.join
end

p longest('wieofj','weofij')
