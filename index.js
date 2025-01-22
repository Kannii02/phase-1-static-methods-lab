class Formatter {
 
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(sentence) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return sentence
      .split(" ")
      .map((word, index) =>
        index === 0 || !exceptions.includes(word.toLowerCase())
          ? this.capitalize(word)
          : word
      )
      .join(" ");
  }
}

module.exports = Formatter;

if (require.main === module) {
  console.log(Formatter.capitalize("hello")); 
  console.log(Formatter.sanitize("Hello!@#$%^&*() World")); 
  console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog"));
}
