import Link from "next/link";

export const Header = () => {
  //ブログのヘッダーを作成する
  return (
    <header className="header">
      <div className="text-center bg-cyan-800 p-5 border-dashed border-b-8 border-stone-900">
        <nav>
          <h1 className="text-white">Yuzu Pro Blog</h1>
          <ul>
            <li className="inline-block mx-10 text-white hover:underline">
              <Link href="/">ブログ</Link>
            </li>
            <li className="inline-block mx-10 text-white hover:underline">
              <Link href="/">カテゴリ別</Link>
            </li>
            <li className="inline-block mx-10 text-white hover:underline">
              <Link href="/">プライバシーポリシー</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
