import 'es6-shim';
import 'angular';
import { AsModule, Component, View, bootstrap } from 'a1atscript';

@AsModule('App', [])
@Component({
  selector: 'jump-app',
  controllerAs: 'vm'
})
@View({
  template: `<p>Hello my dear world {{vm.name}}</p>`,
})
class TestApp {
  name:string;
  constructor(){
    this.name = "More Awesome";
  }
}

bootstrap(TestApp);
