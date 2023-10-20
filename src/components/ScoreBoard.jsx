import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * ScoreBoard Component
 * 1. ScoreBoard関数の引数 score をオブジェクトリテラルで受け取る
 * 2. JSX内のコメントで示している箇所に、MuiのTypographyコンポーネントをセットする
 *    Typographyコンポーネントは以下の仕様に沿ってセットする
 *
 *  variant属性に "h4"、id属性に "score-text" を設定する
 *  子要素にScoreBoard関数の引数 score を渡す
 *
 *  Test command
 *  `npm run test components/ScoreBoard.test.jsx`
 *
 * @param score スコア
 * @returns {JSX.Element} ScoreBoard
 */
export default function ScoreBoard() {
  return <Box id={'score-board'}>{/* Typography */}</Box>
}

ScoreBoard.propTypes = {
  score: PropTypes.string.isRequired
}
