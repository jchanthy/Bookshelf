import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default (req, res) => res.sendFile(join(__dirname, '../../' + 'public', 'build', 'index.html'));
