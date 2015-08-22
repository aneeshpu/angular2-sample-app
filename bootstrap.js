import 'es6-shim';
import 'angular';
import { AsModule, Component, View, bootstrap } from './bower_components/a1atscript/dist/a1atscript.bundle.js';

@AsModule('App', [])
@Component({
  selector: 'jump-app'
})
@View({
  template: `<p>hello world</p>`,
})
class TestApp {
  constructor(){
    console.log('constructor');
  }
}

bootstrap(TestApp);
