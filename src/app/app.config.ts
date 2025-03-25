import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),//ya no usamos zonejs
    provideRouter(routes,withComponentInputBinding()),//withComponentInputBinding => queres el ID => perfecto es como si fuera un @Input() mas de mi componente
    provideHttpClient(withFetch()), //permite hacer peticiones y (withFetch)le decimos a angular que ahora a la hora de hacer peticiones lo realice por meedio de fetch
    provideClientHydration()]
};
