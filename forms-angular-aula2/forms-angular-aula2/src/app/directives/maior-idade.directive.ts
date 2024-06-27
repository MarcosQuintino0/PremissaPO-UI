import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[maiorIdadeValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaiorIdadeDirective,
      multi: true,
    },
  ],
})
export class MaiorIdadeDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNacimento = control.value;
    const anoNascimento = new Date(dataNacimento).getUTCFullYear();
    const anoNasciMais18 = anoNascimento + 18;
    const anoAtual = new Date().getUTCFullYear();

    const ehMaior = anoNasciMais18 <= anoAtual;

    return ehMaior ? null : { maiorIdadeValidator: true };
  }
}
