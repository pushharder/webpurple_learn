import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../SiteMetadata'
import Header from '../Header';
import { MainWrapper, Book } from './styles';
import GlobalStyle from '../GlobalStyle';

type Props = {
  pageTitle: string;
}

const TemplateWrapper: React.FC<Props> = ({ pageTitle, children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <MainWrapper>
      <Helmet>
        <html lang="ru" />
        <title>{`${pageTitle} · ${title}`}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon-precomposed-152.png"
        />
        <link
          rel="icon"
          href="/img/favicon.ico"
          sizes="32x32"
          type="x-icon"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="learn" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/wp.png" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Book>{children}</Book>
    </MainWrapper>
  )
}

export default TemplateWrapper