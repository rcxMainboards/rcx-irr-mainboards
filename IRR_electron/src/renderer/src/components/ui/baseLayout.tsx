interface IBaseLayout {
  children: JSX.Element
}

function BaseLayout({ children }: IBaseLayout): JSX.Element {
  return <main className="min-h-screen">{children}</main>
}

export default BaseLayout
