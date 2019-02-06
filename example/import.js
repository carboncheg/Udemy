import {one, two} from "./export";

console.log(`${one} & ${two}`);

import {one as item1, two as item2} from "./export";

console.log(`${item1} & ${item2}`);

import * as numbers from "./export";

console.log(`${numbers.one} & ${numbers.two}`);