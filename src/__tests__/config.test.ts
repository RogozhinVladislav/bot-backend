import config from '../config'

describe('tests', () => {
  it('should check default port value', () => {
    expect(config.PORT).toEqual(4000)
  })
})

