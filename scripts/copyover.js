const fs = require('node:fs')
const path = require('node:path')

const src = path.join(__dirname, '..', 'dist')
const dest = path.join(__dirname, '..', '..', 'aarons-puzzles', 'Blog')

if (!fs.existsSync(src)) {
  console.error('dist/ not found — run `npm run build` first.')
  process.exit(1)
}

fs.rmSync(dest, { recursive: true, force: true })
fs.mkdirSync(dest, { recursive: true })
fs.cpSync(src, dest, { recursive: true })

console.log(`Copied ${src} -> ${dest}`)
