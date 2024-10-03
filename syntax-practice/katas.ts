// Your order, Please

export function order(words: string): string {
  if (words === "") return "";

  const separatedWords = words.split(" ");

  const sortedWords = separatedWords.sort((a, b) => {
    const numA = parseInt(a.match(/\d/)?.[0] || "0");
    const numB = parseInt(b.match(/\d/)?.[0] || "0");
    return numA - numB;
  });

  return sortedWords.join(" ");
}

console.log(order("is9 Thi5s T3est 6a"));


// 