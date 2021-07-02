import { Conversions } from '@/utils/conversions'

const conversions = new Conversions()

describe('Conversions', () => {
  it('should make the first letter of each name capitalize', () => {
    expect(conversions.FirstCapitalLetterinaString('jhony')).toBe('Jhony')
  })
  it('should turn a string into a number', () => {
    expect(typeof conversions.StringInNumber('123')).toBe('number')
  })
})
