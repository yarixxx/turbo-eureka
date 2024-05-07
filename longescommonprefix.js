/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        prefix = longestPrefix(prefix, strs[i]);
    }
    return prefix;
};

function longestPrefix(s1, s2) {
  const prefix = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      prefix[i] = s1[i];
    } else {
      return prefix.join('');
    }
  }
  return prefix.join('');
}
