import getStdin from 'get-stdin';
import { promises as fs } from "fs";

var result: string = await getStdin() || (await fs.readFile(process.argv[2])).toString();


interface pr {
  [key: string]: any;
}

const obsidianFileToWebsiteFile: pr = {
  "The Toyota Way \\(XJACK\\)":
  "2023-11-30-the-toyota-way-jeffrey-liker-summary.md",

  "Improvise \\(XJACK\\)":
  "2022-12-15-improvise-max-dickins-summary.md",

  "The New Psycho-Cybernetics \\(XJACK\\)":
    "2023-08-15-the-new-psycho-cybernetics-summary.md",

  "Sex Talks \\(XJACK\\)":
  "2023-06-15-sex-talks-vanessa-marin-summary.md",

  "Your Symphony of Selves \\(XJACK\\)":
  "2023-03-15-your-symphony-of-selves-summary.md"
};

result = result.replace(/^(#+) (.+)$/gm, '$1 <a name="$2"></a>$2');
result = result.replace(/[\r\n]{2}/g, '\n^\n');
result = result.replace(/^(.*?[*-] )(.+)[^#"]\^(.+)$/gm, '$1<a name="^$3"></a>$2');
result = result.replace(/\[\[#\^(.+?)\|(.+?)\]\]/g, '<a href="#^$1">$2</a>');

Object.keys(obsidianFileToWebsiteFile).forEach(key => {
  var regex = new RegExp("\\[\\[" + key + "\\]\\]","g")
  result = result.replace(regex, "[" + key + "]({% link 0-book-review/_posts/" + obsidianFileToWebsiteFile[key]+" %})");

  var regex = new RegExp("\\[\\[" + key + "(#[-^a-zA-Z]+)\\|(.+?)\\]\\]","g")
  result = result.replace(regex, "[$2]({% link 0-book-review/_posts/" + obsidianFileToWebsiteFile[key]+" %}$1)");

  var regex = new RegExp("\\[\\[" + key + "\\|(.+?)\\]\\]", "g")
  result = result.replace(regex, "[$1]({% link 0-book-review/_posts/" + obsidianFileToWebsiteFile[key] + " %})");
});

var unparsedWikilinks = result.match(/\[\[.+\]\]/);

if (unparsedWikilinks !== null && false) {
console.error("Unparsed Wikilinks:",unparsedWikilinks);
} else {
console.log(result);
}