// if there is no selected text, i.e. it is a 0-width range,
// then grab the current line of code that the cursor is on
if (code.length === 0) {
	let lineRange = [[range.start.row, 0]];
	editor.getTextInBufferRange(lineRange);
}

this.focusInput();

let filePath = editor.getPath().normalizePath();
const directory = atom.project.getDirectories().find(directory => directory.contains(filePath));
if (directory) {
	atom.project.repositoryForDirectory(directory).then(projectRepo => {
		if (projectRepo) {
		}
	});
}
