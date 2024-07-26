export function getSelectedFiles(e: React.ChangeEvent<HTMLInputElement>) {
  if (e) {
    const store = [];
    const files = e.target.files ?? new FileList();
    for (let x = 0; x < files.length; x++) {
      store.push(files[x]);
    }
    return store;
  }
  return undefined;
}

export function processSingleImage(e: React.ChangeEvent<HTMLInputElement>) {
  return new Promise<File>((resolve, reject) => {
    const fileList = getSelectedFiles(e);
    if (fileList !== undefined && fileList.length > 0) {
      resolve(fileList[0]);
    }
  });
}
