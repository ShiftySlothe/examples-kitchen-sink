import { ExampleProps } from 'utils/ExamplePage';

export const meta: ExampleProps = {
  title: 'Next-Auth Authentication',
  href: '/next-auth',
  summary: (
    <>
      <p>
        Using tRPC &amp; <code>NextAuth</code>
      </p>
    </>
  ),
  detail: (
    <>
      <p>
        Using tRPC &amp;{' '}
        <a
          href="https://next-auth.js.org/"
          target="_blank"
          rel="noreferrer"
          className="font-mono"
        >
          NextAuth
        </a>
      </p>
    </>
  ),
  files: [
    { title: 'Page', path: 'feature/next-auth/index.tsx' },
    { title: 'Router', path: 'feature/next-auth/router.tsx' },
    { title: 'Context', path: 'server/context.ts' },
  ],
};
