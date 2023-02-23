import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule as DefaultAppModule } from "./app/default/app.module";

platformBrowserDynamic()
  .bootstrapModule(DefaultAppModule)
  .catch((err) => console.error(err));
