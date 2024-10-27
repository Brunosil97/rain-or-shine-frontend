// tests/constants.test.ts
import { describe, expect, it } from 'vitest'
import { expandedWidth, minimisedWidth } from '@/config/constants'

describe('constants.ts exports', () => {
  it('should export expandedWidth and minimisedWidth correctly', () => {
    expect(expandedWidth).toBeDefined()
    expect(expandedWidth).toBe(220)

    expect(minimisedWidth).toBeDefined()
    expect(minimisedWidth).toBe(8)
  })
})
