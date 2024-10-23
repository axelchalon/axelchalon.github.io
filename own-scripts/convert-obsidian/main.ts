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
  "2022-10-15-the-life-changing-magic-of-tidying-up-summary.md",

  "Measure What Matters":
  "2024-02-18-measure-what-matters-john-doerr-summary.md",

  "Trying Not to Try":
  "2023-04-15-trying-not-to-try-slingerland-summary.md",

  "The Design of Everyday Things":
  "2024-02-07-design-everyday-things-personal-notes.md",

  "A Splendid Exchange":
  "2024-03-29-a-splendid-exchange-personal-notes.md",

  "The Sirens of Titan":
  "2023-10-05-kurt-vonnegut-sirens-of-titan-thoughts-notes-review.md",

  "A Paradise Built In Hell":
  "2023-12-24-a-paradise-built-in-hell-summary.md",

  "Nudge":
    "2024-03-30-nudge-summary.md",

  "Money":
    "2024-05-09-money-unauthorized-biography-felix-martin-summary.md",

  "At the Existentialist Café":
    "2024-05-22-at-the-existentialist-cafe-sarah-bakewell-summary.md",

  "Never Split the Difference":
    "2024-06-01-never-split-the-difference-summary.md",

  "Shop Class as Soulcraft":
    "2024-10-23-shop-class-as-soulcraft-summary.md",
  
  "The Almanack of Naval Ravikant":
    "2024-07-25-almanack-naval-ravikant-summary.md"
};


function obsidianToJekyll(obsidian: string) {
  var result = obsidian;
  // (Add ^ at the end of h1s etc. in the source file instead) result = result.replace(/^(#+) (.+)$/gm, '$1 <a name="$2"></a>$2');
  result = result.replace(/[\r\n]{2}/g, '\n^\n');
  result = result.replace(/ #[a-zA-Z0-9-]+$ ?/gm, '');
  result = result.replace(/^(.*?[#*-] )(.+)[^#"]\^(.+)$/gm, '$1<a name="^$3"></a>$2');
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
  var obs = (await fs.readFile("/home/xenya/notes/obsidian/Life management/Notes and archives/Notes/Book notes/" + obsFile + ".md")).toString();
  var jk = obsidianToJekyll(obs);
  console.log(`Updating ${obsFile}...`);
  await fs.writeFile("../../0-book-review/_posts/" + obsidianFileToWebsiteFile[obsFile],jk);
});
