
// Declare another interface named Config. 
// Give it one type member with a property named default and a value of type DefaultConfig 
// (the interface you declared in the last step).

// In the Directory type, type the config property as Config, removing its existing nested object type.

interface DefaultConfig {
  encoding: string;
  permissions: string;
}

interface Config {
    default:  DefaultConfig 
}

interface Directory {
  config: Config;
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