npm-compact
===========

compaction of npm-shrinkwrap.json to make it truely `shrink`

shared dependencies will be converged to their common ancestor node as long as it doesn't cause conflicts
designed specifically for application, not modules

this module is meant to be embedded by the actual utility which does npm install or shrinkwrap
as it takes an input of the shrinkwrap json format, and output an optimized shrinkwrap json for further use.

~~~javascript

var truelyShrinked = require('npm-compact').compact(require.resolve('./npm-shrinkwrap.json'));

~~~
