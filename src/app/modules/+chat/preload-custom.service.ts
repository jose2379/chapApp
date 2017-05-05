import {of} from "rxjs/observable/of";
import {Observable} from "rxjs";
import {PreloadingStrategy, Route} from "@angular/router";

export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
