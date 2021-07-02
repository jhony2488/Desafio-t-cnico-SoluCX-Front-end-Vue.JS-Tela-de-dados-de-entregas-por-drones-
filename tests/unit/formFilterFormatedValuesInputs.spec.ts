import { Formated } from '@/utils/formFilterFormatedValuesInputs'

const formated = new Formated()

describe('FiltersForm', () => {
  it('should make the first letter of each name capitalize', () => {
    expect(formated.formFilterFormatedValuesStringInputs('   jhony   ')).toBe('jhony')
  })
})
