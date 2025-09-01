const files = []

const filesPaths: string[] = []
const glob = new Bun.Glob(`{I.HTML,II.CSS}/*`)

for (const path of glob.scanSync()) {
  filesPaths.push(path)
}

filesPaths.sort()

for (const path of filesPaths) {
  files.push(await Bun.file(path).text())
}

const file = files.join(`\n`)

Bun.write(`./dist/webbook.md`, file)
