// npm i workbox-sw
// https://developer.chrome.com/docs/workbox/modules/workbox-sw/#convert-code-using-import-statements-to-use-workbox-sw

import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
    })
);
