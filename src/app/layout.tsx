export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="fixed top-0 right-0 p-4 flex-col ">
            <p> Phillip Adler </p>
            <p> pcadler@gmail.com</p>
            <p> 818-518-4354 </p>
            <a href="https://github.com/PranoSA">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="Github"
                className="w-10 h-10"
              />
            </a>
            <a href="https://linkedin.com/in/phillip-carroll-adler">
              LinkedIn→{' '}
            </a>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
