/* eslint-disable react/jsx-props-no-spreading */
import Document, {
  Html, Head, Main, NextScript
} from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head />
        <body className="overflow-x-hidden scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md active:scrollbar-thumb-gray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
