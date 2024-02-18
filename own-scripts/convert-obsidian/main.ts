import getStdin from 'get-stdin';
import { promises as fs } from "fs";

interface pr {
  [key: string]: any;
}

const obsidianFileToWebsiteFile: pr = {
  "The Toyota Way":
  "2023-11-30-the-toyota-way-jeffrey-liker-summary.md",

  "Improvise":
  "2022-12-15-improvise-max-dickins-summary.md",

  "The New Psycho-Cybernetics":
  "2023-08-15-the-new-psycho-cybernetics-summary.md",

  "Sex Talks":
  "2023-06-15-sex-talks-vanessa-marin-summary.md",

  "Your Symphony of Selves":
  "2023-03-15-your-symphony-of-selves-summary.md",

  "All About Love":
  "2023-10-25-all-about-love-bell-hooks-summary.md",

  "The Life-Changing Magic of Tidying up":
  "2022-10-15-the-life-changing-magic-of-tidying-up-summary.md"
};


function obsidianToJekyll(obsidian: string) {
  var result = obsidian;
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

  if (unparsedWikilinks !== null) {
  console.error("Unparsed Wikilinks:",unparsedWikilinks);
  throw new Error("Parse error");
  } else {
  return result;
  }
}

Object.keys(obsidianFileToWebsiteFile).forEach(async obsFile => {
  var obs = (await fs.readFile("/home/xenya/notes/obsidian/Life management/Books/Book notes/" + obsFile + ".md")).toString();
  var jk = obsidianToJekyll(obs);
  console.log(`Updating ${obsFile}...`);
  await fs.writeFile("../../0-book-review/_posts/" + obsidianFileToWebsiteFile[obsFile],jk);
});

console.log('Done!');