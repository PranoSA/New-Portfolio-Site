'use client';

import { signOut, signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const LoginButton = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (session) {
    return (
      <div className="w-1/2 fixed top-0 left-0 p-4 flex-col hover:font-2xl hover:font-white ">
        <div className="flex flex-row items-center">
          {pathname != '/' && (
            <div className="pr-10">
              <Link
                href="/"
                className="text-blue-900 font-bold text-bold hover:underline text-3xl"
              >
                ← Home
              </Link>
            </div>
          )}
          <button className="p-5 text-1xl font-bold " onClick={() => signOut()}>
            Sign out
          </button>
        </div>
        <div className="pt-0 pl-5"> Welcome {session.user.name} ! </div>
      </div>
    );
  } else {
    return (
      <div className="fixed top-0  left-0 p-4 flex-col ">
        <div className="flex flex-row items-center">
          {pathname != '/' && (
            <div className="pr-10">
              <Link
                href="/"
                className="text-blue-900 font-bold text-bold hover:underline text-3xl"
              >
                ← Home
              </Link>
            </div>
          )}
          <button
            className="p-5 text-1xl"
            onClick={() => {
              console.log('signing in');
              signIn();
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
};

export default LoginButton;
