import path from 'path'
import { fileURLToPath } from 'url'

export const __filename = path.resolve(
  fileURLToPath(import.meta.url), '../../app/app.js')

// App root directory
export const __dirname = path.dirname(__filename)
