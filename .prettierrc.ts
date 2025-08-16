import { type Config } from "prettier";

const config: Config = {
	"plugins": ["prettier-plugin-astro"],
	"astroAllowShorthand": true,
	"arrowParens": "avoid",
	"bracketSameLine": true,
	"objectWrap": "preserve",
	"bracketSpacing": true,
	"semi": true,
	"experimentalOperatorPosition": "start",
	"experimentalTernaries": false,
	"singleQuote": false,
	"jsxSingleQuote": false,
	"quoteProps": "consistent",
	"trailingComma": "all",
	"singleAttributePerLine": false,
	"htmlWhitespaceSensitivity": "css",
	"vueIndentScriptAndStyle": true,
	"proseWrap": "always",
	"insertPragma": false,
	"printWidth": 100,
	"requirePragma": false,
	"tabWidth": 4,
	"useTabs": true,
	"embeddedLanguageFormatting": "auto"
};

export default config;