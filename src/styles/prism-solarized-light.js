/*
 Solarized Color Schemes originally by Ethan Schoonover
 http://ethanschoonover.com/solarized
 Ported for PrismJS by Hector Matos
 Website: https://krakendev.io
 Twitter Handle: https://twitter.com/allonsykraken)
*/

/*
SOLARIZED HEX
--------- -------
base03    #002b36
base02    #073642
base01    #586e75
base00    #657b83
base0     #839496
base1     #93a1a1
base2     #eee8d5
base3     #fdf6e3
yellow    #b58900
orange    #cb4b16
red       #dc322f
magenta   #d33682
violet    #6c71c4
blue      #268bd2
cyan      #2aa198
green     #859900
*/

export const solarized_light = `
  code[class*="language-"],
  pre[class*="language-"] {
  \tcolor: #657b83; /* base00 */
  \tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  \tfont-size: 1em;
  \ttext-align: left;
  \twhite-space: pre;
  \tword-spacing: normal;
  \tword-break: normal;
  \tword-wrap: normal;

  \tline-height: 1.5;

  \t-moz-tab-size: 4;
  \t-o-tab-size: 4;
  \ttab-size: 4;

  \t-webkit-hyphens: none;
  \t-moz-hyphens: none;
  \t-ms-hyphens: none;
  \thyphens: none;
  }

  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  \tbackground: #073642; /* base02 */
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
  \tbackground: #073642; /* base02 */
  }

  /* Code blocks */
  pre[class*="language-"] {
  \tpadding: 1em;
  \tmargin: .5em 0;
  \toverflow: auto;
  \tborder-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
  \tbackground-color: #fdf6e3; /* base3 */
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
  \tpadding: .1em;
  \tborder-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
  \tcolor: #93a1a1; /* base1 */
  }

  .token.punctuation {
  \tcolor: #586e75; /* base01 */
  }

  .token.namespace {
  \topacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
  \tcolor: #268bd2; /* blue */
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
  \tcolor: #2aa198; /* cyan */
  }

  .token.entity {
  \tcolor: #657b83; /* base00 */
  \tbackground: #eee8d5; /* base2 */
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
  \tcolor: #859900; /* green */
  }

  .token.function,
  .token.class-name {
  \tcolor: #b58900; /* yellow */
  }

  .token.regex,
  .token.important,
  .token.variable {
  \tcolor: #cb4b16; /* orange */
  }

  .token.important,
  .token.bold {
  \tfont-weight: bold;
  }
  .token.italic {
  \tfont-style: italic;
  }

  .token.entity {
  \tcursor: help;
  }
`
