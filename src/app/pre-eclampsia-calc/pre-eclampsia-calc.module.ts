import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreEclampsiaCalcComponent } from './pre-eclampsia-calc.component';
import {
  MatButtonModule, MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatProgressBarModule,
  MatSliderModule,
  MatSlideToggleModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {ButtonGroupModule} from '../button-group/button-group.module';
import {ExpandableModule} from '../expandable/expandable.module';
import {CalculatorModule} from '../calculator/calculator.module';
import {BmiCalculatorModule} from '../expandable-bmi-calculator/bmi-calculator.module';
import {ReferenceModule} from '../reference/reference.module';
import {MockTextAreaModule} from '../mock-text-area/mock-text-area.module';

@NgModule({
  declarations: [PreEclampsiaCalcComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,

    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,

    ButtonGroupModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatProgressBarModule,
    ExpandableModule,
    CalculatorModule,
    BmiCalculatorModule,
    ReferenceModule,
    MatDividerModule,
    MockTextAreaModule,
  ]
})
export class PreEclampsiaCalcModule { }
