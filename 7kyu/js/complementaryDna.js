// const pairs = {'A':'T','T':'A','C':'G','G':'C'};
//
// const DNAStrand = dna => {
//   return dna.split('').map(v => pairs[v]).join('');
// }

const DNAStrand = dna => {
  return dna.replace(/./g, c => {
    return DNAStrand.pair[c]
  })
}

DNAStrand.pair = {
  'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
}

DNAStrand("AAAA")
  // ,"TTTT","String AAAA is");

DNAStrand("ATTGC")
  // ,"TAACG","String ATTGC is");

DNAStrand("GTAT")
  // ,"CATA","String GTAT is");
