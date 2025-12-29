//Inside the Directory interface, add a config type member that matches the config property of DesktopDirectory.
//  You should write a type that has a nested default object.

interface Directory {
   config: { 
    default: {
      encoding: string,
      permissions: string,
    }}
  addFile: (name: string) => void;  
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);