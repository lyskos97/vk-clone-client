import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

import sanitize from '../sanitize';
import vars from '../vars';

const globalStyles = `
  ${sanitize}
  body {
    background-color: ${vars.colors.bg};
  }

  a {
    text-decoration: none;
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
