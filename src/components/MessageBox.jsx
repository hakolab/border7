import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * MessageBoxコンポーネント
 * 1. MessageBox関数の引数 message をオブジェクトリテラルで受け取る
 * 2. JSX内のコメントで示している箇所に、Mui の Typographyコンポーネントをレンダーする
 * 3. Typographyコンポーネントは以下の仕様に沿ってレンダーする
 *
 *  variant属性に "h5"、id属性に "message" を設定する
 *  子要素にMessageBox関数の引数 message を渡す
 *
 *  Test command
 *  `npm run test components/MessageBox.test.jsx`
 *
 * @param message メッセージ
 * @returns {JSX.Element} MessageBox
 */
export default function MessageBox() {
  return <Box id="message-box">{/* Typography */}</Box>
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired
}
