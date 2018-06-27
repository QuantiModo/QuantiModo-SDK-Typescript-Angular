import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AnalyticsService } from './api/analytics.service';
import { AppSettingsService } from './api/appSettings.service';
import { AuthenticationService } from './api/authentication.service';
import { ConnectorsService } from './api/connectors.service';
import { MeasurementsService } from './api/measurements.service';
import { NotificationsService } from './api/notifications.service';
import { RemindersService } from './api/reminders.service';
import { SharesService } from './api/shares.service';
import { StudiesService } from './api/studies.service';
import { UnitsService } from './api/units.service';
import { UserService } from './api/user.service';
import { VariablesService } from './api/variables.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AnalyticsService,
    AppSettingsService,
    AuthenticationService,
    ConnectorsService,
    MeasurementsService,
    NotificationsService,
    RemindersService,
    SharesService,
    StudiesService,
    UnitsService,
    UserService,
    VariablesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
