const gobble = require( 'gobble' );
const test = require( 'gobble-test' );
const path = require( 'path' );
const import_ = require( '../' );

function getSrc(){
	return gobble( path.join( __dirname, 'src' ) );
}

test([
  {
    name: 'simple import',
    definition: getSrc().transform( import_ ),
    expected: path.join( __dirname, 'expected/simple' )
  },
  {
    name: 'import with assignment',
    definition: getSrc().transform( import_ , {
    	assign ( name ) {
    		return `Ractive.components[${name}] = ${name};`;
    	}
    }),
    expected: path.join( __dirname, 'expected/assignment' )
  }
]);
