import { describe, expect, test } from 'bun:test'
import { execSync } from 'node:child_process'
import { join } from 'node:path'

const root = join(import.meta.dir, '..')

describe('eslint', () => {
  test('config loads without errors', () => {
    const result = execSync(
      'bunx eslint --print-config src/pages/index.astro',
      {
        cwd: root,
        encoding: 'utf-8'
      }
    )
    const config = JSON.parse(result)
    expect(config.rules).toBeDefined()
  })

  test('passes on valid astro page', () => {
    expect(() => {
      execSync('bunx eslint src/pages/index.astro', { cwd: root })
    }).not.toThrow()
  })
})
