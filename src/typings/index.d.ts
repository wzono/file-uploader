interface ObjectConstructor {
  assign(target : any, ...sources: any[]) : Object;
}

// interface ArrayConstructor {
//   from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;
//   from<T>(arrayLike: ArrayLike<T>): Array<T>;
// }

interface FileNameAndExtension {
  name: string;
  extension: string;
}

interface FileMessage {
  name: string;
  size: number;
  type: string;
}

interface FileItemListInterface {
  render: () => NodeList;
  add(file: File): void;
  add(files: FileList): void;
}