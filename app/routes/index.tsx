// app/routes/index.tsx
import React from 'react';
import * as fs from 'node:fs';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { useLoaderData } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

const filePath = 'count.txt';

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  );
}

const getCount = createServerFn({ method: 'GET' }).handler(() => {
  return readCount();
});

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)

  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  // throw new Error('blah');
  console.log('---');
  const router = useRouter();
  console.log('====');
  const { data: state, isLoading: _isLoading } = useQuery({
    queryKey: ['xxx'],
    queryFn: () => 78,
  });

  return (
    <button
      onClick={() => {
        updateCount({ data: 1 }).then(() => {
          router.invalidate();
        });
      }}
    >
      Add 1 to {state}?
    </button>
  );
}
