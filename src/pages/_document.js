import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { palette } from 'ui/theme';

import sanitize from '../sanitize';

const globalStyles = `
  ${sanitize}
  body {
    background-color: ${palette.colors.bgMain};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  * {
    font-family: BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  }
`;

class MyDocument extends Document {
  static getInitialProps = ({ renderPage }) => {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  };

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;

    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>ВКонтакте</title>
          <link rel="icon" href="/static/favicon.ico" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <style>{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
