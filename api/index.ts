import { App } from './src/app/app';
import { container } from './src/app/ioc';

const app = container.get(App);
app.start();