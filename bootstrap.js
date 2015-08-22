import 'es6-shim';
import 'angular';
import { AsModule, Component, View, bootstrap } from 'a1atscript';

@AsModule('App', [])
@Component({
  selector: 'jump-app'
})
@View({
  template: `<p>hello my dear world</p>`,
})
class TestApp {
  constructor(){
    console.log('constructor');
  }
}

bootstrap(TestApp);
