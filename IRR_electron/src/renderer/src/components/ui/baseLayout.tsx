interface IBaseLayout {
  children: JSX.Element
}

function BaseLayout({ children }: IBaseLayout): JSX.Element {
  return <main className="bg-gradient-l grid min-h-screen place-items-center">{children}</main>
}

export default BaseLayout
