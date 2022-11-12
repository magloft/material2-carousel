import { CommonModule } from '@angular/common'
import { Injectable, ModuleWithProviders, NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component'
import { MatCarouselComponent } from './carousel.component'

@Injectable()
export class MatCarouselHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  }
}

@NgModule({
  declarations: [MatCarouselComponent, MatCarouselSlideComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule],
  exports: [MatCarouselComponent, MatCarouselSlideComponent]
})
export class MatCarouselModule {
  static forRoot(): ModuleWithProviders<MatCarouselModule> {
    return {
      ngModule: MatCarouselModule,
      providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: MatCarouselHammerConfig }
      ]
    }
  }
}
