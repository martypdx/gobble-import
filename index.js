const path = require('path');
const camelCase = require('camel-case');

function createImport( content, options ){

	var filename = this.filename;
	var basename = path.basename( filename, path.extname( filename ) );
	var importAs = camelCase( basename );

	var assignment = getAssignment( basename, importAs, options );

	if ( assignment ) {
		return `import ${importAs} from './${basename}';` + '\n' + assignment;
	}
	else
	{
		return `import './${basename}';`;
	}
}

createImport.defaults = {
	accept: ['.js', '.html'],
	ext: '.js'
};

module.exports = createImport;

function getAssignment( basename, importAs, options ) {
	var assign = getOption( options );
	if ( !assign ) return '';

	var assignment = assign( basename, importAs );
	if ( !assignment ) return '';

	assignment = assignment.trim();
	if ( assignment.slice( -1 ) !== ';' ) assignment += ';';
	return assignment;

}

function getOption( options ) {
	if ( !options ) return;

	const assign = options.assign;

	if ( assign && typeof assign !== 'function' ) {
		throw new Error( 'gobble-import options.assign, if supplied, must be a function' );
	}

	return assign;
}
