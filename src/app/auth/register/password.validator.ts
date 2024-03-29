import { AbstractControl } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
    const password = control.get('UserPassword');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value != confirmPassword.value ?
    {'mismatch' : true} : null;
}
