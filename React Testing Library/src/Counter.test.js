import Counter from './Counter'
import { render, fireEvent, screen } from '@testing-library/react'
import { JSDOM } from 'jsdom'

describe('Counter Component', () => {
  it('displays the correct initial count', () => {
    const { getByTestId } = render(<Counter initialeCount={0} />)
    const countValue = Number(getByTestId('count').textContent)
    expect(countValue).toBe(0)
  })

  it('increments by 1 when the Increment button is clicked', () => {
    const { getByTestId, getByText } = render(<Counter initialeCount={0} />)
    const incrementBtn = getByText(/Increment/)

    fireEvent.click(incrementBtn)

    const countValue = Number(getByTestId('count').textContent)
    expect(countValue).toBe(1)
  })
})

beforeAll(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  global.window = dom.window
  global.document = dom.window.document
  global.navigator = dom.window.navigator
})
