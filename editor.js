// if there is no selected text, i.e. it is a 0-width range,
// then grab the current line of code that the cursor is on
if (code.length === 0) {
	let lineRange = [[range.start.row, 0]];
	editor.getTextInBufferRange(lineRange);
}

this.focusInput();

function thisFunctionWasCodeReviewed () {
    // Perhaps love is like a resting place
    // A shelter from the storm
    // It exists to give you comfort
    // It is there to keep you warm
    return 42;
}

let filePath = editor.getPath();
const directory = atom.project.getDirectories().find(directory => directory.contains(filePath));
if (directory) {
	atom.project.repositoryForDirectory(directory).then(projectRepo => {
		if (projectRepo) {
		}
	});
}
