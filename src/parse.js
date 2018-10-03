/**
 * Reads a .lvl file and parses it
 * @param  {String} filename
 * @return {HTMLDocument} parsedhtml
 */
const readLvl = filename => {
  let txt;
  return parseLvlup(txt);
};

/**
 * Parses text in lvlup
 * @param  {String} txt
 * @return {HTMLDocument} parsedhtml
 */
const parseLvlup = txt => {
  let parsehtml;

  let blocks = blockify(txt);
  
  for (let block of blocks) {
    // Check for special blocks first
    let control = block.split(" ")[0]
    console.log(control);
    // Check for exact controls
    // TODO: make this Regex? on control
    switch(control) {
      case "//-": // comment block
        break;
      case "-": // bulleted list
        break;
      case "*": // bulleted list
        break;
      case "#.": // numeric list
        break;
    }
    // Check for customizable controls #,:,+
};

/**
 * Tokenizes text into blocks by iterating through each line
 * @param {String} txt
 * @return {Array.String}
 */
const blockify = txt => {
  // Separate rest into blocks
  let blocks = txt.split("\n\n");
  let lineBuffer = "";
  console.log(blocks);

  // For each line in txt, ...
  for (let line of txt.split("\n")) {
    // If a literal block
    if ("```" in lineBuffer) {
    }
    else {
    }
  }
 
  return blocks;
};
