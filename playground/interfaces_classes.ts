// Every directory on the operating system should be able to add a file. 
// Declare an interface named Directory at the top of index.ts. 
// Give it a method name, addFile, whose type is a function with one parameter, name, 
// of type string and returns void.
// Using the implements keyword, apply Directory to the DesktopDirectory class.

interface Directory {
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');