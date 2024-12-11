// app/client.tsx
/// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'npm:react-dom/client';
import { StartClient } from 'npm:@tanstack/start';
import { createRouter } from './router.tsx';

const router = createRouter();

hydrateRoot(document, <StartClient router={router as any} />);
