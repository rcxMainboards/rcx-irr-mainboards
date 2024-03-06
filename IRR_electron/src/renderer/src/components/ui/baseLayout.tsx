interface IBaseLayout {
  children: JSX.Element
}

function BaseLayout({ children }: IBaseLayout): JSX.Element {
  return <main className="grid min-h-screen place-items-center bg-gradient-l ">{children}</main>
}

export default BaseLayout
