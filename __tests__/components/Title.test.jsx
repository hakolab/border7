import { render, screen } from '@testing-library/react'
import Title from '../../src/components/Title'

describe('Title コンポーネントのテスト', () => {
  test('props.message が表示されること', () => {
    render(<Title />)

    expect(screen.getByText('Border7')).toBeInTheDocument()
    expect(screen.getByText('with プロプラ!')).toBeInTheDocument()
  })
})
