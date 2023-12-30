import { Wrapper } from "./wrapper";

export default function App({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          {children}
        </Wrapper>    
      </body>
    </html>
  )
}