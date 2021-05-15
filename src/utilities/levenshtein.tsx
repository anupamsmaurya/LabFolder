/**
 * Returns levenshtein distance between two string
 * @param  {string} a          source string.
 * @param  {string} b          target string.
 * @return {number}            levenshtein distance
 */
export default function levenshtein(a: string, b: string): number {
    if(a.length === 0) return b.length; 
    if(b.length === 0) return a.length;
  
    // swap to save some memory O(min(a,b)) instead of O(a)
    if(a.length > b.length) {
      var tmp = a;
      a = b;
      b = tmp;
    }
  
    var row = [];
    // init the row
    for(var l = 0; l <= a.length; l++){
      row[l] = l;
    }
  
    // fill in the rest
    for(var i = 1; i <= b.length; i++){
      var prev = i;
      for(var j = 1; j <= a.length; j++){
        var val;
        if(b.charAt(i-1) === a.charAt(j-1)){
          val = row[j-1]; // match
        } else {
          val = Math.min(row[j-1] + 1, // substitution
                         prev + 1,     // insertion
                         row[j] + 1);  // deletion
        }
        row[j - 1] = prev;
        prev = val;
      }
      row[a.length] = prev;
    }
  
    return row[a.length];
  }