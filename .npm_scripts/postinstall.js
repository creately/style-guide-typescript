const path = require('path');
const shelljs = require('shelljs');

/**
 * Working directory will be the "style-guide-typescript" module root
 * The project directory is where the style rules should be set
 */
const PROJECT_DIR = path.resolve('../../');
const TSLINT_PATH = path.resolve('tslint.json');
const EDITORCONFIG_PATH = path.resolve('.editorconfig');

/**
 * Stop if npm install was run from the "style-guide-typescript" module.
 * Continue only if this module is installed as a dependency.
 */
if ( __dirname.indexOf('node_modules') === -1 ) {
    process.exit(0);
}

/**
 * Copy tslint and editorconfig file to the project directory
 */
shelljs.cp([ TSLINT_PATH, EDITORCONFIG_PATH ], PROJECT_DIR);