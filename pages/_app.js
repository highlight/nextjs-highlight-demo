import { H } from 'highlight.run'
import '../styles/globals.css'

H.init(process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID ?? '<YOUR_PROJECT_ID>', {
  enableStrictPrivacy: false,
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
  },
  tracingOrigins: true,
  backendUrl: '/highlight-events',
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
