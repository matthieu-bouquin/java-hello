const ARN = {
  UCU: 'Sérine',
  UCC: 'Sérine',
  UCA: 'Sérine',
  UCG: 'Sérine',
  AGU: 'Sérine',
  AGC: 'Sérine',
  CCU: 'Proline',
  CCC: 'Proline',
  CCA: 'Proline',
  CCG: 'Proline',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UUU: 'Phénylalanine',
  UUC: 'Phénylalanine',
  CGU: 'Arginine',
  CGC: 'Arginine',
  CGA: 'Arginine',
  CGG: 'Arginine',
  AGA: 'Arginine',
  AGG: 'Arginine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
};
function convertARNToAcid(str) {


console.log('ARN de CCGUCGUUGCGCUACAGC est: ');
console.log(convertARNToAcid('CCGUCGUUGCGCUACAGC'));

console.log('ARN de CCUCGCCGGUACUUCUCG est: ');
console.log(convertARNToAcid('CCUCGCCGGUACUUCUCG'));
